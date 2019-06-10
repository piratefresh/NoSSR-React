import React from "react";
import {
  TreeView
  // processTreeViewItems,
  // handleTreeViewCheckChange,
  // moveTreeViewItem,
  // TreeViewDragAnalyzer,
  // TreeViewDragClue
} from "@progress/kendo-react-treeview";
import "@progress/kendo-react-animation";
import {ApolloConsumer} from "react-apollo";
import {useMutation} from "react-apollo-hooks";
import gql from "graphql-tag";

export default class TreeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {data} = this.props;
    if (data.length > 0) {
      return (
        <ApolloConsumer>
          {client => {
            return (
              <TreeView
                data={data}
                expandIcons={true}
                onExpandChange={this.onExpandChange}
                onItemClick={event => {
                  client.writeData({data: {categoryId: event.item.id}});
                  event.item.selected = !event.item.selected;
                  const resourceData = client.readQuery({query: GET_RESOURCES});
                  const criteria = event.item.id;
                  const result = resourceData.GetResources.filter(
                    item =>
                      item.ResourceCategoryMembership[0].ResourceCategoryID ===
                      criteria
                  );

                  client.writeData({
                    data: {resources: result, __typename: "resources"}
                  });

                  this.forceUpdate();
                  // Call function to update grid on category click
                }}
                aria-multiselectable={true}
              />
            );
          }}
        </ApolloConsumer>
      );
    } else {
      return <h2>Loading</h2>;
    }
  }
  onExpandChange = event => {
    event.item.expanded = !event.item.expanded;
    this.forceUpdate();
  };
}

const GET_RESOURCES = gql`
  query {
    GetResources {
      ID
      Name
      CategoryID
      Thumbnail
      ResourceCategoryMembership {
        ResourceID
        ResourceCategoryID
        ResourceOrder
      }
      ChildResources {
        ...ChildrenRecursive
      }
    }
  }

  fragment ChildrenRecursive on ChildResources {
    ChildResources {
      ...ResourcesFields
      ChildResources {
        ...ResourcesFields
        ChildResources {
          ...ResourcesFields
          ChildResources {
            ...ResourcesFields
            ChildResources {
              ...ResourcesFields
            }
          }
        }
      }
    }
  }

  fragment ResourcesFields on ChildResources {
    ID
    Thumbnail
    SortOrder
  }
`;

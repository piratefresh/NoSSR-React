import React from "react";
import {TreeView} from "@progress/kendo-react-treeview";
import "@progress/kendo-react-animation";
import {useMutation} from "react-apollo-hooks";
import gql from "graphql-tag";

const SET_CATEGORY_ID = gql`
  mutation setCategoryId($categoryId: Int) {
    setCategoryId(categoryId: $categoryId) @client
  }
`;

export default function TreeScreen(props) {
  const setCategoryId = useMutation(SET_CATEGORY_ID);

  const onExpandChange = event => {
    event.item.expanded = !event.item.expanded;
  };

  if (props.data.length > 0) {
    return (
      <TreeView
        data={props.data}
        expandIcons={true}
        onExpandChange={onExpandChange}
        onItemClick={event => {
          event.item.selected = !event.item.selected;
          const categoryId = event.item.id;
          console.log(categoryId);
          setCategoryId({variables: {categoryId}});
          // this.forceUpdate();
        }}
        aria-multiselectable={true}
      />
    );
  } else {
    return <h2>Loading</h2>;
  }
}

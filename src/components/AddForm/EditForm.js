import React from "react";
import {useQuery} from "react-apollo-hooks";
import gql from "graphql-tag";
import {ButtonStyleSecondary, ButtonStyleBlue} from "../buttons";
import {AddCategoryForm as EditCategoryForm} from "../form/Form";
import Grid from "../grid/Grid";
import LottieLoader from "../loading/lottieLoader";
import {DropDownList} from "@progress/kendo-react-dropdowns";

const GET_LOCAL_CATEGORIES = gql`
  query getCategories {
    getCategories @client {
      Name
      ID
      Children {
        Name
        ID
        ...ChildrenLocalRecursive
      }
    }
  }

  fragment ChildrenLocalRecursive on Children {
    Children {
      ...ChildLocalFields
      Children {
        ...ChildLocalFields
        Children {
          ...ChildLocalFields
          Children {
            ...ChildLocalFields
            Children {
              ...ChildLocalFields
            }
          }
        }
      }
    }
  }

  fragment ChildLocalFields on Children {
    ID
    Name
  }
`;

function EditForm(props) {
  const {selectedItems, resources} = props;
  const {data, loading, error} = useQuery(GET_LOCAL_CATEGORIES);

  // true until slowest query is fetched
  if (loading) {
    return <LottieLoader />;
  }

  // Get categories name for edit
  const categoryArr = [];
  JSON.stringify(data.getCategories, (key, value) => {
    if (key === "Name") categoryArr.push(value);
    return value;
  });

  const items = resources.filter(resource => {
    return selectedItems.map(itemID => parseInt(itemID)).includes(resource.ID);
  });
  if (items.length === 0) {
    return <h2>No Item Selected</h2>;
  }
  return (
    <EditCategoryForm>
      <Grid data={items} categories={categoryArr} resizable />
      <div className="priamryButtons">
        <ButtonStyleSecondary small>Cancel</ButtonStyleSecondary>
        <ButtonStyleBlue small>Save</ButtonStyleBlue>
      </div>
    </EditCategoryForm>
  );
}

export default EditForm;

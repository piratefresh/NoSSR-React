import gql from "graphql-tag";

const GET_MASTERLISTS = gql`
  {
    getCategories {
      ID
      Name
      Children {
        Thumbnail
        ID
        Name
        ParentResourceCategoryID
        ...ChildrenRecursive
      }
    }
    GetResources {
      Thumbnail
      ID
      Name
      CategoryID
      ResourceID
      ResourceCategoryMembership {
        ResourceID
        ResourceCategoryID
        ResourceOrder
      }
      ChildResources {
        ...ResourcesChildrenRecursive
      }
    }
    getTemplates {
      Name
      AddedBy
      ID
      Active
      Resources
    }
    selectedCategoryId @client {
      categoryId
    }
  }

  fragment ChildrenRecursive on Children {
    Children {
      ...ChildFields
      Children {
        ...ChildFields
        Children {
          ...ChildFields
          Children {
            ...ChildFields
            Children {
              ...ChildFields
            }
          }
        }
      }
    }
  }

  fragment ChildFields on Children {
    Thumbnail
    ID
    Name
    ParentResourceCategoryID
    ResourceID
  }

  fragment ResourcesChildrenRecursive on ChildResources {
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
    Thumbnail
    ID
    SortOrder
  }
`;

const GET_TEMPLATES = gql`
  query {
    getTemplates {
      Name
      AddedBy
      ID
      Active
      Resources
    }
  }
`;

export {GET_MASTERLISTS, GET_TEMPLATES};

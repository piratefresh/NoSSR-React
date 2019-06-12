// import gql from "graphql-tag";

// export const GET_RESOURCES = gql`
//   query {
//     GetResources {
//       ID
//       Name
//       CategoryID
//       Thumbnail
//       ResourceCategoryMembership {
//         ResourceID
//         ResourceCategoryID
//         ResourceOrder
//       }
//       ChildResources {
//         ...ChildrenRecursive
//       }
//     }
//   }

//   fragment ChildrenRecursive on ChildResources {
//     ChildResources {
//       ...ResourcesFields
//       ChildResources {
//         ...ResourcesFields
//         ChildResources {
//           ...ResourcesFields
//           ChildResources {
//             ...ResourcesFields
//             ChildResources {
//               ...ResourcesFields
//             }
//           }
//         }
//       }
//     }
//   }

//   fragment ResourcesFields on ChildResources {
//     ID
//     Thumbnail
//     SortOrder
//   }
// `;

// export const GET_CATEGORIES = gql`
//   {
//     getCategories {
//       ID
//       Name
//       Children {
//         Thumbnail
//         ID
//         Name
//         ...ChildrenRecursive
//       }
//     }
//   }

//   fragment ChildrenRecursive on Children {
//     Children {
//       ...ChildFields
//       Children {
//         ...ChildFields
//         Children {
//           ...ChildFields
//           Children {
//             ...ChildFields
//             Children {
//               ...ChildFields
//             }
//           }
//         }
//       }
//     }
//   }

//   fragment ChildFields on Children {
//     Thumbnail
//     ID
//     Name
//   }
// `;

// export const GET_TEMPLATES = gql`
//   query {
//     getTemplates {
//       Thumbnail
//       Name
//       AddedBy
//       ID
//       Active
//       Resources
//     }
//   }
// `;

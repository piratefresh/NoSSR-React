import gql from "graphql-tag";

const GET_LOCAL_CATEGORIES = gql`
  query getLocalCategories {
    getCategories @client {
      ID
      Name
      Children {
        Thumbnail
        ID
        Name
        ...ChildrenRecursive
      }
    }
  }
`;

const GET_LOCAL_RESOURCES = gql`
  query getLocalResources {
    getResources @client {
      ID
      Name
      CategoryID
      Thumbnail
      ResourceCategoryMembership {
        ResourceID
        ResourceCategoryID
        ResourceOrder
      }
    }
  }
`;

const GET_LOCAL_TEMPLATES = gql`
  query getLocalTemplates {
    getTemplates @client {
      Thumbnail
      Name
      AddedBy
      ID
      Active
      Resources
    }
  }
`;

export const resolvers = {
  Mutation: {
    setCategoryId: (parent, {id}, {cache}, info) => {
      cache.writeData({
        data: {
          categoryId: id
        }
      });

      return null;
    }
  },
  Query: {
    getLocalResources: (parent, args, {cache}) => {
      const {resources} = cache.readQuery({
        query: GET_LOCAL_RESOURCES
      });

      return resources;
    }
  },
  getLocalCategories: (parent, args, {cache}) => {
    const {categories} = cache.readQuery({
      query: GET_LOCAL_CATEGORIES
    });

    return categories;
  },
  getLocalTemplates: (parent, args, {cache}) => {
    const {Templates} = cache.readQuery({
      query: GET_LOCAL_TEMPLATES
    });

    return Templates;
  }
};

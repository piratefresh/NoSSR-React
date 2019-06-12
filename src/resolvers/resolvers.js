import gql from "graphql-tag";

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
  }
};

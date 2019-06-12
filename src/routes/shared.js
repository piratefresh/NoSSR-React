import React, {Fragment} from "react";
import {ApolloConsumer} from "react-apollo";
import {Query} from "react-apollo";
import gql from "graphql-tag";
import TestButton from "../components/shared/testbutton";

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

export default function Shared() {
  return (
    <Query query={IS_LOGGED_IN}>
      {({data}) => {
        console.log(data);
        return (
          <Fragment>
            <TestButton>Toggle</TestButton>
            {data.isLoggedIn ? "true" : "false"}
          </Fragment>
        );
      }}
    </Query>
  );
}

import React from "react";
import {ApolloConsumer, Query} from "react-apollo";

export default function TestButton() {
  return (
    <ApolloConsumer>
      {client => {
        return (
          <button
            onClick={() => {
              client.writeData({
                data: {
                  isLoggedIn: true
                }
              });
              this.forceUpdate();
            }}
          >
            TEST{" "}
          </button>
        );
      }}
    </ApolloConsumer>
  );
}

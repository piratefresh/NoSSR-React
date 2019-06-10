import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom";
import {ApolloClient} from "apollo-client";
import {ApolloProvider} from "react-apollo";
import {ApolloLink} from "apollo-link";
import {HttpLink} from "apollo-link-http";
import {InMemoryCache} from "apollo-cache-inmemory";
import {withClientState} from "apollo-link-state";
import {ApolloProvider as ApolloHooksProvider} from "react-apollo-hooks";
import {resolvers} from "./resolvers/resolvers";
import {
  GET_RESOURCES,
  GET_TEMPLATES,
  GET_CATEGORIES
} from "../src/gql/masterlist";
import auth from "../src/auth/Auth";
import * as serviceWorker from "./serviceWorker";

const cache = new InMemoryCache();

const defaults = {
  networkStatus: {
    __typename: "NetworkStatus",
    isConnected: false
  },
  selectedRepositoryIds: ["MDEwOlJlcG9zaXRvcnk2MzM1MjkwNw=="]
};

const stateLink = withClientState({
  cache
});

const URL = "http://localhost:4000/graphql";
const JWTToken = auth.getIdToken();

const httpLink = new HttpLink({
  uri: URL,
  headers: {
    authorization: `Bearer ${JWTToken}`
  }
});

const link = ApolloLink.from([stateLink, httpLink]);

const client = new ApolloClient({
  link,
  cache,
  resolvers: resolvers,
  connectToDevTools: true
});

// We initilazie our cache with master list of resource, categories, and templates
const initData = async () => {
  const resourcesData = await client.query({
    query: GET_RESOURCES
  });
  const categoriesData = await client.query({
    query: GET_CATEGORIES
  });
  const templatesData = await client.query({
    query: GET_TEMPLATES
  });
  console.log(categoriesData.data.getCategories);
  client.writeData({
    data: {
      resources: resourcesData.data.GetResources,
      categories: categoriesData.data.getCategories,
      templates: templatesData.data.getTemplates
    }
  });
};

initData();

// client.resetStore()
client.onResetStore(async () => {
  initData();
});
// client.clearStore()
client.onClearStore(async () => {
  initData();
});

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <App />
      </ApolloHooksProvider>
    </ApolloProvider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

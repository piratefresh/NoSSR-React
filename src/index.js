import React, {Suspense} from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom";
import {ApolloClient} from "apollo-client";
import {ApolloProvider} from "react-apollo";
import {ApolloLink} from "apollo-link";
import {HttpLink} from "apollo-link-http";
import {InMemoryCache} from "apollo-cache-inmemory";
import {ApolloProvider as ApolloHooksProvider} from "react-apollo-hooks";
import {resolvers} from "./resolvers/resolvers";
import auth from "../src/auth/Auth";
import * as serviceWorker from "./serviceWorker";
import LoaderLoader from "../src/components/loading/lottieLoader";

const URL = "http://localhost:4000/graphql";
const JWTToken = auth.getIdToken();

const cache = new InMemoryCache();

const httpLink = new HttpLink({
  uri: URL,
  headers: {
    authorization: `Bearer ${JWTToken}`
  }
});

const client = new ApolloClient({
  link: httpLink,
  cache,
  resolvers: {
    Mutation: {
      setCategoryId: (_, {categoryId}, {cache}) => {
        const data = {
          selectedCategoryId: {
            categoryId,
            __typename: "categoryID"
          }
        };
        cache.writeData({data});
        return null;
      },
      setThumbnailTemplates: (_, {categoryId}, {cache}) => {
        const data = {
          templateThumbnailId: {
            categoryId,
            __typename: "templateThumbnailId"
          }
        };
        cache.writeData({data});
        return null;
      }
    }
  },
  connectToDevTools: true
});

cache.writeData({
  data: {
    selectedCategoryId: {
      categoryId: 2246,
      __typename: "categoryID"
    }
  }
});

// client.resetStore()
client.onResetStore(async () => {
  cache.writeData({
    data: {
      selectedCategoryId: {
        categoryId: 2246
      }
    }
  });
});
// client.clearStore()
client.onClearStore(async () => {
  cache.writeData({
    data: {
      selectedCategoryId: {
        categoryId: 2246
      }
    }
  });
});

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <Suspense fallback={<LoaderLoader />}>
        <ApolloHooksProvider client={client}>
          <App />
        </ApolloHooksProvider>
      </Suspense>
    </ApolloProvider>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

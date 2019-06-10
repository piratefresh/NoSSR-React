import React, {Component, lazy, Suspense, Fragment} from "react";
import {Route, Switch, Redirect, withRouter} from "react-router-dom";
import styled, {createGlobalStyle, ThemeProvider} from "styled-components";
import auth from "../src/auth/Auth";
import PrivateRoute from "../src/utils/PrivateRoute";
import Meta from "./components/Meta";
import Navigation from "./components/Navigation";
import "./App.css";

const theme = {
  colors: {
    yellow: "#ffbe0d",
    grey: "#617182",
    lightblue: "#F0F6FF",
    blue: "#1F98F4",
    green: "#4CAF50",
    orange: "#DEA700",
    Red: "#F44336",
    greyblue: "#4E5A69"
  }
};

// Global styles but theme- and update-able!
const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      background:	#F6F6F6;
    }
  `;

const Inner = styled.div`
  margin-left: ${props => (props.auth ? "120px" : "0")}
  flex-grow: 1;
  min-height: 100%;
  font-family: "Roboto", sans-serif;
  padding: ${props => (props.auth ? "4em" : "0")};
`;

// App
const AppResources = lazy(() => import("./routes/appresources"));
// Analytics
const Index = lazy(() => import("./routes/index"));
const Templates = lazy(() => import("./routes/templates"));
const Resources = lazy(() => import("./routes/resources"));
const Callback = lazy(() => import("./routes/callback"));
const Login = lazy(() => import("./routes/login"));

const LoadingMessage = () => "I'm loading...";

class App extends Component {
  async componentDidMount() {
    if (this.props.location.pathname === "/callback") return;
    try {
      await auth.silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error === "login_required") return;
      console.log(err.error);
    }
  }

  render() {
    return (
      <Fragment>
        {console.log(auth.isAuthenticated())}
        {auth.isAuthenticated() === true ? <Navigation /> : <Fragment />}

        <Suspense fallback={<LoadingMessage />}>
          <Meta />
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <Inner auth={auth.isAuthenticated()}>
              <Switch>
                <Route path="/login" component={Login} />
                <PrivateRoute exact path="/" component={Index} />
                <PrivateRoute path="/templates" component={Templates} />
                <PrivateRoute path="/resources" component={AppResources} />
                <PrivateRoute
                  path="/resources/:name"
                  component={AppResources}
                />
                <Route path="/callback" component={Callback} />
              </Switch>
            </Inner>
          </ThemeProvider>
        </Suspense>
      </Fragment>
    );
  }
}

export default withRouter(App);
// resources/${data.Name}/${data.ID}

import React, {Component, lazy, Suspense, Fragment} from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import styled, {createGlobalStyle, ThemeProvider} from "styled-components";
import auth from "../src/auth/Auth";
import PrivateRoute from "../src/utils/PrivateRoute";
import Meta from "./components/Meta";
import Navigation from "./components/Navigation";
import Lottie from "react-lottie";
import LegoLoading from "./images/410-lego-loader.json";
import AnalyticsResources from "./routes/analyticsresources";
import AnalyticsTemplates from "./routes/analyticstemplates";
import AnalyticsPresentations from "./routes/analyticspresentation";
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
  },
  shadow: "0 2px 15px 1px rgba(18, 106, 211, 0.11)"
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
  -webkit-font-smoothing: antialiased;
  padding: ${props => (props.auth ? "4em" : "0")};
`;

// App
const AppResources = lazy(() => import("./routes/appresources"));
const Templates = lazy(() => import("./routes/templates"));
const Settings = lazy(() => import("./routes/settings"));
const Presentations = lazy(() => import("./routes/presentations"));
const Notifications = lazy(() => import("./routes/notifications"));
// Analytics
const Index = lazy(() => import("./routes/index"));
const Callback = lazy(() => import("./routes/callback"));
const Shared = lazy(() => import("./routes/shared"));
const Login = lazy(() => import("./routes/login"));
const MapView = lazy(() => import("./routes/map"));

// Options for Lottie Player
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: LegoLoading,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const LoadingMessage = () => (
  <Lottie options={defaultOptions} height={400} width={400} />
);

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
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyle />
          {console.log(auth.isAuthenticated())}
          {auth.isAuthenticated() === true ? <Navigation /> : <Fragment />}

          <Suspense fallback={<LoadingMessage />}>
            <Meta />

            <Inner auth={auth.isAuthenticated()}>
              <Switch>
                <Route path="/login" component={Login} />
                <PrivateRoute exact path="/" component={Index} />
                <PrivateRoute path="/templates" component={Templates} />
                <PrivateRoute path="/presentations" component={Presentations} />
                <PrivateRoute path="/notifications" component={Notifications} />
                <PrivateRoute path="/map" component={MapView} />
                <PrivateRoute path="/settings" component={Settings} />
                <PrivateRoute path="/resources" component={AppResources} />
                <PrivateRoute
                  exact
                  path="/analytics/resources"
                  component={AnalyticsResources}
                />
                <PrivateRoute
                  exact
                  path="/analytics/templates"
                  component={AnalyticsTemplates}
                />
                <PrivateRoute
                  exact
                  path="/analytics/presentations"
                  component={AnalyticsPresentations}
                />
                <Route path="/shared" component={Shared} />
                <PrivateRoute
                  path="/resources/:name"
                  component={AppResources}
                />
                <Route path="/callback" component={Callback} />
              </Switch>
            </Inner>
          </Suspense>
        </Fragment>
      </ThemeProvider>
    );
  }
}

export default withRouter(App);

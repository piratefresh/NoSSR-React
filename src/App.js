import React, {
  useState,
  useEffect,
  useCallback,
  lazy,
  Suspense,
  Fragment
} from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import auth from "../src/auth/Auth";
import PrivateRoute from "../src/utils/PrivateRoute";
import Meta from "./components/Meta";
import Navigation from "./components/Navigation";
import Inner from "./components/styles/Inner";
import GlobalStyle from "./components/styles/GlobalStyles";
import LegoLoading from "./components/loading/lottieLoader";
import AnalyticsResources from "./routes/analyticsresources";
import AnalyticsTemplates from "./routes/analyticstemplates";
import AnalyticsPresentations from "./routes/analyticspresentation";
import AnalyticsShared from "./routes/analyticsshared";
import IntercomApp from "./components/buttons/IntercomApp";
import "./App.css";
// Themes
import lightTheme from "./themes/lighttheme";
import darkTheme from "./themes/darktheme";

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

function App() {
  // Get Mode Preference from Localstorage
  const stored = localStorage.getItem("isDarkMode");
  const [isDarkMode, setIsDarkMode] = useState(
    stored === "true" ? true : false
  );
  const handleDarkMode = useCallback(
    () => setIsDarkMode(prevState => !prevState),
    []
  );
  useEffect(() => {
    async function checkAuth() {
      if (this.props.location.pathname === "/callback") return;
      try {
        await auth.silentAuth();
        this.forceUpdate();
      } catch (err) {
        if (err.error === "login_required") return;
        console.log(err.error);
      }
    }

    checkAuth();
  }, []);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Fragment>
        <GlobalStyle />
        {console.log(auth.isAuthenticated())}
        {auth.isAuthenticated() === true ? (
          <Navigation handleDarkMode={handleDarkMode} isDarkMode />
        ) : (
          <Fragment />
        )}
        <Suspense fallback={<LegoLoading />}>
          <Meta />
          <Inner auth={auth.isAuthenticated()}>
            <Switch>
              <Route path="/login" component={Login} />
              <PrivateRoute exact path="/" component={Index} />
              <PrivateRoute path="/templates" component={Templates} />
              {/* <PrivateRoute path="/presentations" component={Presentations} /> */}
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
              <PrivateRoute
                path="/analytics/shared"
                component={AnalyticsShared}
              />
              <PrivateRoute path="/resources/:name" component={AppResources} />
              <Route path="/callback" component={Callback} />
            </Switch>
            <IntercomApp />
          </Inner>
        </Suspense>
      </Fragment>
    </ThemeProvider>
  );
}

export default withRouter(App);

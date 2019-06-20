import React, {Fragment} from "react";
import {Helmet} from "react-helmet";

const Meta = props => (
  <Fragment>
    <Helmet>
      <title>My App</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900"
        rel="stylesheet"
      />
      <link href="./styles/styles.css" rel="stylesheet" />
    </Helmet>
  </Fragment>
);

export default Meta;

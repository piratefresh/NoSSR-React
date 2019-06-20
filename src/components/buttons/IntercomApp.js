import React from "react";
import styled from "styled-components";
import Intercom from "react-intercom";

const Container = styled.div`
  position: fixed;
  bottom: -4px;
  right: 10px;
  .feedback {
    background-color: #31b0d5;
    color: white;
    padding: 10px 20px;
    border-radius: 4px;
    border-color: #46b8da;
  }
`;

export default class IntercomApp extends React.Component {
  render() {
    const {appUser} = this.props;
    let user;
    if (appUser) {
      user = {
        user_id: appUser.id,
        email: appUser.email,
        name: appUser.name
      };
    }

    return <Intercom appID="pphqr028" {...user} />;
  }
}

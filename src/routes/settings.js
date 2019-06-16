import React, {Fragment, useState} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import BackgroundScreen from "../components/settings/Background";
import CompanyScreen from "../components/settings/Company";
// Styles
import {MainPageTitle} from "../components/titles";
import Tabs from "../components/tabs/Tabs";

const CardStyles = styled.div`
  background: #ffffff;
  box-shadow: 0 2px 15px 1px rgba(18, 106, 211, 0.11);
  border-radius: 10px;
  width: 100%;
  padding: 2%;
  margin-top: ${props => (props.template ? "1em" : "2.5")};
  .cardTitle {
    font-size: 0.875em;
    letter-spacing: 0.52px;
    color: ${props => props.theme.colors.cardHeader};
    border-bottom: 1px solid #eff6ff;
    width: 100%;
    min-height: 45px;
    overflow: hidden;
    @media (max-width: 1000px) {
      text-align: center;
    }
  }
`;

export default function Settings(props) {
  return (
    <Fragment>
      <MainPageTitle>Settings</MainPageTitle>
      <CardStyles>
        <Tabs>
          <div label="Background">
            <BackgroundScreen />
          </div>
          <div label="Company">
            <CompanyScreen />
          </div>
          <div label="Modules">
            Nothing to see here, this tab is <em>extinct</em>!
          </div>
        </Tabs>
      </CardStyles>
    </Fragment>
  );
}

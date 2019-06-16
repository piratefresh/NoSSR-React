import React, {useState, useCallback} from "react";
import BaseCardStyle from "../cards";
import NavLink from "../Navigation/NavLink";
import styled from "styled-components";
import SubNavLinkStyles from "./SubNavLink";
// icons
import ResourcesIcon from "../../icons/app/ResourceIcon";
import PresentationsIcon from "../../icons/PresentationIcon";
import TemplatesIcon from "../../icons/TemplateIcon";
import SharedIcon from "../../icons/SharedIcon";
import UsersIcon from "../../icons/UsersIcon";
import MapIcon from "../../icons/MapIcon";

const Wrapper = styled.div`
  position: absolute;
  left: 100%;
`;

export default function MenuDropdown(props) {
  const {listOpen, closeDropdown} = props;
  return (
    <Wrapper>
      <BaseCardStyle>
        {listOpen && (
          <ul style={{padding: "2em"}}>
            <SubNavLinkStyles to="/analytics/resources">
              <ResourcesIcon />
              Resources
            </SubNavLinkStyles>
            <SubNavLinkStyles to="/analytics/presentations">
              <PresentationsIcon />
              Presentations
            </SubNavLinkStyles>
            <SubNavLinkStyles to="/analytics/templates">
              <TemplatesIcon />
              Templates
            </SubNavLinkStyles>
            <SubNavLinkStyles to="/shared">
              <SharedIcon />
              Shared
            </SubNavLinkStyles>
            <SubNavLinkStyles to="/users">
              <UsersIcon />
              Users
            </SubNavLinkStyles>
            <SubNavLinkStyles to="/map">
              <MapIcon />
              Map
            </SubNavLinkStyles>
          </ul>
        )}
      </BaseCardStyle>
    </Wrapper>
  );
}

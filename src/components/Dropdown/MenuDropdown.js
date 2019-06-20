import React, {useRef, useEffect, useState, useCallback} from "react";
import {withRouter} from "react-router-dom";
import BaseCardStyle from "../cards";
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

function MenuDropdown(props) {
  const {listOpen, closeDropdown, setListOpen} = props;
  const node = useRef();

  const handleClickOutside = e => {
    if (node.current.contains(e.target)) {
      // inside click
      console.log("inside");
      return;
    }
    // outside click
    console.log("outside");
    return closeDropdown();
  };

  useEffect(() => {
    if (listOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [listOpen]);

  return (
    <Wrapper ref={node}>
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
            <SubNavLinkStyles to="/analytics/shared">
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

export default withRouter(MenuDropdown);

import React, {useRef, useEffect, useState, useCallback} from "react";
import {withRouter} from "react-router-dom";
import BaseCardStyle from "../cards";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 8%;
  z-index: 5;
  min-width: 150px;
  ul,
  li {
    list-style: none;
    font-size: ${props => props.theme.font.action};
    font-weight: ${props => props.theme.font.normal};
    color: ${props => props.theme.colors.grey};
  }
  li {
    margin-top: 0.5em;
    cursor: pointer;
  }
`;

function ActionsDropdown(props) {
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
          <ul style={{padding: "1em"}}>
            <li>Edit Template</li>
            <li>Edit Permissions</li>
            <li>Deactivate</li>
            <li>Delete Template</li>
          </ul>
        )}
      </BaseCardStyle>
    </Wrapper>
  );
}

export default withRouter(ActionsDropdown);

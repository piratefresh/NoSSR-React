import React, {useState, useCallback} from "react";
import styled from "styled-components";
import DotsIcon from "../../icons/DotsIcon";
import ActionsDropdown from "../Dropdown/ActionsDropdown";

export default function ActionsButton() {
  const [listOpen, setListOpen] = useState(false);
  const closeDropdown = useCallback(() => setListOpen(false), []);
  return (
    <SVGButton
      onClick={() => {
        setListOpen(prevState => {
          return !prevState;
        });
      }}
    >
      <DotsIcon />
      <ActionsDropdown listOpen={listOpen} closeDropdown={closeDropdown} />
    </SVGButton>
  );
}

const SVGButton = styled.a`
  position: relative;
  text-decoration: none;

  svg {
    transform: scale(0.7);
  }
`;

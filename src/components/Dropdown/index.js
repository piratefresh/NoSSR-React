import React, {useEffect} from "react";
import styled from "styled-components";
import DatePickerWrapper from "../date/DatePickerWrapper";

const DropdownWindow = styled.div`
  z-index: 10;
  position: absolute;
  margin-top: 1em;
  background: ${props => props.theme.colors.white};
  height: 35vh;
  width: 100%;
  padding-left: 0.3em;
`;

function Dropdown(props) {
  console.log(props);
  useEffect(() => {
    if (props.dropdownOpen) {
      window.addEventListener("click", props.closeDropdown);
    } else {
      return window.removeEventListener("click", props.closeDropdown);
    }
  });

  return (
    <DropdownWindow>
      <DatePickerWrapper />
    </DropdownWindow>
  );
}

export default Dropdown;

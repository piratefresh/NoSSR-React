import React, {useCallback, useEffect} from "react";
import styled from "styled-components";
import DatePickerWrapper from "../date/DatePickerWrapper";

const DropdownWindow = styled.div`
  z-index: 10;
  position: absolute;
  margin-top: 1em;
  .DateRangePicker_picker {
  }
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

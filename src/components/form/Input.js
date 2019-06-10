import styled from "styled-components";

const Input = styled.input`
  background: transparent;
  border: 2px solid rgb(223, 225, 230);
  border-radius: 3px;
  box-sizing: border-box;
  color: inherit;
  cursor: inherit;
  font-family: inherit;
  font-size: 16px;
  min-width: 0;
  outline: none;
  margin-top: 0.5em;
  padding-left: 0.5em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  :active {
    border: 2px solid #1f98f4;
  }
  :focus {
    border: 2px solid #1f98f4;
  }
  &::-ms-clear {
    display: none;
  }
  &:invalid {
    box-shadow: none;
  }
`;

export default Input;

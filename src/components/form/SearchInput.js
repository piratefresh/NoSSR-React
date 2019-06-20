import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: [input] 1fr [label] auto;
  .searchInput {
    grid-area: input;
    border: ${props =>
      props.rectangle ? `${props.theme.colors.lightblue} 2px solid` : "none"};
    border-radius: ${props => (props.rectangle ? 0 : "20px")};
    flex: 1;
    font-size: 16px;
    font-weight: 200;
    height: 33px;
    margin: 0;
    width: 300px;
    padding: 5px;
    -webkit-appearance: textfield;
    :focus {
      outline: none;
    }
    svg {
      grid-area: label;
      background: ${props => props.theme.colors.blue};
      height: 100%;
    }
  }
`;

export const SearchInput = props => {
  return (
    <Wrapper rectangle={props.rectangle}>
      <label>
        <input className="searchInput" type="text" placeholder="Search" />
      </label>
    </Wrapper>
  );
};

export default SearchInput;

import React from "react";
import styled from "styled-components";

const Inner = styled.div`
  position: relative;
  margin-left: ${props => (props.auth ? "120px" : "0")};
  flex-grow: 1;
  min-height: 100%;
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  padding: ${props => (props.auth ? "4em" : "0")};
`;

export default Inner;

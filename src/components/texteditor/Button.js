import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  color: ${props =>
    props.reversed
      ? props.active
        ? "white"
        : "#aaa"
      : props.active
      ? "black"
      : "#ccc"};
  cursor: pointer;
`;

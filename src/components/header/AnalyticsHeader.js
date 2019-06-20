import React from "react";
import styled from "styled-components";
import {ButtonStyleBlue} from "../buttons";
import SearchInput from "../form/SearchInput";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.colors.white};
  max-height: 50px;
  padding: 2em;
  margin-top: 1em;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.shadow};
  .right {
    display: flex;
    flex-direction: row;
  }
`;

export default function AnalyticsHeader(props) {
  return (
    <Container>
      <div className="left">
        <span>{props.title ? props.title : null}</span>
      </div>

      <div className="right">
        <SearchInput rectangle />
        <ButtonStyleBlue small>+ New Notification</ButtonStyleBlue>
      </div>
    </Container>
  );
}

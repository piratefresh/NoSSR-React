import React from "react";
import styled from "styled-components";
import {ButtonStyleBlue} from "../buttons";
import SearchInput from "../form/SearchInput";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default function NotificationHeader() {
  return (
    <Container>
      <SearchInput rectangle />
      <ButtonStyleBlue small>+ New Notification</ButtonStyleBlue>
    </Container>
  );
}

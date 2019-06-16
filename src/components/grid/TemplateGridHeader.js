import React from "react";
import styled from "styled-components";
import {ButtonStyleBlue} from "../buttons";
import SearchInput from "../form/SearchInput";

const TemplatesHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default function TemplateGridHeader() {
  return (
    <TemplatesHeader>
      <SearchInput rectangle />
      <ButtonStyleBlue small>+ Add Template</ButtonStyleBlue>
    </TemplatesHeader>
  );
}

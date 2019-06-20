import React, {useState} from "react";
import styled from "styled-components";
import {ButtonStyleBlue} from "../buttons";
import SearchInput from "../form/SearchInput";
import AddTemplate from "../AddForm/AddTemplate";
import Modal from "../modal";

const TemplatesHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default function TemplateGridHeader() {
  const [show, setShowState] = useState(false);
  const showModal = () => {
    setShowState(true);
  };

  const hideModal = () => {
    setShowState(false);
  };

  return (
    <TemplatesHeader>
      <SearchInput rectangle />
      <ButtonStyleBlue
        onClick={() => {
          showModal();
        }}
        small
      >
        + Add Template
      </ButtonStyleBlue>
      {/* Modal */}
      <Modal show={show} handleClose={hideModal}>
        <AddTemplate />
      </Modal>
    </TemplatesHeader>
  );
}

import React from "react";
import {Formik} from "formik";
import styled from "styled-components";
import CloseIcon from "../../icons/closeIcon";

const ModalStyles = styled.div`
  display: ${props => (props.show ? "block" : "none")};
  color: ${props => props.theme.colors.grey};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 300;
  background: rgba(0, 0, 0, 0.6);
  .modal-main {
    background: ${props => props.theme.colors.white};
    width: 50vw;
    padding: 1em;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    border-radius: 10px;
    .modalHeader {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      .close {
        position: absolute;
        right: 32px;
        top: 32px;
        width: 32px;
        height: 32px;
        opacity: 0.3;
      }
      .close:hover {
        opacity: 1;
      }
      .close:before,
      .close:after {
        position: absolute;
        left: 15px;
        content: " ";
        height: 33px;
        width: 2px;
        background-color: ${props => props.theme.colors.black};
      }
      .close:before {
        transform: rotate(45deg);
      }
      .close:after {
        transform: rotate(-45deg);
      }
    }
  }
`;

const Modal = ({handleClose, show, modalTitle, children}) => {
  return (
    <ModalStyles show={show}>
      <section className="modal-main">
        <div className="modalHeader">
          <h4>{modalTitle}</h4>
          <CloseIcon onClick={handleClose} />
        </div>
        {children}
      </section>
    </ModalStyles>
  );
};

export default Modal;

import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const FormFieldStyles = styled.label`
  display: flex;
  flex-direction: column;
  color: #777;
  font-size: 0.8em;
  margin: 0.5em 0;
  width: 100%;
  min-width: 100%;
  position: relative;
`;

function FormField(props) {
  const labelName = props.labelName;
  return (
    <FormFieldStyles for={labelName}>
      {labelName ? labelName : ""}
      {props.children}
    </FormFieldStyles>
  );
}

FormField.propTypes = {
  labelName: PropTypes.string
};

export default FormField;

import React, {Fragment} from "react";
import styled from "styled-components";

const RadioStyle = styled.div`
  margin-top: 1em;
  display: flex;
  align-self: center;
  input {
    position: absolute;
    pointer-events: none;
    visibility: hidden;
  }

  input:focus + label {
    background: #eeeeff;

    .checker {
      border-color: ${props => props.theme.colors.blue};
    }
  }

  input:checked + label {
    .checker {
      box-shadow: ${props => `inset 0 0 0 6px ${props.theme.colors.blue}`};
    }
  }

  label {
    display: flex;
    align-items: center;
    height: 28px;
    border-radius: 14px;
    margin: 10px;
    padding: 0 8px 0 6px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background: #eeeeff;

      .checker {
        box-shadow: ${props => `inset 0 0 0 6px ${props.theme.colors.blue}`};
      }
    }
  }

  .checker {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    margin-right: 8px;
    box-shadow: inset 0 0 0 2px #ccc;
    transition: box-shadow 0.3s ease;
  }
`;

export default function RadioButton(props) {
  return (
    <RadioStyle>
      <input type="radio" name={props.name} id={props.id} value={props.value} />
      <label for={props.id}>
        <div className="checker" />
        {props.labelname}
      </label>
    </RadioStyle>
  );
}

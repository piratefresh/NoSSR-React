import React from "react";
import styled from "styled-components";

const SliderStyle = styled.div`
  display: flex;
  align-self: center;
  .switch {
    display: inline-block;
    height: 34px;
    position: relative;
    width: 60px;
  }

  .switch input {
    display: none;
  }

  .slider {
    background-color: #ccc;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: 0.4s;
  }

  .slider:before {
    background-color: #fff;
    bottom: 4px;
    content: "";
    height: 26px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    width: 26px;
  }

  input:checked + .slider {
    background-color: #66bb6a;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  .slider.round {
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

export default function Slider(props) {
  return (
    <SliderStyle>
      <label
        className="switch"
        name={props.name}
        id={props.id}
        value={props.value}
        for={props.id}
      >
        <input
          type="checkbox"
          name={props.name}
          id={props.id}
          value={props.value}
        />
        <div className="slider round" />
      </label>
    </SliderStyle>
  );
}

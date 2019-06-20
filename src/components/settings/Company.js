import React from "react";
import styled from "styled-components";
import {DropDownList} from "@progress/kendo-react-dropdowns";
// Style Components
import Slider from "../form/Slider";

const Container = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 3em;
  .option {
    display: grid;
    align-items: center;
    grid-template-columns: [name] 1fr [description] 2fr [slider] 1fr;
    .nameOption {
      grid: name;
    }
    .descOption {
      grid: description;
    }
    .slider {
      grid: slider;
    }
  }
`;

export default function CompanyScreen() {
  return (
    <Container>
      <div className="option">
        <div className="nameOption">Focus Switch</div>
        <div className="descOption">
          Explain what it does, description of it here
        </div>
        <div className="slider">
          <Slider />
        </div>
      </div>
      <div className="option">
        <div className="nameOption">Sync Option</div>
        <div className="descOption">
          Explain what it does, description of it here
        </div>
        <div className="slider">
          <Slider />
        </div>
      </div>
      <div className="option">
        <div className="nameOption">Top Views for Sync</div>
        <div className="descOption">
          Explain what it does, description of it here
        </div>
        <div className="slider">
          <Slider />
        </div>
      </div>
    </Container>
  );
}

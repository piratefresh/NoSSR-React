import React from "react";
import styled from "styled-components";
// Style Components
import {ButtonStyleBlue} from "../buttons";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 250px;
      height: 250px;
      object-fit: cover;
      margin: 2em;
    }
  }
`;

export default function BackgroundScreen() {
  return (
    <Container>
      <div className="item">
        <span>iPad Background Image</span>
        <img
          src="https://images.unsplash.com/photo-1560263492-df02cac7762c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <ButtonStyleBlue>Upload Image</ButtonStyleBlue>
      </div>
      <div className="item">
        <span>Shared Loading Background</span>
        <img
          src="https://images.unsplash.com/photo-1560307002-306085d5ca4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <ButtonStyleBlue>Upload Image</ButtonStyleBlue>
      </div>
      <div className="item">
        <span>iPhone Logo</span>
        <img
          src="https://www.inverseparadox.com/wp-content/uploads/2015/05/pjp-logo.jpg"
          alt=""
        />
        <ButtonStyleBlue>Upload Image</ButtonStyleBlue>
      </div>
    </Container>
  );
}

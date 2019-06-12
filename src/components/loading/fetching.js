import React from "react";
import styled from "styled-components";

const Fetching = () => (
  <div>
    <h3 className="fetching">🐶 Fetching...</h3>
  </div>
);

const Error = () => (
  <Container>
    <h3 className="fetching">Oh no! Something went wrong.</h3>
    <img source="https://2b9sqw2iiqxr36ntqa1exnal-wpengine.netdna-ssl.com/wp-content/uploads/2010/05/sad-dog.jpg" />
    <h3 className="fetching">Please refresh and try again.</h3>
  </Container>
);

const Container = styled.div`
  align-items: center;
  .fetching {
    font-size: 30;
    font-family: "Luckiest Guy";
    color: "#17cbc4";
    margin: 10;
    letter-spacing: 1;
  }
  img {
    height: 170;
    width: 170;
  }
`;

export {Fetching, Error};

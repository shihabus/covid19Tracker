import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  grid-area: footer;
  color: white;
  text-align: center;
  padding-bottom: 0.5rem;
  @media only screen and (min-width: 768px) {
    font-size: 0.75rem;
  }
`;

const Divider = styled.hr`
  width: 50%;
  border-width: 0.25px;
`;
export default function Footer() {
  return (
    <Wrapper>
      <Divider />
      Courtesy @
      <a
        style={{ color: "white", paddingLeft: "0.2rem" }}
        href="https://api.covid19india.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Covid19 India Org.
      </a>{" "}
      |
      <a
        style={{ color: "white", paddingLeft: "0.2rem" }}
        href="https://github.com/shihabus"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </Wrapper>
  );
}

import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  background: #fff;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 200px 1fr 2rem;
  grid-gap: 0.5rem;
  grid-template-areas: "banner" "content-1" "footer";
  overflow: hidden;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px calc(100% - 160px) 2rem;
    grid-gap: 10px;
    padding-bottom: 2rem;
    grid-template-areas: "banner banner" "content-1 content-2" "content-1 footer";
  }
`;

export default function Background(props) {
  return <Wrapper>{props.children}</Wrapper>;
}

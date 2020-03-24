import React from "react";
import styled from "styled-components";
import { StateCard } from "../../components";

const Wrapper = styled.div`
  grid-area: content-1;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
  @media only screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export default function Index(props) {
  console.log("props", props);
  const { dataSet } = props;
  return (
    <Wrapper>
      {dataSet.map(item => (
        <StateCard {...item} />
      ))}
    </Wrapper>
  );
}

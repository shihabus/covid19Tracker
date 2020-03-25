/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { StateCard } from "../../components";
import DistrictWise from "./DistrictWise";

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
  const { dataSet } = props;
  const [selectedState, setSelectedState] = useState(null);

  return (
    <Wrapper>
      {dataSet.map(item => (
        <StateCard
          {...item}
          onStateSelection={state => setSelectedState(state)}
        />
      ))}
      {selectedState && (
        <DistrictWise
          dataSet={selectedState}
          onBackClicked={() => setSelectedState(null)}
        />
      )}
    </Wrapper>
  );
}

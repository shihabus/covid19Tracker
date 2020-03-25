/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { FullPageOverLay, StateCard } from "../../components";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4rem calc(100% - 5rem);
  grid-template-areas: "nav" "content";
  height: 100%;
  width: 100%;
`;

const Nav = styled.div`
  grid-area: nav;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
`;

const Content = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  align-items: center;
`;

export default function DistrictWise(props) {
  const { dataSet, onBackClicked } = props;
  let districts = Object.keys(dataSet.districtData);
  return (
    <FullPageOverLay>
      <Wrapper>
        <Nav onClick={() => onBackClicked()}> 🔙</Nav>
        <Content>
          {districts.map(state => (
            <StateCard
              dataSet={{ ...dataSet.districtData[state], state }}
              cardWidth="85%"
              isDistrict
            />
          ))}
        </Content>
      </Wrapper>
    </FullPageOverLay>
  );
}

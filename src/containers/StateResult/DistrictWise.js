/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { FullPageOverLay } from "../../components";
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
  overflow: auto;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: start;
  }

  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: start;
  }
`;

const Card = styled.div`
  background: black;
  border-radius: 4px;
  margin: 1rem;
  padding: 1rem;
  display: grid;
  grid-template-rows: 2rem 1fr;
  grid-template-areas: "district" "counts";
  height: 6rem;

  :hover {
    box-shadow: 0px 0px 36px 0px rgba(0, 0, 0, 0.65);
    transform: scale(1.025);
    z-index: 2;
  }
`;

const District = styled.div`
  grid-area: district;
  font-size: 1.25rem;
`;

const Counts = styled.div`
  grid-area: counts;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
`;

const CountText = styled.span`
  font-size: 1.5rem;
  padding-left: 0.2rem;
`;

const TextBlock = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
`;

export default function DistrictWise(props) {
  const { dataSet, onBackClicked } = props;
  let districts = Object.keys(dataSet.districtData);
  return (
    <FullPageOverLay>
      <Wrapper>
        <Nav onClick={() => onBackClicked()}> 🔙</Nav>
        <Content>
          {districts.map(district => {
            const {
              active,
              confirmed,
              deaths,
              recovered
            } = dataSet.districtData[district];
            return (
              <Card>
                <District>{district}</District>
                <Counts>
                  <TextBlock>
                    Active <CountText>{active}</CountText>
                  </TextBlock>
                  <TextBlock>
                    Confirmed <CountText>{confirmed}</CountText>
                  </TextBlock>
                  <TextBlock>
                    Deaths <CountText>{deaths}</CountText>
                  </TextBlock>
                  <TextBlock>
                    Recovered <CountText>{recovered}</CountText>
                  </TextBlock>
                </Counts>
              </Card>
            );
          })}
        </Content>
      </Wrapper>
    </FullPageOverLay>
  );
}

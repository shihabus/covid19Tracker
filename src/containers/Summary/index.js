import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  grid-area: content-2;
  height: 100%;
  margin: 0.5rem 1rem;
  padding-bottom: 0.5rem;
  color: #7c92a6;

  display: grid;
  grid-template-rows: repeat(2, 1fr) 2rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "active confirmed" "deaths recovered" "last-updated last-updated";

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-rows: repeat(2, 1fr) 5rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "active confirmed" "deaths recovered" "last-updated last-updated";
  }
`;

const Label = styled.div`
  font-size: 0.75rem;
  @media only screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Count = styled.div`
  font-size: 1.5rem;
  color: white;
  @media only screen and (min-width: 768px) {
    font-size: 5rem;
  }
`;

const Section = styled.div`
  grid-area: ${props => props.gridName};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LastUpdated = styled(Section)`
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    font-size: 1rem;
  }
`;
export default function Index(props) {
  const {
    active,
    confirmed,
    deaths,
    recovered,
    lastupdatedtime
  } = props.dataSet;
  return (
    <Wrapper>
      <Section gridName="active">
        <Label>Total active</Label>
        <Count>{active}</Count>
      </Section>
      <Section gridName="confirmed">
        <Label>Total confirmed</Label>
        <Count>{confirmed}</Count>
      </Section>
      <Section gridName="deaths">
        <Label>Total deaths</Label>
        <Count>{deaths}</Count>
      </Section>
      <Section gridName="recovered">
        <Label>Total recovered</Label>
        <Count>{recovered}</Count>
      </Section>
      <LastUpdated gridName="last-updated">
        Last updated on :
        <span style={{ color: "white" }}>
          <b> {lastupdatedtime}</b>
        </span>
      </LastUpdated>
    </Wrapper>
  );
}

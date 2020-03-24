import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  grid-area: content-2;
  height: 100%;
  display: flex;

  margin: 0.5rem 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 0.5rem;
  color: #7c92a6;

  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-rows: repeat(2, 1fr) 5rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "active confirmed" "deaths recovered" "last-updated last-updated";
  }
`;

const Label = styled.div`
  font-size: 1rem;
  @media only screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Count = styled.div`
  font-size: 2rem;
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
      <Section>
        <Label>Total active</Label>
        <Count>{active}</Count>
      </Section>
      <Section>
        <Label>Total confirmed</Label>
        <Count>{confirmed}</Count>
      </Section>
      <Section>
        <Label>Total deaths</Label>
        <Count>{deaths}</Count>
      </Section>
      <Section>
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

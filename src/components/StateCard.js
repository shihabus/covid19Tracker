import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #bf2626;
  border-radius: 4px;
  width: 20rem;
  height: 10rem;
  margin: 0.5rem 1rem;
  display: grid;
  color: #e1e1e1;
  grid-template-column: 1fr 1fr;
  gird-template-rows: 1fr 1.5rem 1.5rem;
  padding: 0.625rem 0.5rem;
  grid-gap: 0.1rem;
  cursor: pointer;
  transition: transform 0.2s;
  grid-template-areas:
    "state state"
    "active confirmed" "recovered deaths";

  :hover {
    background: #bf2a37;
    box-shadow: 0px 0px 36px 0px rgba(0, 0, 0, 0.65);
    transform: scale(1.025);
    z-index: 2;
  }

  @media only screen and (min-width: 768px) {
    margin: 1rem;
    width: 20rem;
    height: 12.5rem;
    margin: 1rem;
    display: grid;
    color: #e1e1e1;
    grid-template-column: 1fr 1fr;
    gird-template-rows: 1fr 2.5rem 2.5rem;
    padding: 1rem;
    grid-gap: 0.5rem;
  }
`;

const State = styled.div`
  grid-area: state;
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
`;

const Label = styled.div`
  font-size: 0.75rem;
  color: #bdc3c7;
`;

const StateName = styled.div`
  font-size: 1rem;
  width: calc(100% - 0.5rem);
  @media only screen and (min-width: 768px) {
    font-size: 1.5rem;
    width: calc(100% - 0.5rem);
  }
`;

const SecondaryData = styled.div`
  grid-area: ${props => props.gridName};
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
`;

const CountText = styled.div`
  font-size: 1.25rem;
`;

export default function StateCard(props) {
  const { active, confirmed, deaths, recovered, state } = props;
  return (
    <Wrapper>
      <State>
        <Label>State</Label>
        <StateName>{state}</StateName>
      </State>
      <SecondaryData gridName="active">
        <Label>Active</Label>
        <CountText>{active}</CountText>
      </SecondaryData>
      <SecondaryData gridName="confirmed">
        <Label>Confirmed</Label>
        <CountText>{confirmed}</CountText>
      </SecondaryData>
      <SecondaryData gridName="recovered">
        <Label>Recovered</Label>
        <CountText>{recovered}</CountText>
      </SecondaryData>
      <SecondaryData gridName="deaths">
        <Label>Deaths</Label>
        <CountText>{deaths}</CountText>
      </SecondaryData>
    </Wrapper>
  );
}

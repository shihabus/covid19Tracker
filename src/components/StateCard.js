/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import styled from "styled-components";
import { CountDiv } from "./index";

const Wrapper = styled.div`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.45);

  width: ${props => props.cardWidth};
  height: 5rem;
  display: grid;

  margin: 0.5rem 1rem;

  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2.5rem;
  grid-gap: 0.1rem;
  justify-items: center;
  align-items: center;

  padding: 0.625rem 0.5rem;

  cursor: pointer;
  transition: transform 0.2s;
  grid-template-areas:
    "state"
    "counts";

  :hover {
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
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;
`;

const StateName = styled.div`
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: black;

  @media only screen and (min-width: 768px) {
    font-size: 1.5rem;
    width: calc(100% - 0.5rem);
  }
`;

const CountRow = styled.div`
  grid-area: counts;

  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 0px 0.5rem;
`;

const VerticalDivider = styled.div`
  border: 0.35px solid rgba(0, 0, 0, 0.35);
`;

export default function StateCard(props) {
  const {
    active,
    confirmed,
    deaths,
    recovered,
    state,
    onStateSelection
  } = props.isDistrict ? props.dataSet : props;

  console.log("_dataSet", active);
  return (
    <Wrapper
      {...props}
      onClick={() => props.districtData && onStateSelection(props)}
    >
      <State>
        <StateName>{state}</StateName>
        {props.districtData && (
          <div style={{ minWidth: "92px", color: "rgba(0,0,0,0.5)" }}>
            Click to view more
          </div>
        )}
      </State>
      <CountRow>
        <CountDiv label="Active" count={active} />
        <VerticalDivider />
        <CountDiv label="Confirmed" count={confirmed} />
        <VerticalDivider />
        <CountDiv label="Recovered" count={recovered} />
        <VerticalDivider />
        <CountDiv label="Deaths" count={deaths} />
      </CountRow>
    </Wrapper>
  );
}

StateCard.defaultProps = {
  onStateSelection: () => {},
  cardWidth: "100%",
  isDistrict: false
};

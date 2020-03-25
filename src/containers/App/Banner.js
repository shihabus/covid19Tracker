import React from "react";
import styled from "styled-components";
import { CountDiv } from "../../components";

const Wrapper = styled.div`
  grid-area: banner;
  background: #fff;
  padding: 0.5rem 1rem;
  box-shadow: 0px 0px 36px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  color: #000;
  font-size: 1.25rem;

  @media only screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

const BannerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
`;

const BannerText = styled.div`
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.125rem;
`;

const LastUpdatedDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.5rem;
  align-items: flex-end;
`;

const TimeStamp = styled.div`
  font-weight: bold;
  font-size: 0.55rem;
`;

const BannerContent = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  height: calc(100% - 3rem);
  justify-items: center;
  align-items: center;
`;

export default function Banner(props) {
  const {
    dataSet: { active, confirmed, deaths, lastupdatedtime, recovered }
  } = props;

  return (
    <Wrapper>
      <BannerDiv>
        <BannerText>CORONA TRACKER</BannerText>
        <LastUpdatedDiv>
          Last Updated
          <TimeStamp>{lastupdatedtime}</TimeStamp>
        </LastUpdatedDiv>
      </BannerDiv>
      <BannerContent>
        <CountDiv count={active} label="Total Active" />
        <CountDiv count={confirmed} label="Total Confirmed" />
        <CountDiv count={recovered} label="Total Recovered" />
        <CountDiv count={deaths} label="Total Deaths" />
      </BannerContent>
    </Wrapper>
  );
}

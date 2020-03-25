import React from "react";
import styled from "styled-components";

const CountDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Count = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: black;
`;

const Label = styled.div`
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.6);
`;

const CountComponent = ({ count, label }) => (
  <CountDiv>
    <Count>{count}</Count>
    <Label>{label}</Label>
  </CountDiv>
);

export default CountComponent;

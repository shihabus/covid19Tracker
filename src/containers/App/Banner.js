import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  grid-area: banner;
  background: #26070a;
  padding: 0.5rem 1rem;
  box-shadow: 0px 0px 36px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  color: #7c92a6;
  font-size: 1.25rem;
  @media only screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

export default function Banner() {
  return (
    <Wrapper>
      <div>
        CORONA TRACKER
        <span role="img" aria-label="flag" style={{ paddingLeft: ".5rem" }}>
          🇮🇳
        </span>
      </div>
    </Wrapper>
  );
}

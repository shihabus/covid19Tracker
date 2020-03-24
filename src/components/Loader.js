import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  grid-area: ${props => props.gridName};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1rem;
`;

export default function Loader(props) {
  const { gridName, slogan } = props;
  return <Wrapper gridName={gridName}>{slogan}</Wrapper>;
}

Loader.defaultProps = {
  slogan: "Loading..."
};

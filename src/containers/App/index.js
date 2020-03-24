import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Banner from "./Banner";
import { Background, Footer, Loader } from "../../components";
import fetchData from "./FetchData";
import ScrollableCards from "../StateResult";
import Summary from "../Summary";

export default function Index() {
  useEffect(() => {
    loadData();
    return () => {
      loadData();
    };
  }, []);

  async function loadData() {
    const data = await fetchData();
    setStateWiseData(data.statewise);
  }

  const [stateWiseData, setStateWiseData] = useState(null);

  return (
    <Background>
      <Banner />
      {stateWiseData ? (
        <ScrollableCards dataSet={stateWiseData.slice(1)} />
      ) : (
        <Loader gridName="content-1" slogan="#StayHomeStaySafe" />
      )}
      {stateWiseData ? (
        <Summary dataSet={stateWiseData[0]} />
      ) : (
        <Loader gridName="content-2" slogan="#GoCoronaGo" />
      )}
      <Footer />
    </Background>
  );
}

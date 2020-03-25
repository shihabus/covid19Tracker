import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Banner from "./Banner";
import { Background, Footer, Loader } from "../../components";
import fetchData from "./FetchData";
import ScrollableCards from "../StateResult";
import Summary from "../Summary";
import _ from "lodash";

export default function Index() {
  useEffect(() => {
    loadData();
    return () => {
      loadData();
    };
  }, []);

  async function loadData() {
    const data1 = await fetchData("https://api.covid19india.org/data.json");
    const data2 = await fetchData(
      "https://api.covid19india.org/state_district_wise.json"
    );

    const stateWise = _.get(data1, "statewise", null);
    if (stateWise) {
      const merged = stateWise.map(x => ({ ...x, ...data2[x.state] }));
      setStateWiseData(merged);
    }
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

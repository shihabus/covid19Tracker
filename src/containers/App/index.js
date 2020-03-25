import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Banner from "./Banner";
import { Background, Footer, Loader } from "../../components";
import fetchData from "./FetchData";
import ScrollableCards from "../StateResult";
import Summary from "../Summary";
import _ from "lodash";
import Data1 from "../../st.json";
import Data2 from "../../dist.json";

export default function Index() {
  useEffect(() => {
    loadData();
    return () => {
      loadData();
    };
  }, []);

  function loadData() {
    // const data1 = await fetchData("https://api.covid19india.org/data.json");
    // const data2 = await fetchData(
    //   "https://api.covid19india.org/state_district_wise.json"
    // );

    const stateWise = _.get(Data1, "statewise", null);
    if (stateWise) {
      const merged = stateWise.map(x => ({ ...x, ...Data2[x.state] }));
      setStateWiseData(merged);
    }
  }

  const [stateWiseData, setStateWiseData] = useState(null);

  return (
    <Background>
      {stateWiseData && <Banner dataSet={stateWiseData[0]} />}
      {stateWiseData ? (
        <ScrollableCards dataSet={stateWiseData.slice(1)} />
      ) : (
        <Loader gridName="content-1" slogan="#StayHomeStaySafe" />
      )}
      <Footer />
    </Background>
  );
}

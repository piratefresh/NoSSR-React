import React from "react";
import styled from "styled-components";
import StackedBarChart from "../components/charts/StackedColumnChart";
import HeatChartChart from "../components/charts/HeatMaps";
import Grid from "../components/grid/Grid";
import LottieLoader from "../components/loading/lottieLoader";
import AnalyticsHeader from "../components/header/AnalyticsHeader";
// GRAPHQL
import {useQuery} from "react-apollo-hooks";
import {GET_MASTERLISTS} from "../queries/queries";

const Container = styled.div`
  h1 {
    margin: 0%;
  }
  .heatCharts {
    margin-top: 2em;
  }
  .tableContainer {
    margin-top: 4em;
  }
`;

export default function AnalyticsShared() {
  const {data, loading, error} = useQuery(GET_MASTERLISTS);

  // true until slowest query is fetched
  if (loading) {
    return <LottieLoader />;
  }

  const resources = data.GetResources;
  return (
    <Container>
      <h1>Shared</h1>
      <AnalyticsHeader title="Shared Activity" />
      <StackedBarChart />
      <div className="heatCharts">
        <HeatChartChart />
      </div>

      <div className="tableContainer">
        <Grid data={resources} />
      </div>
    </Container>
  );
}

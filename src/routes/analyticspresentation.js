import React from "react";
import styled from "styled-components";
import PresentationsTable from "../components/tables/PresentationsTable";
import StackedColumnChart from "../components/charts/StackedColumnChart";
import LottieLoader from "../components/loading/lottieLoader";
// GRAPHQL
import {GET_PRESENTATIONS} from "../queries/queries";
import {useQuery} from "react-apollo-hooks";

const PresentationContent = styled.div`
  h1 {
    margin: 0%;
  }
`;

export default function AnalyticsPresentationsScreen() {
  const {data, loading} = useQuery(GET_PRESENTATIONS);
  // true until slowest query is fetched
  if (loading) {
    return <LottieLoader />;
  }
  const presentations = data.getPresentations;

  return (
    <PresentationContent>
      <h1>Presentation Analytics</h1>
      <StackedColumnChart />?
      <PresentationsTable resources={presentations} />
    </PresentationContent>
  );
}

import React from "react";
import styled from "styled-components";
import PresentationsTable from "../components/tables/PresentationsTable";
import StackedColumnChart from "../components/charts/StackedColumnChart";
import LottieLoader from "../components/loading/lottieLoader";
import AnalyticsHeader from "../components/header/AnalyticsHeader";
// GRAPHQL
import {GET_PRESENTATIONS} from "../queries/queries";
import {useQuery} from "react-apollo-hooks";

const PresentationContent = styled.div`
  h1 {
    margin: 0%;
  }
  .tableContainer {
    margin-top: 4em;
  }
`;

export default function AnalyticsPresentationsScreen() {
  const {data, loading} = useQuery(GET_PRESENTATIONS);
  // true until slowest query is fetched
  if (loading) {
    return <LottieLoader />;
  }

  const presentations = data.getPresentations;
  const resources = data.GetResources;

  // Gets the thumbnails for presentations
  let result = resources.filter(resource => {
    return presentations.some(presentation =>
      presentation.PresentationItems.map(
        itemID => resource.ResourceID === itemID
      )
    );
  });

  result.map(result =>
    presentations.map(presentation => {
      presentation.PresentationItems.map(item => {
        if (item.ItemID === result.ResourceID) {
          return (presentation.Thumbnail = result.Thumbnail);
        }
      });
    })
  );

  return (
    <PresentationContent>
      <h1>Presentations</h1>
      <AnalyticsHeader title="Presentations Activity" />
      <StackedColumnChart />
      <div className="tableContainer">
        <PresentationsTable resources={presentations} />
      </div>
    </PresentationContent>
  );
}

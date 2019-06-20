import React from "react";
import styled from "styled-components";
import TemplatesTable from "../components/tables/TemplatesTable";
import StackedColumnChart from "../components/charts/StackedColumnChart";
import LottieLoader from "../components/loading/lottieLoader";
import AnalyticsHeader from "../components/header/AnalyticsHeader";
// GRAPHQL
import {GET_MASTERLISTS} from "../queries/queries";
import {useQuery} from "react-apollo-hooks";

const TemplatesContent = styled.div`
  h1 {
    margin: 0%;
  }
`;

export default function AnalyticsTemplateScreen() {
  const {data, loading, error} = useQuery(GET_MASTERLISTS);
  // true until slowest query is fetched
  if (loading) {
    return <LottieLoader />;
  }

  const templates = data.getTemplates;
  const resources = data.GetResources;

  let result = resources.filter(o1 => {
    return templates.some(template => o1.ResourceID === template.Resources[0]);
  });

  result.map(result =>
    templates.map(template => {
      if (template.Resources[0] === result.ResourceID) {
        return (template.Thumbnail = result.Thumbnail);
      }
    })
  );

  return (
    <TemplatesContent>
      <h1>Templates</h1>
      <AnalyticsHeader title="Templates Activity" />
      <StackedColumnChart />?
      <TemplatesTable resources={templates} />
    </TemplatesContent>
  );
}

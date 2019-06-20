import React from "react";
import styled from "styled-components";
import TemplatesTable from "../components/tables/TemplatesTable";
import LottieLoader from "../components/loading/lottieLoader";
// GRAPHQL
import {GET_MASTERLISTS} from "../queries/queries";
import {useQuery} from "react-apollo-hooks";

const TemplatesContent = styled.div`
  h1 {
    margin: 0%;
  }
`;

export default function TemplatesSection() {
  const {data, loading, error} = useQuery(GET_MASTERLISTS);
  // true until slowest query is fetched
  if (loading) {
    return <LottieLoader />;
  }
  const templates = data.getTemplates;
  const resources = data.GetResources;

  let result = resources.filter(resource => {
    return templates.some(template => resource.ResourceID === template.Resources[0]);
  });

  result.map(result =>
    templates.map(template => {
      if (template.Resources[0] === result.ResourceID) {
        return (template.Thumbnail = result.Thumbnail);
      }
    })
  );

  const onSubmit = data => {
    alert("Form submitted, please check browser console");
    console.log(data);
  };
  return (
    <TemplatesContent>
      <h1>Templates</h1>
      <TemplatesTable resources={templates} />
    </TemplatesContent>
  );
}

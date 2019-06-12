import React, {Component} from "react";
import styled from "styled-components";
import TemplatesTable from "../components/tables/TemplatesTable";
// GRAPHQL
import {GET_MASTERLISTS} from "../queries/queries";
import {useQuery, useMutation} from "react-apollo-hooks";
import gql from "graphql-tag";

const TemplatesContent = styled.div`
  h1 {
    margin: 0%;
  }
`;

const getThumbId = templates => {
  const thumbArr = templates.map(template => template.Resources.map(id => id));

  return thumbArr.map(id => {
    return id[0];
  });
};

const getThumbnailUrl = (thumbID, resources) => {
  resources.map(resource => {
    if (thumbID === resource.ResourceID) {
      return resource.Thumbnail;
    }
  });
};

function arraymove(arr, fromIndex, toIndex) {
  var element = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, element);
}

export default function TemplatesSection() {
  const {data, loading, error} = useQuery(GET_MASTERLISTS);
  // true until slowest query is fetched
  if (loading) {
    return <div>...loading</div>;
  }
  const templates = data.getTemplates;
  const resources = data.GetResources;

  const thumbnailIds = getThumbId(templates);
  const resourceId = getThumbnailUrl(thumbnailIds, resources);

  // resourceId.map(resource => {
  //   templates.map(template => {
  //     console.log(resource.Thumbnail);
  //     template.Thumbnail = resource.Thumbnail;
  //   });
  // });

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

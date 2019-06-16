import React, {Fragment} from "react";
import {useQuery} from "react-apollo-hooks";
import {GET_MASTERLISTS} from "../queries/queries";
import styled from "styled-components";
import ColumnChart from "../components/charts/ColumnChart";
import AnalyticsResourceTable from "../components/tables/AnalyticsResourceTable";
import LottieLoader from "../components/loading/lottieLoader";
import {TreeCardStyles as MiniCard} from "../components/cards";
import {MainPageTitle} from "../components/titles";
import TreeView from "../components/treelist/TreeView";

// Sets selected category id in cache, which we later extract to filter items in our resource array
const filterResources = (resources, selectedCategoryId) => {
  if (selectedCategoryId === 2246) {
    return resources;
  }

  return resources.filter(resource => {
    return resource.ResourceCategoryMembership.map(
      resource => resource.ResourceCategoryID
    ).includes(selectedCategoryId);
  });
};

export default function AnalyticsResourceView() {
  const {data, loading, error} = useQuery(GET_MASTERLISTS);

  // true until slowest query is fetched
  if (loading) {
    return <LottieLoader />;
  }

  const categories = data.getCategories;
  const selectedCategoryId = data.selectedCategoryId.categoryId;

  const resources = filterResources(data.GetResources, selectedCategoryId);
  return (
    <Fragment>
      <MainPageTitle>Resource Analytics</MainPageTitle>
      <ColumnChart style={{maxHeight: "500px", maxWidth: "100%"}} />
      <ResourceActivity>
        <MiniCard style={{marginTop: "2em"}}>
          <TreeView data={categories} />
        </MiniCard>

        <AnalyticsResourceTable resources={resources} />
      </ResourceActivity>
    </Fragment>
  );
}

const ResourceActivity = styled.div`
  display: flex;
  flex-direction: row;
`;

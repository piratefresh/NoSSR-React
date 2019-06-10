import React, {Component} from "react";
import styled from "styled-components";
import BarChartCard from "../components/charts/ResourcesBarChart";
import HeaderSection from "../components/header";
import ResourceTable from "../components/tables/ResourcesTable";

const ResourceContent = styled.div``;

class ResourceSection extends Component {
  onSubmit = data => {
    alert("Form submitted, please check browser console");
    console.log(data);
  };
  render() {
    return (
      <ResourceContent>
        <HeaderSection HeaderTitle="Resources" />

        <BarChartCard />
        <ResourceTable />
      </ResourceContent>
    );
  }
}

export default ResourceSection;

import React, {Component} from "react";
import styled from "styled-components";
import TemplatesTable from "../components/tables/TemplatesTable";
// GRAPHQL
import gql from "graphql-tag";
import {Query} from "react-apollo";

const TemplatesContent = styled.div`
  h1 {
    margin: 0%;
  }
`;

class TemplatesSection extends Component {
  onSubmit = data => {
    alert("Form submitted, please check browser console");
    console.log(data);
  };
  render() {
    return (
      <TemplatesContent>
        <h1>Templates</h1>
        <Query query={GET_LOCAL_TEMPLATES}>
          {({loading, error, data, client, refetch}) => {
            if (loading) return null;
            if (error) return `Error! ${error}`;
            return <TemplatesTable data={data.templates} />;
          }}
        </Query>
      </TemplatesContent>
    );
  }
}

export default TemplatesSection;

const GET_LOCAL_TEMPLATES = gql`
  query getLocalTemplates {
    templates @client {
      Name
      AddedBy
      ID
      Active
      Resources
    }
  }
`;

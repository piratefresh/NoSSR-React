import React, {Fragment} from "react";
import {useQuery} from "react-apollo-hooks";
import {GET_PRESENTATIONS} from "../queries/queries";
import PresentationsTable from "../components/tables/PresentationsTable";
import LottieLoader from "../components/loading/lottieLoader";
// Styles
import {MainPageTitle} from "../components/titles";

export default function Presentations() {
  const {data, loading} = useQuery(GET_PRESENTATIONS);
  // true until slowest query is fetched
  if (loading) {
    return <LottieLoader />;
  }
  const presentations = data.getPresentations;
  return (
    <Fragment>
      <MainPageTitle>Presentations</MainPageTitle>
      <PresentationsTable resources={presentations} />
    </Fragment>
  );
}

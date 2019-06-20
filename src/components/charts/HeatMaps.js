import React from "react";
import styled from "styled-components";
import "react-tabs/style/react-tabs.css";
import {MiniCardStyles as MiniCard} from "../cards";
import HeatChart from "../fusioncharts/HeatChart";

const CardContent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  margin: 0 auto;
`;

const TableContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2em;
  align-items: flex-start;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export default function HeatChartScreen() {
  return (
    <TableContainer>
      <MiniCard>
        <CardContent>
          <HeatChart id="heatbar1" />
        </CardContent>
      </MiniCard>
      <MiniCard>
        <CardContent>
          <HeatChart id="heatbar2" />
        </CardContent>
      </MiniCard>
    </TableContainer>
  );
}

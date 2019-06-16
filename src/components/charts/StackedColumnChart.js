import React from "react";
import styled from "styled-components";
import "react-tabs/style/react-tabs.css";
import {MiniCardStyles as MiniCard} from "../cards";
import StackedColumnChart from "../fusioncharts/StackedColumnChart";

const CardContent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  .cardTitle {
    font-size: 1rem;
    letter-spacing: 0.52px;
    color: #617182;
    border-bottom: 1px solid #eff6ff;
    width: 100%;
    padding: 1em;
    overflow: hidden;
  }
`;

const TableContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2em;
  align-items: flex-start;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export default function StackedColumnChartScreen() {
  return (
    <TableContainer>
      <MiniCard>
        <CardContent>
          <StackedColumnChart />
        </CardContent>
      </MiniCard>
      <MiniCard>
        <CardContent>
          <StackedColumnChart />
        </CardContent>
      </MiniCard>
      <MiniCard>
        <CardContent>
          <StackedColumnChart />
        </CardContent>
      </MiniCard>
    </TableContainer>
  );
}

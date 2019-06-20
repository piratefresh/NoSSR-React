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
    color: ${props => props.theme.colors.grey};
    border-bottom: ${props => `1px solid ${props.theme.colors.lightgrey}`};
    width: 100%;
    padding: 1em;
    overflow: hidden;
  }
`;

const TableContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2em;
  align-items: flex-start;
  @media (max-width: 800px) {
    grid-template-rows: repeat(auto-fit, 1fr);
  }
`;

export default function StackedColumnChartScreen() {
  return (
    <TableContainer>
      <MiniCard>
        <CardContent>
          <StackedColumnChart id="bar1" />
        </CardContent>
      </MiniCard>
      <MiniCard>
        <CardContent>
          <StackedColumnChart id="bar2" />
        </CardContent>
      </MiniCard>
      <MiniCard>
        <CardContent>
          <StackedColumnChart id="bar3" />
        </CardContent>
      </MiniCard>
    </TableContainer>
  );
}

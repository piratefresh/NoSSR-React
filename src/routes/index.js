import React, {Component, Fragment} from "react";
import styled from "styled-components";
import DashboardSplineGraph from "../components/charts/DashboardSplineGraph";
import DonutChart from "../components/fusioncharts/DonutChart";
import StackedBarChart from "../components/fusioncharts/ProgressBarChart";
import SunburstChart from "../components/nivo/SunBurst";
import {MiniCardStyles as MiniCard} from "../components/cards";
import HeaderSection from "../components/header";
import dataSet from "../data/dashboardData";
import AccountGroupIcon from "../icons/AccountGroupIcon";
import ShareVarientIcon from "../icons/ShareVarient";
import {useSprings, animated} from "react-spring";

const TableContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2em;
  align-items: flex-start;
  height: 100%;
  margin-top: 2.5em;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Index = () => {
  return (
    <Fragment>
      <HeaderSection HeaderTitle="Dashboard" />

      <DashboardSplineGraph style={{maxHeight: "500px", maxWidth: "100%"}} />

      <TableContainer>
        {dataSet.map((data, index) => {
          return (
            <MiniCard style={{maxHeight: "350px"}} key={index}>
              <CardContent>
                <CardTitle>{data[0].title}</CardTitle>
                <div className="content-section sales-reps">
                  <div>
                    <AccountGroupIcon />
                    <span style={{marginLeft: "0.8em"}}>Sales Reps</span>
                  </div>
                  <div className="section">
                    <div>
                      Views <h3>{data[0].salesReps.views}</h3>
                    </div>
                    <div>
                      Viewing Time <h3>{data[0].salesReps.viewingTime}</h3>
                    </div>
                  </div>
                </div>
                <div className="content-section shared">
                  <div>
                    <ShareVarientIcon />
                    <span style={{marginLeft: "0.8em"}}>Shared</span>
                  </div>
                  <div className="section">
                    <div>
                      Views <h3>{data[0].shared.views}</h3>
                    </div>
                    <div>
                      Viewing Time <h3>{data[0].shared.viewingTime}</h3>
                    </div>
                  </div>
                </div>
              </CardContent>
            </MiniCard>
          );
        })}

        <MiniCard style={{maxHeight: "350px"}}>
          <CardContent>
            <CardTitle>Shared</CardTitle>
            <DonutChart id="donut4" style={{overflow: "hidden"}} />
            <SharedSection>
              <div className="section-stats">
                <div className="stats">
                  <div className="title">Sent</div>
                  <div className="stat">100|50%</div>
                </div>
                <div className="stats">
                  <div className="title">Opened</div>
                  <div className="stat">100|50%</div>
                </div>
              </div>
            </SharedSection>
          </CardContent>
        </MiniCard>
        <MiniCard style={{maxHeight: "350px"}}>
          <CardContent>
            <CardTitle>Users</CardTitle>
            <StackedBarChart />
          </CardContent>
        </MiniCard>
      </TableContainer>
    </Fragment>
  );
};

export default Index;

const CardContent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 1em;
  width: 100%;
  }
  .sales-reps {
    h3 {
      color: ${props => props.theme.colors.blue};
    }
  }
  .shared {
    h3 {
      color: ${props => props.theme.colors.green};
    }
  }
  .content-section {
    display: flex;
    flex-direction: column;
    margin-top: 1.5em;
    @media (max-width: 1000px) {
      text-align: center;
    }
    .section {
      display: flex;
      flex-direction: row;
      margin-top: 2em;
      flex-basis: 50%;
      justify-content: space-evenly;
      @media (max-width: 1000px) {
      }
    }
  }
`;

const SharedSection = styled.div`
  display: flex;
  flex-direction: column;
  .section-stats {
    flex-direction: row;
    .stats {
      display: flex;
      justify-content: space-around;
      width: 100%;
      margin-bottom: 1em;
    }
  }
`;

const CardTitle = styled.h3`
  font-size: 1rem;
  letter-spacing: 0.52px;
  color: ${props => props.theme.colors.grey};
  border-bottom: ${props => `${props.theme.colors.lightgrey} 1px solid`};
  height: 50px;
  max-height: 50px;
  @media (max-width: 1000px) {
    text-align: center;
  }
`;

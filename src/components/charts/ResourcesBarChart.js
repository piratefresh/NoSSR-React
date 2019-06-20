import React from "react";
import styled from "styled-components";
import Measure from "react-measure";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {MainCardStyles as MainCard} from "../cards";
import ColumnChart from "../fusioncharts/ColumnChart";

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

const HeaderSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 15px;
`;

class DashboardSplineGraph extends React.Component {
  state = {
    dimensions: {
      width: -1,
      height: -1
    }
  };
  render() {
    return (
      <Measure
        bounds
        onResize={contentRect => {
          this.setState({dimensions: contentRect.bounds});
        }}
      >
        {({measureRef}) => (
          <div ref={measureRef}>
            <MainCard style={{maxHeight: "500px", maxWidth: "100%"}}>
              <CardContent>
                <Tabs>
                  <div className="cardTitle">
                    <HeaderSection style={{margin: 0}}>
                      <h3>Dashboard</h3>
                      <TabList>
                        <Tab>Viewed</Tab>
                        <Tab>Time Spent</Tab>
                        <Tab>In Presentation</Tab>
                      </TabList>
                    </HeaderSection>
                  </div>
                  <MainCard>
                    <TabPanel>
                      <ColumnChart cardWidth={this.state.dimensions.width} />
                    </TabPanel>
                    <TabPanel>
                      <ColumnChart cardWidth={this.state.dimensions.width} />
                    </TabPanel>
                    <TabPanel>
                      <ColumnChart cardWidth={this.state.dimensions.width} />
                    </TabPanel>
                  </MainCard>
                </Tabs>
              </CardContent>
            </MainCard>
          </div>
        )}
      </Measure>
    );
  }
}

export default DashboardSplineGraph;

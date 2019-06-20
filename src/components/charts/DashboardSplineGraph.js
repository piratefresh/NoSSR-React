import React from "react";
import styled from "styled-components";
import Measure from "react-measure";
import {MainCardStyles as MainCard} from "../cards";
import SplineChart from "../fusioncharts/SplineChart";

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

const GraphContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  .categoryContent {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding-left: 1.5em;
    padding-top: 1em;
    padding-bottom: 1em;
    margin-left: 1em;
    .categorySection {
      h2 {
        font-size: 1.5em;
      }
      h3 {
        font-size: 1.75rem;
        letter-spacing: 0.02em;
        color: ${props => props.theme.colors.grey};
      }
    }
  }
`;

const ColorCode = {
  blue: "#1F98F4",
  green: "#4CAF50",
  yellow: "#DEA700",
  red: "#F44336"
};

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
            <MainCard>
              <CardContent>
                <div className="cardTitle">
                  <h3>Resources</h3>
                </div>
                <GraphContainer>
                  <div className="categoryContent" style={{padding: "2em"}}>
                    <div className="categorySection">
                      <h4>View Resources</h4>
                      <h3 style={{color: ColorCode.blue}}>25,500</h3>
                    </div>
                    <div className="categorySection">
                      <h4>Creating Setvi Presentations</h4>
                      <h3 style={{color: ColorCode.green}}>25,500</h3>
                    </div>
                    <div className="categorySection">
                      <h4>Viewing Setvi Presentations</h4>
                      <h3 style={{color: ColorCode.yellow}}>25,500</h3>
                    </div>
                    <div className="categorySection">
                      <h4>Sharing Setvi Presentations</h4>
                      <h3 style={{color: ColorCode.red}}>25,500</h3>
                    </div>
                  </div>
                  <SplineChart cardWidth={this.state.dimensions.width} />
                </GraphContainer>
              </CardContent>
            </MainCard>
          </div>
        )}
      </Measure>
    );
  }
}

export default DashboardSplineGraph;

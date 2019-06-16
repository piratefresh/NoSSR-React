import React from "react";
import styled from "styled-components";
import Measure from "react-measure";
import {MainCardStyles as MainCard} from "../cards";
import ColumnChart from "../fusioncharts/ColumnChart";
import Tabs from "../tabs/Tabs";
import LottieLoader from "../loading/lottieLoader";

const CardContent = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;

const ColumnContainer = styled.div`
  height: 100%;
  width: 100%;
`;

class ColumnChartGraph extends React.Component {
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
            {this.state.dimensions.width < 250 ? (
              <LottieLoader />
            ) : (
              <MainCard style={{padding: "2em"}}>
                <Tabs analytics>
                  <div label="Viewed">
                    <CardContent>
                      <ColumnContainer>
                        <ColumnChart cardWidth={this.state.dimensions.width} />
                      </ColumnContainer>
                    </CardContent>
                  </div>

                  <div label="Time Spent">
                    <CardContent>
                      <ColumnContainer>
                        <ColumnChart cardWidth={this.state.dimensions.width} />
                      </ColumnContainer>
                    </CardContent>
                  </div>

                  <div label="In Presentations">
                    <CardContent>
                      <ColumnContainer>
                        <ColumnChart cardWidth={this.state.dimensions.width} />
                      </ColumnContainer>
                    </CardContent>
                  </div>

                  <div label="Shared">
                    <CardContent>
                      <ColumnContainer>
                        <ColumnChart cardWidth={this.state.dimensions.width} />
                      </ColumnContainer>
                    </CardContent>
                  </div>
                </Tabs>
              </MainCard>
            )}
          </div>
        )}
      </Measure>
    );
  }
}

export default ColumnChartGraph;

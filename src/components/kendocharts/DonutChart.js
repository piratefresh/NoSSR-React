import React from 'react';
import ReactDOM from 'react-dom';

import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels
} from '@progress/kendo-react-charts';

import data from './power-distribution-data.json';

const donutCenterRenderer = () => (<span><h3>22.5%</h3> of which renewables</span>);
const labelContent = (e) => (e.category);

export default const ChartContainer = () => (
  <Chart donutCenterRender={donutCenterRenderer}>
    <ChartSeries>
      <ChartSeriesItem type="donut" data={data} categoryField="kind" field="share">
        <ChartSeriesLabels color="#fff" background="none" content={labelContent} />
      </ChartSeriesItem>
    </ChartSeries>
    <ChartLegend visible={false} />
  </Chart>
);
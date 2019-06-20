import React from "react";
import FusionCharts from "fusioncharts/core";
import HeatMap from "fusioncharts/viz/heatmap";
import FusionTheme from "fusioncharts/themes/es/fusioncharts.theme.fusion";
import ReactFC from "react-fusioncharts";

ReactFC.fcRoot(FusionCharts, HeatMap, FusionTheme);

const dataSource = {
  chart: {
    theme: "fusion",
    bgColor: `${props => props.theme.card}`,
    caption: "Viewed Presentations",
    subcaption: "Average time people view presentations",
    showPlotBorder: "1",
    showValues: "1",
    mapByCategory: "1"
  },
  rows: {
    row: [
      {
        id: "NY",
        label: "New York"
      },
      {
        id: "LA",
        label: "Los Angeles"
      },
      {
        id: "CH",
        label: "Chicago"
      },
      {
        id: "HO",
        label: "Houston"
      }
    ]
  },
  columns: {
    column: [
      {
        id: "wI",
        label: "Winter"
      },
      {
        id: "SU",
        label: "Summer"
      },
      {
        id: "SP",
        label: "Spring"
      },
      {
        id: "AU",
        label: "Autumn"
      }
    ]
  },
  dataset: [
    {
      data: [
        {
          rowid: "LA",
          columnid: "WI",
          displayValue: "60.10",
          colorRangeLabel: "Warm"
        },
        {
          rowid: "LA",
          columnid: "SP",
          displayValue: "64.5",
          colorRangeLabel: "Warm"
        },
        {
          rowid: "LA",
          columnid: "SU",
          displayValue: "68.2",
          colorRangeLabel: "Warm"
        },
        {
          rowid: "LA",
          columnid: "AU",
          displayValue: "65.7",
          colorRangeLabel: "Warm"
        },
        {
          rowid: "NY",
          columnid: "WI",
          displayValue: "33.7",
          colorRangeLabel: "Freezing"
        },
        {
          rowid: "NY",
          columnid: "SP",
          displayValue: "57.8",
          colorRangeLabel: "Warm"
        },
        {
          rowid: "NY",
          columnid: "SU",
          displayValue: "74.49",
          colorRangeLabel: "Hot"
        },
        {
          rowid: "NY",
          columnid: "AU",
          displayValue: "57.6",
          colorRangeLabel: "Warm"
        },
        {
          rowid: "CH",
          columnid: "WI",
          displayValue: "22.89",
          colorRangeLabel: "Freezing"
        },
        {
          rowid: "CH",
          columnid: "SP",
          displayValue: "55.7",
          colorRangeLabel: "Warm"
        },
        {
          rowid: "CH",
          columnid: "SU",
          displayValue: "72.2",
          colorRangeLabel: "Hot"
        },
        {
          rowid: "CH",
          columnid: "AU",
          displayValue: "51.6",
          colorRangeLabel: "Warm"
        },
        {
          rowid: "HO",
          columnid: "WI",
          displayValue: "53.0",
          colorRangeLabel: "Warm"
        },
        {
          rowid: "HO",
          columnid: "SP",
          displayValue: "72.7",
          colorRangeLabel: "Hot"
        },
        {
          rowid: "HO",
          columnid: "SU",
          displayValue: "83.3",
          colorRangeLabel: "Hot"
        },
        {
          rowid: "HO",
          columnid: "AU",
          displayValue: "53.0",
          colorRangeLabel: "Warm"
        }
      ]
    }
  ],
  colorRange: {
    gradient: "0",
    color: [
      {
        code: "#CCF5FE",
        minValue: "0",
        maxValue: "50",
        label: "Freezing"
      },
      {
        code: "#87D1F8",
        minValue: "50",
        maxValue: "70",
        label: "Warm"
      },
      {
        code: "#2C9FF5",
        minValue: "70",
        maxValue: "85",
        label: "Hot"
      }
    ]
  }
};

class HeatMapChart extends React.Component {
  render() {
    const chartConfigs = {
      id: this.props.id,
      type: "heatmap",
      width: 500,
      height: 350,
      dataFormat: "json",
      dataSource: dataSource
    };
    return (
      <div className="chartContainer">
        <ReactFC {...chartConfigs} />
      </div>
    );
  }
}

export default HeatMapChart;

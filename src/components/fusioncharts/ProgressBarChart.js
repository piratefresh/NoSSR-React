import React from "react";
import FusionCharts from "fusioncharts/core";
import StackedBar2d from "fusioncharts/viz/stackedbar2d";
import FusionTheme from "fusioncharts/themes/es/fusioncharts.theme.fusion";
import ReactFC from "react-fusioncharts";

ReactFC.fcRoot(FusionCharts, StackedBar2d, FusionTheme);

const dataSource = {
  chart: {
    palettecolors: "#E64571, #ECECEC",
    plotgradientcolor: " ",
    theme: "fusion",
    yaxismaxvalue: "30",
    showlegend: "1",
    interactivelegend: "0",
    showvalues: "0",
    showsum: "0",
    maxBarHeight: "5",
    canvasBgAlpha: "0"
  },
  categories: [
    {
      category: [
        {
          label: "Web"
        },
        {
          label: "Tablet"
        },
        {
          label: "Mobile"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "Users",
      data: [
        {
          value: "500",
          color: "F44336"
        },
        {
          value: "700",
          color: "1F98F4"
        },
        {
          value: "150",
          color: "4CAF50"
        }
      ]
    },
    {
      seriesname: "Total Users",
      data: [
        {
          value: "1000"
        },
        {
          value: "1000"
        },
        {
          value: "1000"
        }
      ]
    }
  ]
};

class StackedBarChart extends React.Component {
  render() {
    const chartConfigs = {
      id: this.props.id,
      type: "stackedbar2d",
      width: 350,
      height: 250,
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

export default StackedBarChart;

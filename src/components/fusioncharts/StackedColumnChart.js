import React from "react";
import FusionCharts from "fusioncharts/core";
import StackedBar2D from "fusioncharts/viz/bar2d";
import FusionTheme from "fusioncharts/themes/es/fusioncharts.theme.fusion";
import ReactFC from "react-fusioncharts";

ReactFC.fcRoot(FusionCharts, StackedBar2D, FusionTheme);

const dataSource = {
  chart: {
    theme: "fusion"
  },
  data: [
    {
      label: "Tom Group",
      value: "40",
      color: "1F98F4"
    },
    {label: "Peter Group", value: "36", color: "1F98F4"},
    {
      label: "Arnold Group",
      value: "90",
      color: "1F98F4"
    },
    {label: "Sarah Group", value: "56", color: "1F98F4"},
    {label: "Dash Group", value: "56", color: "1F98F4"}
  ]
};

class StackedColumnChart extends React.Component {
  render() {
    let cardW = this.props.cardWidth;
    const chartConfigs = {
      type: "bar2d", // The chart type
      id: this.props.id,
      width: cardW,
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

export default StackedColumnChart;

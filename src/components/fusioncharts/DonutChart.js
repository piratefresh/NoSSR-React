import React from "react";
import FusionCharts from "fusioncharts/core";
import Doughnut2d from "fusioncharts/viz/doughnut2d";
import FusionTheme from "fusioncharts/themes/es/fusioncharts.theme.fusion";
import ReactFC from "react-fusioncharts";

ReactFC.fcRoot(FusionCharts, Doughnut2d, FusionTheme);

const dataSource = {
  chart: {
    showpercentvalues: "1",
    decimals: "1",
    doughnutRadius: "10",
    enableSmartLabels: 0,
    skipOverlapLabels: 0,
    plottooltext:
      "<b>$percentValue</b> of our Android users are on <b>$label</b>",
    theme: "fusion"
  },
  data: [
    {
      label: "Sent Emails",
      value: "1000"
    },
    {
      label: "Opened Emails",
      value: "500"
    }
  ]
};
class DoughnutChart extends React.Component {
  render() {
    const chartConfigs = {
      id: this.props.id,
      type: "doughnut2d",
      width: 350,
      height: 190,
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

export default DoughnutChart;

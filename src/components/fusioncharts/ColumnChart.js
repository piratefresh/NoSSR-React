import React from "react";
import FusionCharts from "fusioncharts/core";
import Column2d from "fusioncharts/viz/column2d";
import FusionTheme from "fusioncharts/themes/es/fusioncharts.theme.fusion";
import ReactFC from "react-fusioncharts";

ReactFC.fcRoot(FusionCharts, Column2d, FusionTheme);

const dataSource = {
  chart: {
    theme: "fusion",
    paletteColors: "#1F98F4",
    chartLeftMargin: "60",
    chartTopMargin: "20",
    chartRightMargin: "60",
    chartBottomMargin: "20",
    plotToolText:
      "<div><img style='width:100px;height: 100%' src='$displayValue'></img><div style='float: right; display: table-cell;'><p style='display: table-cell; vertical-align: middle; text-align: center;'>$label <br> $value</p></div></div>"
  },
  data: [
    {
      label: "Jan",
      value: "420000",
      displayValue:
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      label: "Feb",
      value: "810000",
      displayValue:
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      label: "Mar",
      value: "720000",
      displayValue:
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      label: "Apr",
      value: "550000",
      displayValue:
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      label: "Maymewewesdasdsadawea.pdf",
      value: "910000",
      displayValue:
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      label: "Jun",
      value: "510000",
      displayValue:
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      label: "Jul",
      value: "680000",
      displayValue:
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      label: "Aug",
      value: "620000",
      displayValue:
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      label: "Sep",
      value: "610000",
      displayValue:
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      label: "Oct",
      value: "490000",
      displayValue:
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      label: "Nov",
      value: "900000",
      displayValue:
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      label: "Dec",
      value: "730000",
      displayValue:
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    }
  ]
};

class ColumnChart extends React.Component {
  render() {
    let cardW = this.props.cardWidth - 50;
    const chartConfigs = {
      type: "column2d",
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

export default ColumnChart;

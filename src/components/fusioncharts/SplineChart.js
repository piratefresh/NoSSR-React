import React from "react";
import FusionCharts from "fusioncharts/core";
import MultiSpline2D from "fusioncharts/viz/msspline";
import FusionTheme from "fusioncharts/themes/es/fusioncharts.theme.fusion";
import ReactFC from "react-fusioncharts";

ReactFC.fcRoot(FusionCharts, MultiSpline2D, FusionTheme);

const dataSource = {
  chart: {
    theme: "fusion",
    chartLeftMargin: "40",
    chartTopMargin: "0",
    chartRightMargin: "40",
    chartBottomMargin: "0"
  },
  categories: [
    {
      category: [
        {
          label: "Mon"
        },
        {
          label: "Tue"
        },
        {
          label: "Wed"
        },
        {
          label: "Thu"
        },
        {
          label: "Fri"
        },
        {
          label: "Sat"
        },
        {
          label: "Sun"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "View Resources",
      color: "#1F98F4",
      data: [
        {
          value: "123"
        },
        {
          value: "233"
        },
        {
          value: "507"
        },
        {
          value: "110"
        },
        {
          value: "529"
        },
        {
          value: "803"
        },
        {
          value: "202"
        }
      ]
    },
    {
      seriesname: "Creating Setvi Presentations",
      color: "#4CAF50",
      data: [
        {
          value: "250"
        },
        {
          value: "300"
        },
        {
          value: "450"
        },
        {
          value: "334"
        },
        {
          value: "140"
        },
        {
          value: "670"
        },
        {
          value: "900"
        }
      ]
    },
    {
      seriesname: "Viewing Setvi Presentations",
      color: "#DEA700",
      data: [
        {
          value: "110"
        },
        {
          value: "500"
        },
        {
          value: "980"
        },
        {
          value: "400"
        },
        {
          value: "700"
        },
        {
          value: "460"
        },
        {
          value: "740"
        }
      ]
    },
    {
      seriesname: "Sharing Setvi Presentations",
      color: "#F44336",
      data: [
        {
          value: "900"
        },
        {
          value: "300"
        },
        {
          value: "660"
        },
        {
          value: "460"
        },
        {
          value: "90"
        },
        {
          value: "557"
        },
        {
          value: "123"
        }
      ]
    }
  ]
};
class SplineChart extends React.Component {
  render() {
    let cardW = this.props.cardWidth - 300;
    console.log(cardW);
    const chartConfigs = {
      type: "msspline", // The chart type
      width: cardW, // Width of the chart
      height: 350, // Height of the chart
      dataFormat: "json", // Data type
      dataSource: dataSource
    };
    return (
      <div className="chartContainer">
        <ReactFC {...chartConfigs} onRender={this.renderComplete} />
      </div>
    );
  }
}

export default SplineChart;

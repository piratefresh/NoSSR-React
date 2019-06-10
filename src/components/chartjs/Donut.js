import React, {Component} from "react";
import Chart from "chart.js";
import classes from "./Donut.css";
let myDonutChart;

//--Chart Style Options--//
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif";
Chart.defaults.global.legend.display = false;
//--Chart Style Options--//

export default class DonutGraph extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    this.buildChart();
  }

  componentDidUpdate() {
    this.buildChart();
  }

  buildChart = () => {
    const myChartRef = this.chartRef.current.getContext("2d");
    const {data, average, labels} = this.props;

    if (typeof myDonutChart !== "undefined") myDonutChart.destroy();

    myDonutChart = new Chart(myChartRef, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [50, 60, 100, 30, 40],
            backgroundColor: ["red", "orange", "yellow", "red", "blue"]
          }
        ],
        labels: ["Red", "Orange", "Yellow", "Green", "Blue"]
      },
      options: {
        responsive: true,
        legend: {
          display: false
        }
      },
      centerText: {
        display: true,
        text: "280"
      }
    });
  };

  render() {
    return (
      <div className={classes.graphContainer}>
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}

import React, { Component } from "react";
import Chart from "react-apexcharts";

class LineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "metric-chart",
        },
        grid: {
          show: true,
          xaxis: {
            lines: {
              show: true,
            },
          },
          yaxis: {
            lines: {
              show: true,
            },
          },
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          colors: ["#53BB81", "#DB1A1A", "#000000", "#F1F1A6"],
          width: 1.5,
          dashArray: 0,
        },
        yaxis: {
          axisBorder: {
            show: true,
            color: "#000",
            offsetX: 0,
            offsetY: 0,
          },
        },
        xaxis: {
          categories: this.props.categories || [],
          axisBorder: {
            show: true,
            color: "#000",
          },
        },
        legend: {
          show: true,
          position: "top",
          horizontalAlign: "left",
          fontweight: 500,
          offsetY: 15,
          offsetX: 10,
        },
      },
      series: this.props.series || [],
    };
  }

  render() {
    return (
      <div className="app w-full h-fit">
        <div className="row w-full h-fit">
          <div className="mixed-chart w-full h-fit">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="100%"
              height=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LineChart;

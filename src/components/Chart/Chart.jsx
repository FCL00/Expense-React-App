/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import react from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
function Chart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  function showChartBar(dataPoint) {
    return (
      <ChartBar
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={totalMaximum}
        label={dataPoint.label}
      />
    );
  }

  return <div className="chart">{props.dataPoints.map(showChartBar)}</div>;
}

export default Chart;

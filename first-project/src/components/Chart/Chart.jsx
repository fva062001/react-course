import React from "react";

import './Chart.css';
import ChartBar from "./ChartBar";
function Chart(props){

    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointsValues)
    return(
        <div className="chart">
            {props.dataPoints.map(item =>{
                return <ChartBar 
                value={item.value} 
                maxValue={totalMaximum} 
                label={item.label} 
                key={item.id}
                />
            })}
        </div>

    );
}

export default Chart;
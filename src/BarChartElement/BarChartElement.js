import React from "react";
import { BarChart, CartesianGrid, XAxis, YAxis,Tooltip, Legend, Bar } from "recharts";

import css from "./BarChartElement.css"

const data = [
  {skill: "ES6", skillIQ: 137},
  {skill: "c#", skillIQ: 95},
  {skill: "React", skillIQ: 200},
  {skill: "CSS", skillIQ: 150}
];

export default class BarChartElement extends React.Component{
  constructor() {
    super();
  }

  render(){
    return (  
      <div className={css.barChartContainer}>  
        <BarChart className={css.barChart} width={900} height={400} layout={"vertical"} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="skillIQ" type="number" />
            <YAxis interval={0} dataKey="skill" type="category" />
            <Tooltip />
            <Legend />
            <Bar dataKey="skillIQ" fill="#8884d8" />
        </BarChart>
      </div>
    );
  }
}
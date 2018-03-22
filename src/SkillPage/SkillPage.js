import React from "react";
import { LineChart, Line } from "recharts";


import PhotoHeader from "../PhotoHeader/PhotoHeader.js";
import BarChartElement from "../BarChartElement/BarChartElement.js";

const data = [
  {name: "Page A", uv: 4000, pv: 2400, amt: 2400},
  {name: "Page B", uv: 3000, pv: 1398, amt: 2210},
];

export default class SkillPage extends React.Component{
  constructor() {
    super();
  }

  render(){
    return (
      <div>
        <PhotoHeader text="Skills"/>
        <BarChartElement />
      </div>
    );
  }
}
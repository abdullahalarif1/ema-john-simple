import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Bangla",
    marks: 75,
    pv: 72,
    amt: 77,
  },
  {
    name: "English",
    marks: 90,
    pv: 99,
    amt: 82,
  },
  {
    name: "Chemistry",
    marks: 20,
    pv: 50,
    amt: 70,
  },
  {
    name: "Political",
    marks: 70,
    pv: 11,
    amt: 5,
  },
  {
    name: "Biology",
    marks: 60,
    pv: 30,
    amt: 95,
  },
  {
    name: "Physics",
    marks: 70,
    pv: 40,
    amt: 24,
  },
  {
    name: "Law",
    marks: 50,
    pv: 80,
    amt: 60,
  },
];

const Rechart = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Rechart</h1>
      <ResponsiveContainer width="100%" height="100%">
        <div
          className="rechart"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <BarChart width={800} height={400} data={data}>
            <XAxis dataKey="name"></XAxis>
            <YAxis dataKey="marks"></YAxis>
            <Tooltip></Tooltip>
            <Bar dataKey="pv" fill="#8884d8"></Bar>
            <Bar dataKey="amt" fill="#82ca9d"></Bar>
          </BarChart>
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default Rechart;

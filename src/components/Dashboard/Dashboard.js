import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div>
            <h1>Example of Charts</h1>
            <div className='chart-container'>
            <div>
                {/* line chart */}
                <h1>Line-chart</h1>
            <LineChart width={500} height={300} data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" ></CartesianGrid>
            <XAxis dataKey={"month"}></XAxis>
            <YAxis dataKey={'sell'}></YAxis>
            <YAxis dataKey={'revenue'}></YAxis>
            <Line type="monotone" dataKey={"sell"} stroke="#8884d8"></Line>
            <Line type={"monotype"} dataKey={'revenue'} stroke="#82ca9d"></Line>
            <Tooltip></Tooltip>
            <Legend></Legend>
            </LineChart>
            </div>
            {/* bar chart */}
            <div className='bar-chart-container'>
                <h1>Bar-chart</h1>
                  <BarChart width={500} height={300} data={data}>
                      <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
                      <XAxis dataKey={"month"}></XAxis>
                      <YAxis dataKey={'sell'}></YAxis>
                      <YAxis dataKey={'revenue'}></YAxis>
                      <Tooltip></Tooltip>
                      <Legend></Legend>
                      <Bar dataKey={'sell'} fill="#8884d8"></Bar>
                      <Bar dataKey={'revenue'} fill="#82ca9d"></Bar>
                  </BarChart>
            </div>
            </div>
            
        </div>
    );
};

export default Dashboard;
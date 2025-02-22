import React, { PureComponent } from 'react';
import { LineChart as Lchart, Line, CartesianGrid, XAxis, YAxis  } from 'recharts';

const LineChart = () => {
  const studentMarks = [
    {
        id: 1,
        name: "Alice Johnson",
        physics: 85,
        chemistry: 90,
        math: 88
    },
    {
        id: 2,
        name: "Bob Smith",
        physics: 78,
        chemistry: 82,
        math: 91
    },
    {
        id: 3,
        name: "Charlie Brown",
        physics: 92,
        chemistry: 85,
        math: 89
    },
    {
        id: 4,
        name: "Diana Evans",
        physics: 80,
        chemistry: 88,
        math: 84
    },
    {
        id: 5,
        name: "Ethan Harris",
        physics: 75,
        chemistry: 79,
        math: 82
    },
    {
        id: 6,
        name: "Fiona Clark",
        physics: 89,
        chemistry: 91,
        math: 93
    },
    {
        id: 7,
        name: "George Lewis",
        physics: 83,
        chemistry: 77,
        math: 80
    },
    {
        id: 8,
        name: "Hannah Walker",
        physics: 91,
        chemistry: 89,
        math: 87
    },
    {
        id: 9,
        name: "Ian Hall",
        physics: 76,
        chemistry: 81,
        math: 78
    },
    {
        id: 10,
        name: "Julia Young",
        physics: 88,
        chemistry: 84,
        math: 90
    }
];
  return (
    <div className='mt-12 mx-auto'  >
      <Lchart width={800} height={400} data={studentMarks}>
      <Line type="monotone" dataKey={'physics'} stroke="red" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Line type="monotone" dataKey={'chemistry'} stroke="yellow" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Line type="monotone" dataKey={'math'} stroke="blue" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      </Lchart>
    </div>
  );
};

export default LineChart;
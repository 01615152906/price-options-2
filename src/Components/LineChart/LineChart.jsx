import React from 'react';
// import { LineChart as LC } from 'recharts';
import { LineChart as LChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
const LineChart = () => {

const studentMarksData = [
  { id: 1, name: 'Alice', math: 78, physics: 82, chemistry: 75 },
  { id: 2, name: 'Bob', math: 85, physics: 79, chemistry: 80 },
  { id: 3, name: 'Charlie', math: 92, physics: 91, chemistry: 89 },
  { id: 4, name: 'David', math: 67, physics: 72, chemistry: 70 },
  { id: 5, name: 'Eva', math: 74, physics: 77, chemistry: 73 },
  { id: 6, name: 'Fahim', math: 88, physics: 85, chemistry: 90 },
  { id: 7, name: 'Grace', math: 95, physics: 94, chemistry: 92 },
  { id: 8, name: 'Hassan', math: 60, physics: 65, chemistry: 58 },
  { id: 9, name: 'Ivy', math: 82, physics: 80, chemistry: 84 },
  { id: 10, name: 'Jamil', math: 90, physics: 88, chemistry: 87 },
];

    return (
        <div>
            <ResponsiveContainer width="100%" height="100%"></ResponsiveContainer>
            <LChart width={700} height={600} data={studentMarksData} >
                   <XAxis dataKey="name" />
                   <YAxis></YAxis>
<Line dataKey="math" stroke="purple"  > </Line>
<Line dataKey={'physics'} stroke="red"   ></Line>

            </LChart>
        </div>
    );
};

export default LineChart;

// import React from 'react';
// import { LineChart as LChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

// const LineChart = () => {
//   const mathMarksData = [
//     { id: 1, name: 'Alice', marks: 78 },
//     { id: 2, name: 'Bob', marks: 85 },
//     { id: 3, name: 'Charlie', marks: 92 },
//     { id: 4, name: 'David', marks: 67 },
//     { id: 5, name: 'Eva', marks: 74 },
//     { id: 6, name: 'Fahim', marks: 88 },
//     { id: 7, name: 'Grace', marks: 95 },
//     { id: 8, name: 'Hassan', marks: 60 },
//     { id: 9, name: 'Ivy', marks: 82 },
//     { id: 10, name: 'Jamil', marks: 90 },
//   ];

//   return (
//     <div>
//       <h2>Student Math Marks Line Chart</h2>
//       <LChart width={700} height={400} data={mathMarksData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Tooltip />
//         <Line type="monotone" dataKey="marks" stroke="#8884d8" activeDot={{ r: 8 }} />
//       </LChart>
//     </div>
//   );
// };

// export default LineChart;

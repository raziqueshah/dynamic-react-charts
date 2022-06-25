import "./App.css";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip, Area, AreaChart, Bar, BarChart } from "recharts";

const pdata = [
  {
    name: "Python",
    student: 3,
    fees: 10,
  },
  {
    name: "Javascript",
    student: 15,
    fees: 12,
  },
  {
    name: "PHP",
    student: 5,
    fees: 10,
  },
  {
    name: "Java",
    student: 10,
    fees: 5,
  },
  {
    name: "C#",
    student: 9,
    fees: 4,
  },
  {
    name: "C++",
    student: 10,
    fees: 8,
  },
];

function App() {
  return (
    <>
      <h1 className="App">Line Charts</h1>
      <ResponsiveContainer width="100%" aspect={3} >
        <LineChart data={pdata} width={500} height={300} margin={{top:5, right:300, left:200, bottom:5}}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={'preserveStartEnd'} tickFormatter={(value)=>value+ " Programming"} />
          <YAxis />
          <Tooltip contentStyle={{backgroundColor: 'yellow'}} />
          <Legend />
          <Line type="monotone" dataKey="student" stroke="red" activeDot={{r:8}} />
          <Line type="monotone" dataKey="fees" stroke="green" activeDot={{r:8}} />
        </LineChart>
      </ResponsiveContainer>

      <h1 className="App">Area Charts</h1>
      <ResponsiveContainer width="100%" aspect={3} >
        <AreaChart data={pdata} width={500} height={300} margin={{top:5, right:300, left:200, bottom:5}}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={'preserveStartEnd'} tickFormatter={(value)=>value+ " Programming"} />
          <YAxis />
          <Tooltip contentStyle={{backgroundColor: 'yellow'}} />
          <Legend />
          <Area type="monotone" dataKey="student" stroke="red" activeDot={{r:8}} />
          {/* <Area type="monotone" dataKey="fees" stroke="green" activeDot={{r:8}} /> */}
        </AreaChart>
      </ResponsiveContainer>


      <h1 className="chart-heading">Bar Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart width={500} height={300} data={pdata} margin={{top:5, right:300, left:200, bottom:5}}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={'preserveStartEnd'} tickFormatter={(value)=>value+ " Programming"} />
          <YAxis />
          <Tooltip contentStyle={{backgroundColor: 'yellow'}} />
          <Legend />
          <Bar dataKey="student" fill="red" />
          <Bar dataKey="fees" fill="green" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default App;

// pages/report.tsx

import Navbar from "../components/Navbar";

const Report: React.FC = () => (
  <div>
    <Navbar />
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Reports</h1>
      <p className="text-gray-600 mb-8">
        Your camp has grown <span className="text-green-500">+5%</span> this month
      </p>
      <div className="grid grid-cols-3 gap-6">
        {/* Healthy Survivors Card */}
        <Card title="Number of Healthy Survivors" value="1,205" change="+5%" changeColor="text-green-500" />
        
        {/* Infected Survivors Card */}
        <Card title="Number of Infected Survivors" value="39" change="-12%" changeColor="text-red-500" />
        
        {/* Resource Allocation Card */}
        <Card title="Average Resource Allocation" value="Food" additionalInfo="10 days worth" />
      </div>
    </div>
  </div>
);

const Card: React.FC<{
  title: string;
  value: string;
  change?: string;
  changeColor?: string;
  additionalInfo?: string;
}> = ({ title, value, change, changeColor, additionalInfo }) => (
  <div className="bg-white p-4 rounded shadow">
    <h2 className="text-xl font-bold">{title}</h2>
    <p className="text-3xl font-bold mt-2">{value}</p>
    {change && <span className={`${changeColor}`}>{change}</span>}
    {additionalInfo && <p className="text-gray-500 mt-1">{additionalInfo}</p>}
    <button className="mt-4 bg-blue-500 text-white p-2 rounded">
      Download Report
    </button>
  </div>
);

export default Report;

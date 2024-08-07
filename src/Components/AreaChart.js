import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AutoComplete } from 'primereact/autocomplete';

function LineChartComponent() {
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);
  const options = ["Weekly", "Monthly", "Yearly"];

  const search = (event) => {
    const query = event.query.toLowerCase();
    const filteredItems = options.filter((item) => item.toLowerCase().startsWith(query));
    setItems(filteredItems);
  }

  const data = [
    { name: "1", value: 1000 },
        { name: "2", value: 4000 },
        { name: "3", value: 3000 },
        { name: "4", value: 2000 },
        { name: "5", value: 7000 },
        { name: "6", value: 9000 },
        { name: "7", value: 11000 },
        { name: "9", value: 14000 },
        { name: "10", value: 12000 },
        { name: "11", value: 13000 },
        { name: "12", value: 2000 },
        { name: "13", value: 5000 },
        { name: "14", value: 9000 },
        { name: "15", value: 8000 },
        { name: "16", value: 10000 },
        { name: "17", value: 11000 },
        { name: "18", value: 7000 },
        { name: "19", value: 9000 },
        { name: "20", value: 5000 },
        { name: "21", value: 3000 },
        { name: "22", value: 14000 },
        { name: "23", value: 12000 },
        { name: "24", value: 11000 },
        { name: "25", value: 10000 },
  ];

  return (
    <div className='w-full p-4 bg-primary-dark rounded-lg'>
      <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start p-2">
        <h1 className='text-white font-bold text-xl md:text-2xl pl-2'>Activity</h1>
        <div className='w-full md:w-auto flex justify-end mt-2 md:mt-0'>
          <AutoComplete 
            value={value} 
            suggestions={items} 
            completeMethod={search} 
            onChange={(e) => setValue(e.value)} 
            dropdown 
            aria-label="Items" 
            className='w-full md:w-48 sm:w-36 xs:w-24' // Adjust width for different screens
          />
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5, }} barSize={20}>
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#7197fe" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LineChartComponent;
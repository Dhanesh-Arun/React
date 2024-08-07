import React from 'react';
import AreaChart from './AreaChart';
import Aimpage from './Aimpage';
import DataTableImages from './Datatbl';
import Ratingtbl from './Ratingtbl';

export default function Dashboard2() {
  return (
    <div className='w-full flex flex-row flex-wrap md:flex-wrap'>
      <div className='w-full md:w-[70%] p-4 md:p-6' style={{ borderRadius: '10px' }}>
        <AreaChart></AreaChart>
      </div>
      <div className='w-full md:w-[30%] p-4 md:p-6' style={{ borderRadius: '10px' }}>
        <Aimpage></Aimpage>
      </div>
      <div className='w-full md:w-[70%] p-4 md:p-6' style={{ borderRadius: '10px' }}>
        <DataTableImages></DataTableImages>
      </div>
      <div className='w-full md:w-[30%] p-4 md:p-6' style={{ borderRadius: '10px' }}>
        <Ratingtbl></Ratingtbl>
      </div>
    </div>
  );
}
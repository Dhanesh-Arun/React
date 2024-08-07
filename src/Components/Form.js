import React from 'react';
import SideBar from './SideBar';
import Topbar from './Topbar';

function Form() {
  return (
    <div className='bg-black w-full h-full rounded-2xl mb-4'>
      <div className='flex '>
        <SideBar></SideBar>
        <div className='w-[95%] xs:overflow-x-hidden xs:overflow-y-hidden'>
          <Topbar></Topbar>
        </div>
      </div>
    </div>
  );
}

export default Form;
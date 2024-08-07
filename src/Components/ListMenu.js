import React from 'react';

function ListMenu({ clsValue, content, num, sensonIcon, percen, percencls }) {
  return (
    <div className='w-full md:w-1/4 bg-primary-dark p-4 rounded-lg'>
      <i className={clsValue}></i>
      <p className='text-[1.1rem] text-white mt-2'>{content}</p>
      <div className='flex justify-between items-end'>
        <p className='text-white font-bold text-[2rem] md:text-lg'>{num}</p>
        <div className='flex justify-center items-center gap-3 h-[40] md:gap-1'>
          <i className={sensonIcon}></i>
          <p className={`${percencls} md:text-sm`}>{percen}</p>
        </div>
      </div>
    </div>
  );
}

export default ListMenu;

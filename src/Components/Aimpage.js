import React from 'react';

export default function Aimpage() {
  return (
    <div className='w-full h-full p-4 bg-primary-dark rounded-lg flex flex-col justify-center items-stretch sm:flex-col md:flex-col'>
      <div className='block sm:block md:block'>
        <div className='flex flex-col p-4 w-full sm:flex-row md:flex-row justify-between gap-4 flex-grow flex-nowrap'>
        <div className='flex items-center justify-around w-full md:w-full '>
            <i className="material-icons w-[70px] h-[70px] sm:w-[50px] sm:h-[50px] md:w-[40px] md:h-[40px] lg:w-[60px] lg:h-[60px] xl:w-[70px] xl:h-[70px] 2xl:w-[80px] 2xl:h-[80px] bg-[#993848] flex items-center justify-center text-red-500 text-3xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl rounded-full">adjust</i>
          <div className='flex w-[80%]  justify-between'>
            <p className='flex  text-white justify-start items-center pl-[1.3rem] p-2 md:text-lg sm:text-base lg:text-xl xl:text-2xl 2xl:text-3xl'>Goals</p>
          <i className='pi pi-angle-right mt-3 p-6 w-[40px] h-[40px] sm:w-[30px] sm:h-[30px] md:w-[25px] md:h-[25px] lg:w-[35px] lg:h-[35px] xl:w-[40px] xl:h-[40px] 2xl:w-[45px] 2xl:h-[45px] bg-[#47494d] flex items-center justify-center text-white text-2xl sm:text-xl md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl rounded-full flex-col'></i>
          </div>
        </div>
        </div>
        <div className='flex flex-col p-4 sm:flex-row md:flex-row justify-between gap-4 flex-grow'>
        <div className='flex items-center justify-around w-full md:w-full '>
            <i className="material-icons w-[70px] h-[70px] sm:w-[50px] sm:h-[50px] md:w-[40px] md:h-[40px] lg:w-[60px] lg:h-[60px] xl:w-[70px] xl:h-[70px] 2xl:w-[80px] 2xl:h-[80px] bg-[#2c3168] flex items-center justify-center text-customblue text-3xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl rounded-full">lunch_dining</i>
            <div className='flex w-[80%]  justify-between'>
            <p className='flex  text-white justify-start items-center pl-[1.3rem] p-2 md:text-lg sm:text-base lg:text-xl xl:text-2xl 2xl:text-3xl'>Popular Dishes</p>
          <i className='pi pi-angle-right mt-3 p-6 w-[40px] h-[40px] sm:w-[30px] sm:h-[30px] md:w-[25px] md:h-[25px] lg:w-[35px] lg:h-[35px] xl:w-[40px] xl:h-[40px] 2xl:w-[45px] 2xl:h-[45px] bg-[#47494d] flex items-center justify-center text-white text-2xl sm:text-xl md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl rounded-full flex-col'></i>
          </div>
        </div>
        </div>
        <div className='flex flex-col p-4 sm:flex-row md:flex-row justify-between gap-4 flex-grow'>
        <div className='flex items-center justify-around w-full md:w-full '>
            <i className="material-icons w-[70px] h-[70px] sm:w-[50px] sm:h-[50px] md:w-[40px] md:h-[40px] lg:w-[60px] lg:h-[60px] xl:w-[70px] xl:h-[70px] 2xl:w-[80px] 2xl:h-[80px] bg-[#204c61] flex items-center justify-center text-customgreen text-3xl sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl rounded-full">rice_bowl</i>
            <div className='flex w-[80%]  justify-between'>
            <p className='flex  text-white justify-start items-center pl-[1.3rem] p-2 md:text-lg sm:text-base lg:text-xl xl:text-2xl 2xl:text-3xl'>Menus</p>
         
            <i className='pi pi-angle-right mt-3 p-6 w-[40px] h-[40px] sm:w-[30px] sm:h-[30px] md:w-[25px] md:h-[25px] lg:w-[35px] lg:h-[35px] xl:w-[40px] xl:h-[40px] 2xl:w-[45px] 2xl:h-[45px] bg-[#47494d] flex items-center justify-center text-white text-2xl sm:text-xl md:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl rounded-full flex-col'></i>
            </div>
            </div>
          </div>
        </div>
      </div>
   
  );
}
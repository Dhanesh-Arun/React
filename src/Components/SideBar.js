import React from 'react';
import '../common.css';

function SideBar() {
  return (
    <div className='w-[5%] md:w-10% sm:w-15% bg-primary-dark text-white flex flex-col justify-between xs:w-20'>
      <div>
      <div className='w-full flex justify-center items-center h-20 md:h-16 sm:h-14 ' id='one'>
        <i className="pi pi-microsoft text-3xl md:text-2xl sm:text-xl text-blue-400 xs:text-xl xs:pt-28"></i>
      </div>
      <div className='w-full flex justify-center items-center h-20 md:h-16 sm:h-14 selectedTab xs:hidden' id='two'>
        <i className="pi pi-home text-2xl md:text-xl sm:text-lg text-blue-400 "></i>
      </div>
      <div className='w-full flex justify-center items-center h-20 md:h-16 sm:h-14 xs:hidden' id='three'>
        <i className="pi pi-chart-bar text-2xl md:text-xl sm:text-lg"></i>
      </div>
      <div className='w-full flex justify-center items-center h-20 md:h-16 sm:h-14 xs:hidden' id='four'>
        <i className="pi pi-clipboard text-2xl md:text-xl sm:text-lg"></i>
      </div>
      <div className='w-full flex justify-center items-center h-20 md:h-16 sm:h-14 xs:hidden' id='five'>
        <i className="pi pi-wallet text-2xl md:text-xl sm:text-lg"></i>
      </div>
      <div className='w-full flex justify-center items-center h-20 md:h-16 sm:h-14 xs:hidden' id='six'>
        <i className="pi pi-shopping-bag text-2xl md:text-xl sm:text-lg"></i>
      </div>
    </div>
    <div>
    <div className='w-full flex justify-center items-center h-20 md:h-16 sm:h-14' id='seven'>
        <i className="pi pi-sign-out text-2xl md:text-xl sm:text-lg"></i>
    </div>
    </div>
    </div>
  );
}

export default SideBar;
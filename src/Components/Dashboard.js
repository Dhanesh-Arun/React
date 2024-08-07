import React from 'react';
import ListMenu from './ListMenu';
import circle from '../assets/We Developer Assignment.jpg';
import Dashboard2 from './Dashboard2';

function Dashboard() {
    return (
        <div>
            <div className='text-white font-bold text-[1.5rem] w-full p-4 pb-0'>Dashboard</div>
            <div className='w-full flex flex-wrap md:flex-nowrap'>
                <div className='flex flex-wrap gap-3 w-full md:w-[70%] p-4 md:flex-nowrap'>
                    <ListMenu clsValue={'pi pi-shopping-cart selected'} content={"Total Orders"} num={"75"} sensonIcon={"pi pi-sort-up-fill grnIcon"} percencls={"grnIcon"} percen={"3%"}></ListMenu>
                    <ListMenu clsValue={'pi pi-shopping-bag delivered'} content={"Total Delivered"} num={"70"} sensonIcon={"pi pi-sort-down-fill redIcon"} percencls={"redIcon"} percen={"3%"}></ListMenu>
                    <ListMenu clsValue={'pi pi-shopping-bag canceled'} content={"Total Cancelled"} num={"05"} sensonIcon={"pi pi-sort-up-fill grnIcon"} percencls={"grnIcon"} percen={"3%"}></ListMenu>
                    <ListMenu clsValue={'pi pi-wallet revenue'} content={"Total Revenue"} num={"$12k"} sensonIcon={"pi pi-sort-down-fill redIcon"} percencls={"redIcon"} percen={"3%"}></ListMenu>
                </div>
                <div className='w-full md:w-[30%] p-4'>
                    <div className='bg-primary-dark p-4 flex justify-between h-[100%] rounded-lg md:h-auto'>
                        <div className=''>
                            <p className='text-[1.1rem] text-white mt-2'>Net Profit</p>
                            <p className='text-white font-bold text-[2rem] mt-6'>$ 6759.25</p>
                            <i className='pi pi-sort-up-fill grnIcon mt-6'> 3%</i>
                        </div>
                        <div className=''>
                            <img src={circle} alt='percentage' style={{ mixBlendMode: 'lighten' }}></img>
                        </div>
                    </div>
                </div>
            </div>
            <Dashboard2></Dashboard2>
        </div>
    );
}

export default Dashboard;
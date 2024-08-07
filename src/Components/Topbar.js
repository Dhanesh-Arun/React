import React from 'react';
import myimage from '../assets/Chestnut.png';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
import Dashboard from './Dashboard';

export default function Topbar() {
    return (
        <div className='block w-full'>
            <div className='text-white h-16 bg-primary-dark flex justify-between items-center pl-2 pr-2 md:pl-4 md:pr-4 lg:pl-6 lg:pr-6 xl:pl-8 xl:pr-8'>
                <div className='w-full xs:w-[332px] md:w-1/2 lg:w-1/3 xl:w-1/4'>
                    <IconField iconPosition="left" className='p-2 bg-customColor1 border-1 border-white rounded-s'>
                        <InputIcon className="pi pi-search text-white"></InputIcon>
                        <InputText placeholder="Search" className='bg-transparent ml-7 text-white' />
                    </IconField>
                </div>
                <div className='flex gap-5 items-center justify-end p-2 md:gap-7 md:p-4 lg:gap-10 lg:p-6 xl:gap-12 xl:p-8 w-full xs:w-[332px] md:w-1/2 lg:w-2/3 xl:w-3/4 '>
                    <i className="pi pi-spin pi-envelope w-10 h-10 rounded-full flex items-center justify-center text-lg bg-[rgb(41,43,47)] text-white font-normal md:flex xs:hidden"></i>
                    <i className="pi pi-spin pi-cog w-10 h-10 rounded-full flex items-center justify-center text-lg bg-[rgb(41,43,47)] text-white font-normal md:flex xs:hidden"></i>
                    <i className="pi pi-spin pi-bell w-10 h-10 rounded-full flex items-center justify-center text-lg bg-[rgb(41,43,47)] text-white font-normal md:flex xs:hidden"></i>
                    <img src={myimage} alt='user' className='rounded-full w-10 h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 xs:w-8 xs:h-8 xs:rounded-full' />
                </div>
            </div>
            <Dashboard></Dashboard>
        </div>
    );
}

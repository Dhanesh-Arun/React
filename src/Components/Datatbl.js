import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import '../common.css'
import img1 from '../assets/Basheer.png'
import img2 from '../assets/Kaizer.png'
import img3 from '../assets/çiçen.png'
import img4 from '../assets/Jonis.png'
import img5 from '../assets/Normohamadian.png'
import img6 from '../assets/Chestnut.png'

const imageMap = {
  'image1': img1,
  'image2': img2,
  'image3': img3,
  'image4': img4,
  'image5': img5,
  'image6': img6,
};

const DataTableImages = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    import('../datas.json')
      .then(module => setData(module.default.orders))
      .catch(error => console.error('Error importing data:', error));
  }, []);

  const imageBodyTemplate = (rowData) => {
    const imageUrl = imageMap[rowData.image];
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={rowData.name}
            style={{
              width: '50px',
              height: '50px',
              objectFit: 'cover',
              marginRight: '10px',
              borderRadius: '50%',
            }}
          />
        ) : null}
        <span>{rowData.customer}</span>
      </div>
    );
  };

  const statusBodyTemplate = (rowData) => {
    let bgColor = '';
    switch (rowData.status) {
      case 'Delivered':
        bgColor = 'green';
        break;
      case 'Cancelled':
        bgColor = 'red';
        break;
      case 'Pending':
        bgColor = 'red';
        break;
      default:
        bgColor = 'gray';
    }
    return (
      <span
        style={{
          backgroundColor: bgColor,
          color: 'white',
          padding: '5px 10px',
          borderRadius: '20px',
        }}
      >
        {rowData.status}
      </span>
    );
  };

  const rowClassName = (rowData) => {
    return 'datatblbot';
  };

  return (
    <div className="datatable w-full p-4 bg-primary-dark rounded-lg md:p-6">
      <h1 className='text-white text-[1.5rem] font-bold'>Recent Orders</h1>
      <DataTable
        value={data}
        className="p-datatable-customers custom-datatable"
        rowClassName={rowClassName}
      >
        <Column
          body={imageBodyTemplate}
          header="Customer"
          className="datatblcol"
        />
        <Column
          field="orderno"
          header="Order No."
          className="datatblcol2"
        />
        <Column
          field="amount"
          header="Amount"
          className="datatblcol2"
        />
        <Column
          field="status"
          header="Status"
          body={statusBodyTemplate}
          className="datatblcolStatus"
        />
      </DataTable>
    </div>
  );
};

export default DataTableImages;
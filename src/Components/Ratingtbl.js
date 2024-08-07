import React, { useState, useEffect } from 'react';
import { Rating } from 'primereact/rating';
import '../common.css';
import 'simplebar-react/dist/simplebar.min.css';
import SimpleBar from 'simplebar-react';
import data from '../datas.json';
import img1 from '../assets/Basheer.png'
import img2 from '../assets/Kaizer.png'
import img3 from '../assets/çiçen.png'
import img4 from '../assets/Jonis.png'
import img5 from '../assets/Normohamadian.png'
import img6 from '../assets/Chestnut.png'
import img7 from '../assets/Dumlao.png'
import img8 from '../assets/Wiesehofer.png'
import img9 from '../assets/Chouak.png'
import img10 from '../assets/Chestnut.png'

const imageMap = {
  'image1': img1,
  'image2': img2,
  'image3': img3,
  'image4': img4,
  'image5': img5,
  'image6': img6,
  'image7': img7,
  'image8': img8,
  'image9': img9,
  'image10': img10,
};

const Ratingtbl = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (data.products) {
      setProducts(data.products);
    }
  }, []);

  return (
    <div className="w-full p-4 bg-primary-dark rounded-lg md:p-6">
      <p className='text-white text-[1.5rem] font-bold p-4'>Customer's Feedback</p>
      <SimpleBar className='h-[520px] md:h-[520px]'>
        {products.map((product, index) => (
          <div key={index} className="w-full p-4 md:p-6">
            <div className='flex p-2 md:p-4'>
              <img src={imageMap[product.image]} alt={product.name} className="review-image" style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' ,borderRadius: '50%'}}/>
              <div className='flex justify-center items-center font-bold text-[1.2rem] text-white'>
                <p>{product.name}</p>
              </div>
            </div>
            <div className="w-full p-2 md:p-4">
              <Rating value={product.rating} readOnly stars={5} cancel={false} className='p-2'/>
              <p className='flex flex-row flex-wrap w-full p-2 text-white'>{product.review}</p>
            </div>
            <hr></hr>
          </div>
        ))}
      </SimpleBar>
    </div>
  );
};

export default Ratingtbl;
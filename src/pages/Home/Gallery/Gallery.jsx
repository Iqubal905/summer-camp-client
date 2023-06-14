import React from 'react';
import img1 from '../../../assets/slider/b-5.jpg'
import img2 from '../../../assets/slider/s-5.jpg'
import img3 from '../../../assets/slider/b-5.jpg'
import img4 from '../../../assets/slider/ba-3.jpg'
import img5 from '../../../assets/slider/ba-4.jpg'
import img6 from '../../../assets/slider/ba-6.jpg'
import img7 from '../../../assets/slider/g-1.jpg'
import img8 from '../../../assets/slider/ba-8.jpg'
import img9 from '../../../assets/slider/download (1).jpg'
import img10 from '../../../assets/slider/g-2.jpg'
import img11 from '../../../assets/slider/ba-3.jpg'
import img12 from '../../../assets/slider/g-3.jpg'
import img13 from '../../../assets/slider/g-4.jpg'
import img14 from '../../../assets/slider/g-5.jpg'
import img15 from '../../../assets/slider/g6.jpg'
import img16 from '../../../assets/slider/g-2.jpg'
import { Fade } from 'react-awesome-reveal';
const Gallery = () => {
    return (
       <div>

<div className='text-center pt-16'>
<div className='divider p-0 m-0'></div>
            <h3 className="text-3xl uppercase ">Gallery</h3>
            <p className=" text-slate-400"> See our capm picture </p>
            <div className='divider mt-0 mb-6'></div>
            </div>


        
        <div  className='grid  grid-cols-4 gap-4'>

          <Fade cascade>
          <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </Fade>
          <Fade cascade>
          <img src={img5} alt="" />
            <img src={img6} alt="" />
            <img src={img7} alt="" />
            <img src={img8} alt="" />
          </Fade>
           <Fade cascade>
           <img src={img16} alt="" />
            <img src={img9} alt="" />
            <img src={img10} alt="" />
            <img src={img11} alt="" />
           </Fade>
          <Fade cascade>
          <img src={img12} alt="" />
            <img src={img13} alt="" />
            <img src={img14} alt="" />
            <img src={img16} alt="" />
          </Fade>
           
        </div>
        <div className='divider p-2 m-0'></div>
       </div>
    );
};

export default Gallery;
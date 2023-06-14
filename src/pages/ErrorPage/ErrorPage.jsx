import React from 'react';
import { Link } from 'react-router-dom';
import img '../../assets/slider/err.jpg'
const ErrorPage = () => {
    return (
        <div className='grid justify-center'>
           <img src={img} alt="" />
         
           <Link  to='/'  className='pl-32 pt-6'> <button className="btn btn-outline btn-accent">Go to Home</button>
          </Link>

        </div>
    );
};

export default ErrorPage;
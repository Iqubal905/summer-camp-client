import React from 'react';

const ClassCard = ({approveClass}) => {
    const {className, instructorEmail, instructorName, availableSeats, price, image} = approveClass 
   console.log(approveClass);
    return (
        <div className=''>
           <div className="card card-compact w-96 bg-base-100 shadow-xl ">

  <figure><img src={image} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title"><span className='font-bold pr-2'> Class Name:</span>{className}</h2>
    <p className='text-xl'> <span className=' font-bold pr-2'>Instructor Name:</span>{instructorName}</p>
    <p className='text-xl'> <span className=' font-bold pr-2'>Instructor Email:</span>{instructorEmail}</p>
    <p className='text-xl'> <span className=' font-bold pr-2'>Price:</span>${price}</p>
    <p className='text-xl'><span className='font-bold pr-2'>Available Seats:</span>{availableSeats}</p>
   
  </div>
</div>
        </div>
    );
};

export default ClassCard;
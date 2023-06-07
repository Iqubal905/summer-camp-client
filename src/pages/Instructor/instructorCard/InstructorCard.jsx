import React from 'react';

const InstructorCard = ({instructor}) => {
    const {name, email, photoUrl, classesTaken} = instructor 
    console.log(name)
    return (
        <div className=''>
           <div className="card card-compact w-96 bg-base-100 shadow-xl ">

  <figure><img src={photoUrl} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title"><span className='font-bold pr-2'>Name:</span>{name}</h2>
    <p className='text-xl'> <span className=' font-bold pr-2'>Email:</span>{email}</p>
    <p className='text-xl'><span className='font-bold pr-2'>Taken Class:</span>{classesTaken}</p>
   
  </div>
</div>
        </div>
    );
};

export default InstructorCard;
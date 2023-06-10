import React from 'react';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../provider/AuthProvider';

const ClassCard = ({approveClass}) => {
    const {user} =useContext(AuthContext)
    const {className,  instructorName, availableSeats, price, image} = approveClass 
   console.log(approveClass);

   const newBooked = {className, instructorName, email:user.email, availableSeats: parseFloat(availableSeats), price: parseFloat(price), image}
   console.log(newBooked);


const handlebooked = () =>{

    fetch('http://localhost:5000/booked', {
        method: 'POST', 
        headers: {
            'content-type': 'application/json'
        }, 
        body: JSON.stringify(newBooked)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
            Swal.fire('Class successfully added')
        }
    })
}





    return (
        <div className=''>
           <div className="card card-compact w-96 bg-base-100 shadow-xl ">

  <figure><img src={image} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title"><span className='font-bold pr-2'> Class Name:</span>{className}</h2>
    <p className='text-xl'> <span className=' font-bold pr-2'>Instructor Name:</span>{instructorName}</p>
    <p className='text-xl'> <span className=' font-bold pr-2'>Price:</span>${price}</p>
    <p className='text-xl'><span className='font-bold pr-2'>Available Seats:</span>{availableSeats}</p>
    <button onClick={()=>handlebooked()} className="btn btn-outline btn-success btn-sm">Select</button>
  </div>
</div>
        </div>
    );
};

export default ClassCard;
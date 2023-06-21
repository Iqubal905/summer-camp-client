import React, { useContext } from 'react';
import useAdmin from '../../../hooks/useAdmin';
import useInstructorr from '../../../hooks/useInstructorr';
import { AuthContext } from '../../../provider/AuthProvider';
import { Link } from 'react-router-dom';

const ClassPartCard = ({eachClass}) => {

    
    const {user} =useContext(AuthContext)
    
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructorr()


console.log( isAdmin, isInstructor);
    const {className,  instructorName, availableSeats, price, image} = eachClass 

   console.log(eachClass);

   const newBooked = {className, instructorName, email:user?.email, availableSeats: parseFloat(availableSeats), price: parseFloat(price), image}
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
        <div className="card center card-compact w-96 bg-base-100 shadow-xl"   style={{ backgroundColor: availableSeats == 0 ? 'red' : 'none' }}>

  <figure><img src={image} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title"><span className='font-bold pr-2'> Class Name:</span>{className}</h2>
    <p className='text-xl'> <span className=' font-bold pr-2'>Instructor Name:</span>{instructorName}</p>
    <p className='text-xl'> <span className=' font-bold pr-2'>Price:</span>${price}</p>
    <p className='text-xl'><span className='font-bold pr-2'>Available Seats:</span>{availableSeats}</p>



   {
    user?
    <button onClick={()=>handlebooked()} className="btn btn-outline btn-success btn-sm"   disabled={isAdmin || isInstructor || availableSeats == 0 } >Select</button> :
  <Link className='btn btn-outline btn-success btn-sm' to='/login'><button className="">Select</button></Link>
    
   }
  </div>
</div>
    );
};

export default ClassPartCard;
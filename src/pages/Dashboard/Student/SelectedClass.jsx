import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const SelectedClass = () => {

  const {user} =useContext(AuthContext)

//     const {data: selectClasses = [], refetch} = useQuery(['selectClasses'], async() => {
//         const res =  await fetch('http://localhost:5000/mybooked')
//         return res.json()
//     })
   
// console.log(selectClasses);

 const token = localStorage.getItem('access-token')
 
  const { refetch, data: selectClasses = [] } = useQuery({
      queryKey: ['mybooked', user?.email],
      
      queryFn: async () => {
          const res = await fetch(`http://localhost:5000/mybooked?email=${user?.email}
          `
          , { headers:{
                 authorization:`bearer ${token}`
              }
          }
          ) 
          return res.json();
        },

    })
  


console.log(selectClasses);






const handleDelete = () =>{
     
}




    return (
        <div>
             <div>
        <h2 className="text-4xl font-bold text-center "> All Selected  Class : {selectClasses.length}</h2>
        <div className="divider"></div> 
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className=" text-sm  bg-slate-800 text-slate-200">
                <th>No</th>
  
                <th>Image</th>
                <th>Class Name</th>
                <th>Instructor <br /> Name</th>
               
                <th>Price</th>
                <th>
                  Available <br /> seats
                </th>
               
                
                <th>Payment</th>
                <th>Delete</th>
               
              </tr>
            </thead>
            <tbody>
              
  
  {



      selectClasses?.map((selectClass, index) =>
      <tr key={selectClass._id} >

            <td className=" text-lg ">{index + 1}</td>
             <td>
              <div className="mask mask-squircle   w-24 h-12">
                <img
                  src={selectClass.image}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </td>
          <td>{selectClass.className}</td>
          <td>{selectClass.instructorName}</td>
          <td>${selectClass.price}</td>
            <td>{selectClass.availableSeats}</td>
          
           
          {/* <td><Link to='/dashboard/payment'> pay test</Link></td> */}
        <td><Link to={`/dashboard/payment?value=${selectClass.price}&id=${selectClass._id}&name=${selectClass.className}`}><button  className="btn btn-success">Pay</button></Link></td>
        <td><button onClick={() =>handleDelete(selectClass)} className="btn btn-warning">Delete</button></td>

    
          </tr>
  )
  }
  
            </tbody>
        
          </table>
        </div>
      </div>
        </div>
    );
};

export default SelectedClass;
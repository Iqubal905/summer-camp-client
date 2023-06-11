import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../provider/AuthProvider';

const EnrolledClass = () => {

const {user} = useContext(AuthContext)

    const {data: payments = [], refetch} = useQuery(['payment'], async() => {
        const res =  await fetch('http://localhost:5000/payment')
        return res.json()
    })


    const myPaymentsClass = payments.filter((payment) => payment?.email === user?.email);
  
console.log(myPaymentsClass);



    return (
        <div>
            <div>
        <h2 className="text-4xl font-bold text-center "> All Payment  Class : {myPaymentsClass.length}</h2>
        <div className="divider"></div> 
        <div className="overflow-x-auto">
          <table className="table bg-slate-500 text-white">
            {/* head */}
            <thead>
              <tr className=" text-sm  bg-slate-800 text-slate-200">
                <th>No</th>
                <th>Class Name</th>
               <th>Price</th>
               <th>Transaction Id</th>
               <th>Date</th>
                </tr>
            </thead>
            <tbody>
              
  
  {



myPaymentsClass?.map((eachSelectClass, index) =>
      <tr key={eachSelectClass._id} >

            <td className=" text-lg ">{index + 1}</td>
          <td>{eachSelectClass.className}</td>
          <td>{eachSelectClass.price}</td>
          <td>${eachSelectClass.transactionId}</td>
          <td>${eachSelectClass.date}</td>
            
          
           
        
    
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

export default EnrolledClass;
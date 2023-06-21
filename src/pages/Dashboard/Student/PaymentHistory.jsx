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
        <h2 className="text-4xl font-bold text-center ">  Payment  history : {myPaymentsClass.length}</h2>
        <div className="divider"></div> 
        <div className="overflow-x-auto">
        {



myPaymentsClass?.map((eachSelectClass, index) =>
      <tr key={eachSelectClass._id} >

            <td className=" text-lg ">({index + 1})</td>
      
          <td>${eachSelectClass.price}</td>
          <td>Id- {eachSelectClass.transactionId}</td>
          <td>Date- {eachSelectClass.date}</td>
            
          </tr>
  )
  }
  
        </div>
      </div>
        </div>
    );
};

export default EnrolledClass;
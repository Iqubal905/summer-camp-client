import React from 'react';
import { useQuery } from 'react-query';

const SelectedClass = () => {

    const {data: selectClasses = [], refetch} = useQuery(['selectClasses'], async() => {
        const res =  await fetch('http://localhost:5000/mybooked')
        return res.json()
    })

console.log(selectClasses);


 

const handleDelete = () =>{
     
}

const handlePay = () =>{
       
}



    return (
        <div>
             <div>
        <h2 className="text-4xl font-bold text-center "> Total Class : {selectClasses.length}</h2>
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
                <th>Instructor Email</th>
                <th>Price</th>
                <th>
                  Available <br /> seats
                </th>
                <th>Status</th>
                <th>Approve</th>
                <th>Deny</th>
                <th>Send <br />Feedback</th>
              </tr>
            </thead>
            <tbody>
  
  {
      selectClasses.map((selectClass, index) =>
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
              <td>{selectClass.instructorEmail}</td>
                <td>${selectClass.price}</td>
                <td>{selectClass.availableSeats}</td>
                <td>{selectClass.status}</td>

            <td><button  onClick={() =>handleDelete(selectClass)} className="btn btn-success">Approve</button></td>
            <td><button onClick={() =>handlePay(selectClass)} className="btn btn-warning">Deny</button></td>

            <td><button className="btn btn-info">Feedback</button></td>
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
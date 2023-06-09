import React, {  useEffect, useState } from 'react';



const ManageClasses = () => {
  
    const [classesData, setClassesData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      fetch("http://localhost:5000/myclass")
        .then((res) => res.json())
        .then((data) => {
          setClassesData(data);
          console.log(data);
          setLoading(false);
        });
    }, []);
  
    



    return (
        <div>
        <h2 className="text-4xl font-bold text-center "> Total Class : {classesData.length}</h2>
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
      classesData.map((classData, index) =>
          <tr key={classData._id} >
  
                <td className=" text-lg ">{index + 1}</td>
                 <td>
                  <div className="mask mask-squircle   w-24 h-12">
                    <img
                      src={classData.image}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </td>
              <td>{classData.className}</td>
              <td>{classData.instructorName}</td>
              <td>{classData.instructorEmail}</td>
                <td>${classData.price}</td>
                <td>{classData.availableSeats}</td>
                <td>{classData.status}</td>
                <td><button className="btn btn-success">Approve</button></td>
                <td><button className="btn btn-warning">Deny</button></td>
                <td><button className="btn btn-info">Feedback</button></td>
              </tr>
      )
  }
  
  
  
  
  
            </tbody>
        
          </table>
        </div>
      </div>
    );
};

export default ManageClasses;
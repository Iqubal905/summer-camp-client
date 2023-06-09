import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const MyClass = () => {
  const { user } = useContext(AuthContext);
  const [classesData, setClassesData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/myclass")
      .then((res) => res.json())
      .then((data) => {
        setClassesData(data);
        setLoading(false);
      });
  }, []);

  const myDatas = classesData.filter((classData) => classData.instructorEmail === user?.email);

  return (
    <div>
      <h2 className="text-4xl font-bold text-center "> My Total Class : {myDatas.length}</h2>
      <div className="divider"></div> 
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className=" text-sm  bg-slate-800 text-slate-200">
              <th>No</th>

              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>
                Available <br /> seats
              </th>
              <th>
                Enrolled <br /> seats
              </th>
              <th>Status</th>
              <th>Update</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>

{
    myDatas.map((myData, index) =>
        <tr key={myData._id} >

              <td className=" text-lg ">{index + 1}</td>
               <td>
                <div className="mask mask-squircle   w-24 h-12">
                  <img
                    src={myData.image}
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </td>
            <td>{myData.className}</td>
              <td>${myData.price}</td>
              <td>{myData.availableSeats}</td>
              <td>00</td>
              <td>{myData.status}</td>
              <td><button className="btn btn-success">Update</button></td>
              <td><button className="btn btn-warning">Feedback</button></td>
            </tr>
    )
}





          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default MyClass;

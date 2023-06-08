import React from 'react';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';


const ManageUsers = () => {

    const {data: users = [], refetch} = useQuery(['users'], async() => {
        const res =  await fetch('http://localhost:5000/users')
        return res.json()
    })

  
const handleMakeAdmin = user =>{
   fetch(`http://localhost:5000/users/admin/${user._id}`,{
    method: 'PATCH'
})
.then(res => res.json())
.then(data => {
    if(data.modifiedCount){
        refetch()
    Swal.fire({
         position: 'top-end',
         icon: 'success',
         title: `${user.name} is Admin now!`,
         showConfirmButton: false,
         timer: 1500
})

    }
})
}

const handleMakeInstructor = user =>{
    fetch(`http://localhost:5000/users/instructor/${user._id}`,{
     method: 'PATCH'
 })
 .then(res => res.json())
 .then(data => {
     if(data.modifiedCount){
         refetch()
     Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${user.name} is Instructor now!`,
          showConfirmButton: false,
          timer: 1500
 })
 
     }
 })
 }



    return (
        <div>
            <h2 className='text-3xl'>Total User :{users.length}</h2>

            <div className="overflow-x-auto">
  <table className="table">
    
    <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Email</th>
        <th>Make Admin</th>
        <th>Make Instructor</th>
      </tr>
    </thead>
    <tbody>
     {
        users.map((user, index) =>  <tr key={user._id}>
        <th>{index + 1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role === 'Admin' ? 'Admin' : 
        <button onClick={() =>handleMakeAdmin(user)}>Click</button>
        }</td>
        <td>{user.role === 'Instructor' ? 'Instructor' : 
        <button onClick={() =>handleMakeInstructor(user)}>Click</button>
        }</td>
      </tr>)
     }
     
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageUsers;
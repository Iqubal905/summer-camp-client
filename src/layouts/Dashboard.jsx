import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructorr from '../hooks/useInstructorr';

const Dashboard = () => {


  const [isAdmin] = useAdmin()
  const [isInstructor] = useInstructorr()

console.log(isAdmin,isInstructor );


    return (
        <div>



<div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
  
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}




{
  isAdmin ?( <div>
   <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/dashboard/manageUser'>Manage Users</NavLink></li>
           <li><NavLink to='/dashboard/manageClass'>Manage Classes</NavLink></li>
  </div>
  )  : isInstructor ? (
    <div>
          <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/dashboard/addClass'>Add a Class</NavLink></li>
           <li><NavLink to='/dashboard/myClass'>My Classes</NavLink></li>
    </div>
  )  : (
    <div>
<li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/dashboard/selectClass'>Selected Class</NavLink></li>
           <li><NavLink to='/dashboard/enrollClass'>Enrolled Class</NavLink></li>
    </div>
  )
}









      {/* <li><NavLink to='/dashboard'>Home</NavLink></li>
            <li><NavLink to='/dashboard/manageUser'>Manage Users</NavLink></li>
           <li><NavLink to='/dashboard/manageClass'>Manage Classes</NavLink></li>



           <li><NavLink to='/dashboard'>Home</NavLink></li>
            <li><NavLink to='/dashboard/addClass'>Add a Class</NavLink></li>
           <li><NavLink to='/dashboard/myClass'>My Classes</NavLink></li>



           <li><NavLink to='/dashboard'>Home</NavLink></li>
            <li><NavLink to='/dashboard/selectClass'>Selected Class</NavLink></li>
           <li><NavLink to='/dashboard/enrollClass'>Enrolled Class</NavLink></li> */}

    </ul>
  
  </div>
</div>

         
        

        </div>
    );
};

export default Dashboard;
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
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
      <li><NavLink to='/dashboard'>Home</NavLink></li>
            <li><NavLink to='/dashboard/manageUser'>Manage Users</NavLink></li>
           <li><NavLink to='/dashboard/manageClass'>Manage Classes</NavLink></li>

           <li><NavLink to='/dashboard'>Home</NavLink></li>
            <li><NavLink to='/dashboard/addClass'>Add a Class</NavLink></li>
           <li><NavLink to='/dashboard/myClass'>My Classes</NavLink></li>

           <li><NavLink to='/dashboard'>Home</NavLink></li>
            <li><NavLink to='/dashboard/selectClass'>Selected Class</NavLink></li>
           <li><NavLink to='/dashboard/enrollClass'>Enrolled Class</NavLink></li>

    </ul>
  
  </div>
</div>

         
        

        </div>
    );
};

export default Dashboard;
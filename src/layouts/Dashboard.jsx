import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructorr from '../hooks/useInstructorr';
import Navbar from '../pages/shared/navbar';
import Footer from '../pages/shared/Footer';
import { FaFrownOpen, FaHome, FaUsers } from 'react-icons/fa';
import { BsFillClipboardPlusFill, BsFillBookFill, BsPlusSlashMinus, BsBookmarkCheckFill } from "react-icons/bs"

const Dashboard = () => {


  const [isAdmin] = useAdmin()
  const [isInstructor] = useInstructorr()




    return (
        <div>

<Navbar></Navbar>

<div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
  <div className="drawer-content flex flex-col mt-24 ">
  
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side pt-20">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}




{
  isAdmin ?( <div>
   <li><NavLink to='/'> <FaHome></FaHome>Home</NavLink></li>
            <li><NavLink to='/dashboard/manageUser'><FaUsers></FaUsers>Manage Users</NavLink></li>
           <li><NavLink to='/dashboard/manageClass'><BsPlusSlashMinus></BsPlusSlashMinus>Manage Classes</NavLink></li>
  </div>
  )  : isInstructor ? (
    <div>
          <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
            <li><NavLink to='/dashboard/addClass'> <BsFillClipboardPlusFill></BsFillClipboardPlusFill> Add a Class</NavLink></li>
           <li><NavLink to='/dashboard/myClass'><BsFillBookFill></BsFillBookFill>My Classes</NavLink></li>
    </div>
  )  : (
    <div>
<li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
            <li><NavLink to='/dashboard/selectClass'><BsBookmarkCheckFill></BsBookmarkCheckFill>Selected Class</NavLink></li>
           <li><NavLink to='/dashboard/enrollClass'><FaFrownOpen></FaFrownOpen>Enrolled Class</NavLink></li>
           <li><NavLink to='/dashboard/paymentHistory'><FaFrownOpen></FaFrownOpen>Payment History</NavLink></li>
          
    </div>
      )
}
   </ul>
  
  </div>
</div>

<Footer></Footer>      
        

        </div>
    );
};

export default Dashboard;
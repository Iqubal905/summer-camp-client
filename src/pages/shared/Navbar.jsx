import React, { useContext } from 'react';
import img from '../../assets/slider/logo.png'
import { Link} from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';



const Navbar = () => {




const {logOut, user} = useContext(AuthContext)



const handleLogOut = () => {
  logOut()
      .then()
      .catch(error => console.log(error));
}

const navItems = <>
   <li> <Link to='/'>Home</Link></li>
   <li> <Link to='/instructor'>Instructor</Link></li>
   <li> <Link to='/classes'>Classes</Link></li>
   <li> <Link to='/dashboard'>Dashboard</Link></li>
 {
  user?
  <li> <Link onClick={handleLogOut}>LogOut</Link></li> :
  <li> <Link to='/login'>LogIn</Link></li>   
 }
   
 
</>





    return (
        <div>
          <div className="navbar fixed z-10 bg-opacity-40  bg-slate-600  text-slate-50 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {navItems}
      </ul>
    </div>
    <div className="w-12 h-12 mt-5 ">
      <img src={img} alt="Toy Car Logo"  className='rounded-full ' />
    </div>
    <a className="btn btn-ghost normal-case text-xl">ArtCamp Hub</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navItems}
    </ul>
  </div>
  



{
  user &&
  
  <div className="navbar-end">
  
       
  <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-24 border rounded-full">
        
        <img src={user.photoURL} referrerPolicy='no-referrer' alt="" />
        </div>
      </label>
  </div>
  </div>
}

</div>  
        </div>
    );
};

export default Navbar;
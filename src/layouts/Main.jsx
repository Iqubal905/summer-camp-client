
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../pages/shared/navbar';
import Footer from '../pages/shared/Footer';

const Main = () => {

    const location = useLocation()
   const navAndFooter = location.pathname.includes('login') || location.pathname.includes('signup');

    return (
        <div >
        {/* {navAndFooter && <Navbar></Navbar>} */}
          <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
           {/* { navAndFooter &&  <Footer></Footer>} */}
        </div>
    );
};

export default Main;
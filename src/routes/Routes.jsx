import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignIUp/SignUp";
import Instructor from "../pages/Instructor/Instructor";


 export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
          {
            path: "/",
            element: <Home></Home>,
          },
          {
            path: 'instructor',
            element: <Instructor></Instructor>
          },
          {
            path: 'login',
            element: <Login></Login>
          },
          
        ],
      },
      {
        path: '/signup',
        element:<SignUp></SignUp>
      }
  ]);
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignIUp/SignUp";
import Instructor from "../pages/Instructor/Instructor";
import PrivateRouts from "./PrivateRouts";
import Dashboard from "../layouts/Dashboard";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import AddClass from "../pages/Dashboard/Instructor/AddClass";
import MyClass from "../pages/Dashboard/Instructor/MyClass";
import EnrolledClass from "../pages/Dashboard/Student/EnrolledClass";
import SelectedClass from "../pages/Dashboard/Student/SelectedClass";
import Classes from "../pages/Classes/Classes";
import Payment from "../pages/Payment/Payment";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./adminRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


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
            path: 'classes',
            element: <Classes></Classes>
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
      },
      {
        path: "dashboard",
        element: <PrivateRouts><Dashboard></Dashboard></PrivateRouts>,
        children: [
          {
            path: "manageClass",
            element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
          },
          {
            path: 'manageUser',
            element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
          },
          {
            path: 'addClass',
            element: <AddClass></AddClass>
          },
          {
            path: 'myClass',
            element: <MyClass></MyClass>
          },
          {
            path: 'payment',
            element: <Payment></Payment>
          },
          {
            path: 'selectClass',
            element: <SelectedClass></SelectedClass>
          },
          {
            path: 'enrollClass',
            element: <EnrolledClass></EnrolledClass>
          },
        ], 
      },
      {
        path:'*',
         element: <ErrorPage></ErrorPage> 
     }
  ]);
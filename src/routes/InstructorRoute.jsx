import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const InstructorRoute = ({children}) => {
    const {user, loading} =useContext(AuthContext)
    const [isInstructor, isAdminLoading]= useAdmin()
    const location = useLocation()


    if(loading || isAdminLoading){
        return <progress className='progress w-64'></progress>
       } 
       if(user && isInstructor){
        return children
       }
       return <Navigate to="/login" state={{from: location}} replace></Navigate>
    
};

export default InstructorRoute;
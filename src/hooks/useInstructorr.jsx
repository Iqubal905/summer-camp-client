import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useQuery } from 'react-query';

const useInstructorr = () => {
    const { user, loading } = useContext(AuthContext)

    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery(['isInstructor', user?.email], async () => {
      const res = await fetch(`https://summer-camp-school-server-side-pi.vercel.app/users/instructor/${user?.email}`); 
      const data = await res.json();
      console.log('is instructor', data);
      return data.Instructor;
    }, {
      enabled: !loading
    });
  
    return [isInstructor, isInstructorLoading];
};

export default useInstructorr;
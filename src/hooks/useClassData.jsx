import React from 'react';
import { useQuery } from 'react-query';

const useClassData = () => {

    const {data: classData = [], refetch} = useQuery(['classData'], async() => {
        const res =  await fetch('https://summer-camp-school-server-side-pi.vercel.app/myclass')
        return res.json()
    })
    return classData
   
};


export default useClassData;
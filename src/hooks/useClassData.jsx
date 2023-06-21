import React from 'react';
import { useQuery } from 'react-query';

const useClassData = () => {

    const {data: classData = [], refetch} = useQuery(['classData'], async() => {
        const res =  await fetch('http://localhost:5000/myclass')
        return res.json()
    })
    return classData
   
};


export default useClassData;
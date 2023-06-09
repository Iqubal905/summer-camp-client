import React from 'react';
import { useQuery } from 'react-query';
import ClassCard from './ClassCard/ClassCard';

const Classes = () => {

    const {data: allClass = [], refetch} = useQuery(['allClass'], async() => {
        const res =  await fetch('http://localhost:5000/myclass')
        return res.json()
    })


    const approveClasses = allClass.filter((eachClass) => eachClass.status === 'Approve');
  
console.log(approveClasses);

    return (
        <div>
           
            <h2 className='font-bold text-center text-3xl pt-24 pb-8  ' >Total Class</h2>
            <div className='grid grid-cols-3 gap-10 px-20'>
            
            {
 
                approveClasses.map(approveClass => <ClassCard
                 key={approveClass.id}
                 approveClass={approveClass}
                 ></ClassCard>)
             }  
            
         </div>
        </div>
    );
};

export default Classes;
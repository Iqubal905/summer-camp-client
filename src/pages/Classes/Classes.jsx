import React from 'react';
import { useQuery } from 'react-query';
import ClassCard from './ClassCard/ClassCard';
import {  Zoom } from 'react-awesome-reveal';


const Classes = () => {

    const {data: allClass = [], refetch} = useQuery(['allClass'], async() => {
        const res =  await fetch('https://summer-camp-school-server-side-pi.vercel.app/myclass')
        return res.json()
    })


    const approveClasses = allClass.filter((eachClass) => eachClass.status === 'Approve');
  
console.log(approveClasses);

    return (
        <div>

            <div className='text-center pt-24'>
            <div className='divider p-0 m-0'></div>
            <h3 className="text-3xl uppercase ">Our All Class</h3>
            <p className=" text-slate-400"> You can select your choicefull class from here </p>
            <div className='divider mt-0 mb-6'></div>
            </div>
           
          <div className='grid md:grid-cols-3 gap-10 md:px-20'>
            
        <Zoom>
            
        {
 
 approveClasses.map(approveClass => <ClassCard
  key={approveClass.id}
  approveClass={approveClass}
  ></ClassCard>)
} 
            </Zoom> 
            
         </div>
        </div>
    );
};

export default Classes;
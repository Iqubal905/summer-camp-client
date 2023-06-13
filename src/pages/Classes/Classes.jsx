import React from 'react';
import { useQuery } from 'react-query';
import ClassCard from './ClassCard/ClassCard';
import { Bounce, Fade, Rotate, Slide, Zoom } from 'react-awesome-reveal';

const Classes = () => {

    const {data: allClass = [], refetch} = useQuery(['allClass'], async() => {
        const res =  await fetch('https://summer-camp-school-server-side-pi.vercel.app/myclass')
        return res.json()
    })


    const approveClasses = allClass.filter((eachClass) => eachClass.status === 'Approve');
  
console.log(approveClasses);

    return (
        <div>
           
            <h2 className='font-bold text-center text-3xl pt-24 pb-8  ' >Total Class</h2>
            <div className='grid grid-cols-3 gap-10 px-20'>
            
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
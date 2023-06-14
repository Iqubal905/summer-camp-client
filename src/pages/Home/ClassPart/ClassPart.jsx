import React from 'react';

import { useQuery } from 'react-query';
import ClassCard from '../../Classes/ClassCard/ClassCard';
import ClassPartCard from './ClassPartCard';
import { Fade, Flip, Roll } from 'react-awesome-reveal';

const ClassPart = () => {

    
    const {data: allClasses = [], refetch} = useQuery(['allClasses'], async() => {
        const res =  await fetch('https://summer-camp-school-server-side-pi.vercel.app/myclass')
        return res.json()
        
    })

    

  const allClassSort =   allClasses.sort((a, b) => b.availableSeats - a.availableSeats)

   






    return (
        <div>
           <div className='text-center pt-6'>
           <div className='divider p-0 m-0'></div>
            <h3 className="text-3xl uppercase ">Top Class</h3>
            <p className=" text-slate-400"> Know about our top class and select  </p>
            <div className='divider mt-0 mb-6'></div>
            </div>
            <div className='grid md:grid-cols-3 gap-10 md:px-20'>
            
<Fade>


    
{
 
 allClassSort.slice(0, 6).map(eachClass => <ClassPartCard
 key={eachClass.id}
 eachClass={eachClass}
 ></ClassPartCard>)
}  
</Fade>




        </div>
        </div>
    );
};

export default ClassPart;
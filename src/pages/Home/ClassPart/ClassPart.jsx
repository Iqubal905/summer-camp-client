import React from 'react';

import { useQuery } from 'react-query';
import ClassCard from '../../Classes/ClassCard/ClassCard';
import ClassPartCard from './ClassPartCard';
import { Fade, Flip, Roll } from 'react-awesome-reveal';

const ClassPart = () => {

    
    const {data: allClasses = [], refetch} = useQuery(['allClasses'], async() => {
        const res =  await fetch('http://localhost:5000/myclass')
        return res.json()
        
    })

    

  const allClassSort =   allClasses.sort((a, b) => b.availableSeats - a.availableSeats)

   console.log(allClassSort);






    return (
        <div>
           <h2 className='font-bold text-center text-3xl pt-24 pb-8  ' >Total Class</h2>
            <div className='grid grid-cols-3 gap-10 px-20'>
            
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
import React, { useEffect, useState } from 'react';
import InstructorCard from './instructorCard/InstructorCard';
import { Fade } from 'react-awesome-reveal';

const Instructor = () => {

      const [instructors, setInstructors] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://summer-camp-school-server-side-pi.vercel.app/instructor')
            .then(res => res.json())
            .then(data => {
                setInstructors(data)
                console.log(data)
                setLoading(false);
            });
    }, [])
    return (
       <div>
        <h2 className='font-bold text-center text-3xl pt-24 pb-8  ' >All Instructor</h2>
         <div className='grid grid-cols-3 gap-10 px-20'>
            
          <Fade>
          {
 
 instructors.map(instructor => <InstructorCard
 key={instructor.id}
 instructor={instructor}
 ></InstructorCard>)
}
            </Fade>  
            
         </div>
       </div>
    );
};

export default Instructor;
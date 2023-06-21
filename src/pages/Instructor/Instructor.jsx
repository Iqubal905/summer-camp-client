import React, { useEffect, useState } from 'react';
import InstructorCard from './instructorCard/InstructorCard';
import { Fade, Zoom } from 'react-awesome-reveal';

const Instructor = () => {

      const [instructors, setInstructors] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/instructor')
            .then(res => res.json())
            .then(data => {
                setInstructors(data)
                console.log(data)
                setLoading(false);
            });
    }, [])
    return (
       <div>
      
      <div className='text-center pt-24'>
            <h3 className="text-3xl uppercase ">Our All Instructor</h3>
            <p className=" text-slate-400"> You can know about our instructor </p>
            <div className='divider mt-0 mb-6'></div>
            </div>
         <div className='grid justify-items-center md:grid-cols-3 gap-10 md:px-20'>
            
          <Zoom>
          {
 
 instructors.map(instructor => <InstructorCard
 key={instructor.id}
 instructor={instructor}
 ></InstructorCard>)
}
            </Zoom>  
            
         </div>
       </div>
    );
};

export default Instructor;
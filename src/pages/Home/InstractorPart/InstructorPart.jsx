import React, { useEffect, useState } from 'react';
import InstructorCard from '../../Instructor/instructorCard/InstructorCard';
import { Fade } from 'react-awesome-reveal';

const InstructorPart = () => {

    const [instructors, setInstructors] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/instructor')
            .then(res => res.json())
            .then(data => {
                setInstructors(data)
               
                setLoading(false);
              
            });
    }, [])


    return (
        <div>
                <div className='text-center  pt-16'>
                <div className='divider p-0 m-0'></div>
            <h3 className="text-3xl uppercase ">Popular Instructor</h3>
            <p className=" text-slate-400"> You can know about our popular instructor</p>
            <div className='divider mt-0 mb-6'></div>
            </div>
            <div className='grid md:grid-cols-3 gap-10 md:px-20'>
            
           <Fade>

           {
 
 instructors.slice(0, 6).map(instructor => <InstructorCard
 key={instructor.id}
 instructor={instructor}
 ></InstructorCard>)
}  
           </Fade>
            
         </div>



        </div>
    );
};

export default InstructorPart;
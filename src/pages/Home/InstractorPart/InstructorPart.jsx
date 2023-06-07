import React, { useEffect, useState } from 'react';
import InstructorCard from '../../Instructor/instructorCard/InstructorCard';

const InstructorPart = () => {

    const [instructors, setInstructors] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/instructor')
            .then(res => res.json())
            .then(data => {
                setInstructors(data)
                console.log(data)
                setLoading(false);
                console.log(instructors);
            });
    }, [])


    return (
        <div>
            
            <div className='grid grid-cols-3 gap-10 px-20'>
            
            {
 
                 instructors.slice(0, 6).map(instructor => <InstructorCard
                 key={instructor.id}
                 instructor={instructor}
                 ></InstructorCard>)
             }  
            
         </div>



        </div>
    );
};

export default InstructorPart;
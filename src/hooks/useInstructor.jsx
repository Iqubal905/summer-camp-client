import React, { useEffect, useState } from 'react';

const useInstructor = () => {

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

    return [loading, instructors]
};

export default useInstructor;
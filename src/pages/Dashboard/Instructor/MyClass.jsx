import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';

const MyClass = () => {
    const {user} = useContext(AuthContext)
    const [classesData, setClassesData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/myclass')
            .then(res => res.json())
            .then(data => {
                
                setClassesData(data)
                setLoading(false);
              
            });
    }, [])

    const popular = classesData.filter(classData => classData.instructorEmail === user.email);

    return (
        <div>
              <h2 className='text-4xl'> My class : {popular.length}</h2>

        </div>
    );
};

export default MyClass;
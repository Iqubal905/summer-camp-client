import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const GoogleLogin = () => {
    const navigate = useNavigate();

    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    
    const {logInWithGoogle} = useContext(AuthContext)


    const handleGoogleLogIn =()=>{
        logInWithGoogle()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);

            Swal.fire({
                title: 'Login Successful.',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });

            navigate(from, { replace: true })
        })
        .catch(error =>{
            console.log('Error', error.message);
        })
    }

    return (
        <div className='text-center'>
           <button onClick={handleGoogleLogIn} className="btn btn-circle btn-secondary">
              <FaGoogle></FaGoogle>
            </button> 
        </div>
    );
};

export default GoogleLogin;
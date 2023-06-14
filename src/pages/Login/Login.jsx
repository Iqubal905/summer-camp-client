import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import img from '../../assets/slider/sigi in.webp'
import { AuthContext } from '../../provider/AuthProvider';
import GoogleLogin from '../shared/GoogleLogin/GoogleLogin';
import Swal from 'sweetalert2';

const Login = () => {
    const [err, setError]= useState('')
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate();

    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, formState: { errors } } = useForm();

const handleLogIn = data =>{
    setError('')
    console.log(data);
    signIn(data.email, data.password)
            .then(result =>{
                const user = result.user;
                console.log(user);
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
                setError('Please provide correct password & email')
                

            })
           
    }



    return (
        <div>
           

        <div className="hero min-h-screen bg-base-200 pt-12">
        
          <div className="hero-content ">
          
           <div className='grid grid-cols-2'>
           <div className="flex justify-items-center justify-self-center lg:text-left">
          
             <img src={img} alt="" />
            </div>
        
            <div className="card   flex w-full max-w-sm shadow-2xl bg-base-100 py-14 m-0">
            <h1 className="text-3xl font-bold text-center ">Log In now!</h1>
              <div className="card-body py-0 pl-12">
             <form onSubmit={handleSubmit(handleLogIn)}>
   
          <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email", { required: true })} name="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
          </div>
          <div className="form-control w-full ">
         
          <label className="label">
            <span className="label-text">Password</span>
          </label>
         
          <input type="password" {...register("password", { required: true })} name="password" placeholder="PassWord" className="input input-bordered w-full max-w-xs" />
          
          </div>
          <p className=' text-red-500 '>{err}</p>
          
         
         
         
          <div className="form-control mt-6">
          <input  className="btn btn-outline btn-primary" type="submit" />
                 
                </div>
                
            </form>
           
            <p><small>If you are new! Please  <Link className='underline text-blue-600' to='/signUp'>SignUp</Link></small></p>
              <div className='divider'></div>
              <GoogleLogin></GoogleLogin>
              </div>
            </div>
           </div>
          </div>
        </div>
                </div>
    );
};

export default Login;
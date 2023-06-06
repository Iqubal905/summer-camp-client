import React from 'react';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();


    
    const onSubmit = data => console.log(data);






    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">What is your name?</span>
  </label>
  <input type="text" {...register("name", { required: true })} name="name" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  </div>
  <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">What is your name?</span>
  </label>
  <input type="text" {...register("photoUrl", { required: true })} name="photoUrl" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  </div>
  <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">What is your name?</span>
  </label>
  <input type="text" {...register("email", { required: true })} name="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  </div>
  <input type="submit" />
    </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;
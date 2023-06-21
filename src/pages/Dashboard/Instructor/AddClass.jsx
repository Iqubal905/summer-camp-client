import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../provider/AuthProvider';


const img_hosting_token=import.meta.env.VITE_image_upload_token
const AddClass = () => {
const {user} = useContext(AuthContext)
console.log(user);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
   const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {


const formData = new FormData()
formData.append('image', data.image[0])

  fetch(img_hosting_url, {
    method:'POST',
    body: formData
  })
  .then(res => res.json())
  .then(imgResponse => {
    if(imgResponse.success){
      const imgUrl = imgResponse.data.display_url
      const {className, instructorName, instructorEmail, availableSeats, price} =data
      const newItem = {className, instructorName, instructorEmail, enrollSeats: parseFloat(0), availableSeats: parseFloat(availableSeats), price: parseFloat(price), image:imgUrl, status:'Pending'}
      console.log(newItem);

      fetch('http://localhost:5000/class', {
        method: 'POST', 
        headers: {
            'content-type': 'application/json'
        }, 
        body: JSON.stringify(newItem)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
          reset()
            Swal.fire('Class successfully added')
        }
    })
    }
  })
    }


    return (
      <div className='md:pl-60'>
          <div className='card   flex w-full max-w-sm shadow-2xl bg-base-100 '>
            <h2 className='text-4xl text-center'>Add Class</h2>
           
            <form onSubmit={handleSubmit(onSubmit)} className='w-96 p-6'>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Class Name*</span>
          </label>
          <input
            type="text"
            placeholder="Class Name"
            {...register("className", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Instructor Name*</span>
          </label>
          <input
            value={`${user?.displayName}`}
            type="text"
            placeholder="instructorName"
            {...register("instructorName", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Instructor Email*</span>
          </label>
          <input
            type="text"
            placeholder="Instructor Email"
            value={`${user?.email}`}
            {...register("instructorEmail", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="flex my-4">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Available seats*</span>
            </label>
            <input
              type="number"
              {...register("availableSeats", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ml-4">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Price"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Class Image*</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full "
          />
        </div>
        <input className="btn btn-sm mt-4  ml-28 btn-outline" type="submit" value="Add Item" />
      </form>

        </div>
      </div>
    );
};

export default AddClass;
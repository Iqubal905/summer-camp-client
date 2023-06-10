import React from 'react';
import CheckOutFrom from './CheckOutFrom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery } from 'react-query';
import { useLocation, useParams } from 'react-router-dom';



const stripePromise =loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {


//     const {data: selectClasses = [], refetch} = useQuery(['selectClasses'], async() => {
//         const res =  await fetch('http://localhost:5000/mybooked')
//         return res.json()
//     })

// console.log(selectClasses);


const location = useLocation();
const queryParams = new URLSearchParams(location.search);
const value = queryParams.get('value');

console.log(value);
const price = value

    return (
        <div className='w-96'>
            <h2 className='text-3xl'> Payment</h2>
            <Elements  stripe={stripePromise}>
                
            <CheckOutFrom price={price}></CheckOutFrom>
            </Elements>
        </div>
    );
};

export default Payment;
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../provider/AuthProvider';

const CheckOutFrom = ({price}) => {
    const stripe = useStripe()
    const elements = useElements()
    const [clientSecret, setClientSecret] = useState(' ')
    const [cardError, setCardError] = useState()
    const {user} =useContext(AuthContext)

console.log(price);




useEffect(() => {
  console.log(price);
  if (price > 0) {
  // axiosSecure.post('/create-payment-intent', { price })
  //     .then(res => {
  //         console.log(res.data.clientSecret)
  //         setClientSecret(res.data.clientSecret);
  //     })


fetch('http://localhost:5000/create-payment-intent', {
        method: 'POST', 
        headers: {
            'content-type': 'application/json'
        }, 
        body: JSON.stringify(price)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
       
    })



    }
}, [])


const handleSubmit = async (event) => {
    event.preventDefault();

if(!stripe || !elements) {
    return
}

const card = elements.getElement(CardElement)
  if(card === null){
    return
  }
const {error, paymentMethod} = await stripe.createPaymentMethod({
    type:'card',
    card
}) 
if(error){
    console.log('err', error);
    setCardError(error.message)
}
else{
    setCardError('')
    console.log('payment method', paymentMethod);
}


const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
  clientSecret,
  {
      payment_method: {
          card: card,
          billing_details: {
              email: user?.email || 'unknown',
              name: user?.displayName || 'anonymous'
          },
      },
  },
);

if (confirmError) {
  console.log(confirmError);
}

console.log('payment intent', paymentIntent)





}





    return (
        <div>
            <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn btn-primary btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret }>
        Pay
      </button>
      </form>
      {cardError && <p className='text-red-400'>{cardError}</p>
      }
        </div>
    );
};

export default CheckOutFrom;
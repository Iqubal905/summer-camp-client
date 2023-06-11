import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure ";

     
const CheckoutForm = ({priceId}) => {
    const stripe =useStripe()
    const elements=useElements()
    const {user} = useAuth()
    const [axiosSecure] = useAxiosSecure()
  const [cardError, setCardError] = useState('')
 const [clientSecret, setClientSecret] = useState('')
 const [processing, setProcessing] = useState(false);
 const [transactionId, setTransactionId] = useState('');
 console.log(priceId);
const {price, id, name} = priceId

 useEffect(() => {
      console.log(price);
      if (price > 0) {
      axiosSecure.post('/create-payment-intent', { price })
          .then(res => {
              console.log(res.data.clientSecret)
              setClientSecret(res.data.clientSecret);
          })
        }
}, [price, axiosSecure ])


const handleSubmit = async (event) => {
  event.preventDefault();

  if (!stripe || !elements) {
      return
  }

  const card = elements.getElement(CardElement);
  if (card === null) {
      return
  }

  const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card
  })

  if (error) {
      console.log('error', error)
      setCardError(error.message);
  }
  else {
      setCardError('');
     
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
  setProcessing(false)
  if (paymentIntent.status === 'succeeded') {
    setTransactionId(paymentIntent.id);

    const payment = {
      email: user?.email,
      transactionId: paymentIntent.id,
      price,
      id,
      name,
      date: new Date(),
     
  }
console.log(payment);
  axiosSecure.post('/payments', payment)
  .then(res => {
      console.log(res.data);
      // if (res.data.result.insertedId) {
      //     console.log(ok)
      // }
  })

  }
    }


//     const payment = {
//       email: user?.email,
     
//       price,
//       date: new Date(),
     
//   }
// console.log(payment);

    return (
        <div className="w-2/3 ml-12">
              <form onSubmit={handleSubmit}>
              <CardElement
        options={{
          style: {
            base: {
              fontSize: '20px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-success btn-sm mt-12" type="submit" disabled={!stripe }>
        Pay
      </button>
    </form>
    {cardError && <p className="text-red-400">{cardError}</p> }
    {transactionId && <p className="text-green-300">Transaction complete with transactionId: {transactionId}</p>}
       
        </div>
    );
};

export default CheckoutForm;
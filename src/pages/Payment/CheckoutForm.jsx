import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure ";
import Swal from "sweetalert2";
import { useQuery } from "react-query";

     
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



const {data: allClass = [], refetch} = useQuery(['allClass'], async() => {
  const res =  await fetch('http://localhost:5000/myclass')
  return res.json()
})


const approveClasses = allClass.filter((eachClass) => eachClass.status === 'Approve');

console.log(approveClasses);

const foundZeroClass = approveClasses.find((element) =>element._id == id );

console.log(foundZeroClass?.availableSeats);








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



//     const payment = {
//       email: user?.email,
//       price,
//       id,
//       name,
//       date: new Date(),
     
//   }
// console.log(payment);
// fetch('http://localhost:5000/payments', {
//   method: 'POST', 
//   headers: {
//       'content-type': 'application/json'
//   }, 
//   body: JSON.stringify(payment)
// })
// .then(res => res.json())
// .then(data => {
//   console.log(data);
//   if(data.insertedId){
//       Swal.fire('Class successfully added')


//       fetch(`http://localhost:5000/seatUpdate/${payment.id}`,{
//         method: 'PATCH'
//     })
//     .then(res => res.json())
//     .then(data => {
//         if(data.modifiedCount){
//         Swal.fire({
//              position: 'top-end',
//              icon: 'success',
//              title: 'change',
//              showConfirmButton: false,
//              timer: 1500
//     })
    
//         }
//     })

//   }







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
  // axiosSecure.post('/payments', payment)
  // .then(res => {
  //     console.log(res.data);
  //     if (res.data.result.insertedId) {
  //       Swal.fire({
  //         position: 'top-end',
  //         icon: 'success',
  //         title: 'Your payment completed',
  //         showConfirmButton: false,
  //         timer: 1500
  //       })

        
  //     }
  // })


  
fetch('http://localhost:5000/payments', {
  method: 'POST', 
  headers: {
      'content-type': 'application/json'
  }, 
  body: JSON.stringify(payment)
})
.then(res => res.json())
.then(data => {
  console.log(data);
  if(data.insertedId){
      Swal.fire(' successfully payment')


      fetch(`http://localhost:5000/seatUpdate/${payment.id}`,{
                method: 'PATCH'
            })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount){
                Swal.fire({
                     position: 'top-end',
                     icon: 'success',
                     title: 'update',
                     showConfirmButton: false,
                     timer: 1500
            })
                }
            })





  }
})




  

  }
    }



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
      {/* <button>pay</button> */}
      <button className="btn btn-success btn-sm mt-12" type="submit" disabled={!stripe || foundZeroClass?.availableSeats == 0}>
        Pay
      </button>
    </form>
    {cardError && <p className="text-red-400">{cardError}</p> }
    {transactionId && <p className="text-green-300">Transaction complete with transactionId: {transactionId}</p>}
       
        </div>
    );
};

export default CheckoutForm;
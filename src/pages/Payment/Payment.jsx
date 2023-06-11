import { loadStripe } from "@stripe/stripe-js";

import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";




const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_pk)


const Payment = () => {

   

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const price = queryParams.get('value');
    const id = queryParams.get('id');
    const name = queryParams.get('name');
    
    
    const priceId = {price, id, name}
    
       

    return (
        <div className="w-full">
           
            <h2 className="text-4xl pl-6 pb-6">Please pay</h2>
            <Elements stripe={stripePromise}>
      <CheckoutForm priceId={priceId}
      ></CheckoutForm>
    </Elements>
        </div>
    );
};

export default Payment;
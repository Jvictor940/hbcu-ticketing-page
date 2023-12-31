import React, { useState, useEffect} from "react";
// import PrevNxtButtons from "../../form_components/Buttons/PrevNxtButtons";
// import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import CheckoutCart from "./CheckoutCart";
import { useLocation } from "react-router-dom"
import "./Checkout.css";


const stripePromise = loadStripe("pk_test_51OHJxTJ7ju9CTKiIWLzNBfM9SKAolS5EeALi4wnUU7ZhLrwvNxLzQRbKTIyAmtIRiim7ZCp9juzEqtOVDyzkFu7Y00eZSUmSL0");

const Checkout = () => {
    const [clientSecret, setClientSecret] = useState("");
    const location = useLocation();
    // const navigate = useNavigate()

    // const congrats = () => {
    //     navigate('/congrats')
    // }

    // const generalAdmission = () => {
    //     navigate('/generalAdmission')
    // }

    useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      fetch("/payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }, []);
  
    const appearance = {
        theme: 'stripe',
        variables: {
          colorPrimary: '#ffa800',
        },
    };

    const options = {
      clientSecret,
      appearance,
    };

    //Extract cart and total price from location state
    const cart = location.state?.cart || [];
    const totalPrice = location.state?.totalPrice || 0;

    return(
        <div id='checkout-page' >
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            )}

            <aside>
                Checkout Info Goes Here
                <CheckoutCart cart={cart} totalPrice={totalPrice}/>
            </aside>
            {/* <PrevNxtButtons prevPage={generalAdmission} nxtPage={congrats} nextBtn='Place Order' /> */}
        </div>
    )
}

export default Checkout;
import React from "react";
import "./PaymentIndex.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import InjectedCheckoutForm from "./Paymentcomponent/CheckoutForm";
const stripePromise = loadStripe("pk_test_XNq4QkMFplHnYo6HDBFFquEq00amRgeDq1");
function PaymentIndex() {
  return (
    <div className='PaymentIndex'>
      <div className='product'>
        <div>
          {
            <Elements stripe={stripePromise}>
              <InjectedCheckoutForm />
            </Elements>
          }
        </div>
      </div>
    </div>
  );
}

export default PaymentIndex;

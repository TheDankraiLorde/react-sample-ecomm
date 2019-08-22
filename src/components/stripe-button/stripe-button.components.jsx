import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_QOJoSn0Nq12AlR7CQUQ0FU4W00xvBAsAhv'

    const onToken = token => {
        console.log(token);
        alert("Successful payment!")
    }

    return ( 
        <
            StripeCheckout
            label = "Pay Now"
            name = "Sample E-Comm App"
            billingAddress
            shippingAddress
            image=""
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton
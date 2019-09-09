import React from 'react'
import './checkout.styles.scss'
import {connect} from 'react-redux'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import {createStructuredSelector} from 'reselect'

import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selectors'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.components';


const CheckOutPage = ({cartItems,total}) => (
    <div className='checkout-page'>
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem =>
                (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                )
            )
        }
        <div className="total">
            <span>Total: ₹{total}</span>
        </div>
        <div className="test-warning">
            *Please use test credit card for payments!*
            <br/>
            4242-4242-4242-4242 Exp: 01/20 CVV: 123
        </div>
        <div>
            <StripeCheckoutButton price={total}/>
        </div>
    </div>
)

const mstp = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mstp)(CheckOutPage);
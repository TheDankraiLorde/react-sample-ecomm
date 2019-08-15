import React from 'react'
import {connect} from 'react-redux'
import CustomButton from '../custom-button/custom-button.component'
import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component'


const CartDropDown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems?
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
                :
                <div>No Items!</div>
            }
        </div>
        <CustomButton>CHECKOUT</CustomButton>
    </div>
)

const mstp=({cart: {cartItems}}) => ({
    cartItems
})

export default connect(mstp)(CartDropDown);
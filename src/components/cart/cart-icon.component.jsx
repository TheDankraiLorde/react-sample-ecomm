import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import {connect} from 'react-redux'
import {toggleCart} from '../../redux/cart/cart.actions'

const CartIcon = ({toggleCart, itemCount}) => (
    <div className="cart-icon" onClick={toggleCart}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
);

const mdtp = dispatch => ({
    toggleCart: () => dispatch(toggleCart())
})

const mstp = ({cart: {cartItems}}) => ({
    itemCount: cartItems.reduce(
        (acc, cartItem) => (acc+cartItem.quantity)
        , 0)
})

export default connect(mstp,mdtp)(CartIcon)
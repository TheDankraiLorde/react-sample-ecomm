import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import {connect} from 'react-redux'
import {cartItemCount} from '../../redux/cart/cart.selectors'
import {toggleCart} from '../../redux/cart/cart.actions'
import { createStructuredSelector } from 'reselect';

const CartIcon = ({toggleCart, itemCount}) => (
    <div className="cart-icon" onClick={toggleCart}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
);

const mdtp = dispatch => ({
    toggleCart: () => dispatch(toggleCart())
})

const mstp = createStructuredSelector({
        itemCount: cartItemCount
})

export default connect(mstp,mdtp)(CartIcon)
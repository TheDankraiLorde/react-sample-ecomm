import CartActionTypes from './cart.types'
import {addItemGrouper} from './cart.utils'
import { addItem } from './cart.actions';

const INIT = {
    hidden:true,
    cartItems: []
}

const cartRed = (state=INIT, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART:
            return {
                ...state,
                hidden: !state.hidden
            }

        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemGrouper(state.cartItems,action.payload)
            }

        default:
            return state
    }
}

export default cartRed
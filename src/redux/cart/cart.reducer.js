import CartActionTypes from './cart.types'

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
                cartItems: [...state.cartItems, action.payload]
            }

        default:
            return state
    }
}

export default cartRed
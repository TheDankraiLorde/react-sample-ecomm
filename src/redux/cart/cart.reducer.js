import CartActionTypes from './cart.types'

const INIT = {
    hidden:true
}

const cartRed = (state=INIT, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART:
            return {
                ...state,
                hidden: !state.hidden
            }

        default:
            return state
    }
}

export default cartRed
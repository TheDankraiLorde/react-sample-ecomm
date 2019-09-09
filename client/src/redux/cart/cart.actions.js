import CartActionType from './cart.types'

export const toggleCart = () => ({
    type: CartActionType.TOGGLE_CART
})

export const addItem = (item) => ({
    type: CartActionType.ADD_ITEM,
    payload: item
})

//clears all items
export const clearItem = (item) => ({
    type: CartActionType.CLEAR_ITEM,
    payload: item
})

export const removeItem = (item) => ({
    type: CartActionType.REMOVE_ITEM,
    payload: item
})

export const clearCart = () => ({
    type: CartActionType.CLEAR_CART
})
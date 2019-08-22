export const addItemGrouper = (cartItems, selItem)=> {
    const existingItems = cartItems.find(
        (cartItems) => cartItems.id === selItem.id)
    if(existingItems){
        return cartItems.map(cartItem =>
            ((cartItem.id === selItem.id)?{...cartItem, quantity: cartItem.quantity+1}
            :cartItem)
        )
    }
    else {
        return [...cartItems,{...selItem,quantity:1}]
    }
}

/*We need to know if there are any items
and then decrease by 1 or remove if there is only 1 */

export const removeItemFromCart = (cartItems, itemToRemove) => {
    const existingItem = cartItems.find(
        cartItem => cartItem.id === itemToRemove.id
    )

    if(existingItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id!==itemToRemove.id)
    }
    else
    {
        return  cartItems.map((cartItem) => 
            (cartItem.id === itemToRemove.id)
            ?
            {...cartItem,quantity: cartItem.quantity-1}:
            cartItem
            )
    }
}
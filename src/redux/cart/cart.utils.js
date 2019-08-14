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
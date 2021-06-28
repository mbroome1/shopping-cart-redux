//actions
export const addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        product: product
    }
}

export const cartTotal = (cart) => {
    return {
        type: 'CART_TOTAL',
        cart: cart
    }
}

export const removeFromCart = (id) => {
    return {
        type: 'REMOVE_FROM_CART',
        id: id
    }
}
export const incrementQty = (id) => {
    return {
        type: 'INCREMENT_QTY',
        id: id
    }
}

export const decrementQty = (id) => {
    return {
        type: 'DECREMENT_QTY',
        id: id
    }
}
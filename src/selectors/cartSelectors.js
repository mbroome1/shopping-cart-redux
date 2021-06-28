//get cart state
export const getCartSelector = (cart) => {
    return cart;
}

export const getCartCount = (cart) => {
    let count = 0;
    if (cart.length>0) {
        cart.forEach((item) => {
            count = count + Number.parseInt(item.qty);
        });
    }
    return count;
}

 export const getCartTotal = (cart) => {
    let total = 0;
    if (cart.length>0) {
      cart.forEach((item) => {
        total = total + Number.parseFloat(item.price*item.qty)
      })
    }
    return total.toFixed(2);
  }

  export const getProducts = (products) => {
    return products;
  }
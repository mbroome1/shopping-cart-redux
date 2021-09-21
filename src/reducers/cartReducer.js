const defaultState = {
    productList: [
      {
        stock: '1000',
        description: 'Business Shirt',
        price: 10.00,
        image: 'https://cdn.pixabay.com/photo/2015/10/16/13/47/premium-991221_960_720.jpg'
      },
      {
        stock: '2000',
        description: 'Dress Shirt',
        price: 12.00,
        image: 'https://cdn.pixabay.com/photo/2014/08/26/21/48/shirts-428600_960_720.jpg'

      },
      {
        stock: '3000',
        description: 'Brown Leather Belt',
        price: 15.50,
        image: 'https://cdn.pixabay.com/photo/2015/09/23/03/07/menswear-952836_960_720.jpg'
      },
      {
        stock: '4000',
        description: 'Silk Tie',
        price: 38.99,
        image: 'https://cdn.pixabay.com/photo/2017/10/13/05/26/silk-tie-2846862_960_720.jpg'
      }
      ],
      cart: []
};

const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
        case 'ADD_TO_CART':
            const cartIndex = state.cart.findIndex(item => item.stock === action.product.stock && item.size === action.product.size);
            const newCart = cartIndex > -1 
                            ? state.cart.map((item,index) => {
                            if (index === cartIndex) {
                                item.qty = item.qty + action.product.qty
                            }
                            return item
                            }) 
                            : state.cart.concat(action.product)
            return {
                ...state,
                cart: newCart
            }
          case 'REMOVE_FROM_CART':
            return {
              ...state,
                cart: state.cart.filter((item) => item.id !== action.id)

            }
          case 'INCREMENT_QTY':
             const newCartWithIncrement = state.cart.map((item)=> {
              if (item.id === action.id) {
                item.qty = (item.qty + 1)
              }
              return item
            })

            return {
              ...state,
              cart: newCartWithIncrement
            }
          case 'DECREMENT_QTY':
              const newCartWithDecrement = state.cart.map((item)=> {
                if (item.id === action.id && item.qty>1) {
                  item.qty = (item.qty - 1)
                }
                return item
              })
              return {
                ...state,
                cart: newCartWithDecrement
              }
        default:
          return state
    }
}

export default cartReducer
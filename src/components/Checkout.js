import React from 'react';
import Total from './Total';
import { connect } from 'react-redux';
import { getCartCount } from '../selectors/cartSelectors';

function Checkout(props) {

    return (
        <div>
            <h1>Checkout</h1>
            {props.cartCount === 0 ? <p>You have nothing in your cart.</p> : <p className="cart-count">Items: {props.cartCount}</p>}
            <ul>
            {
                props.cart.map((item) => {
                    return (
                        <li key={item.id} id={item.id}>
                            <span className="cart-stock">{item.stock}</span> <span className="cart-description">{item.description}</span> <span className="cart-size">{item.size}</span> <span className="cart-price">${item.price.toFixed(2)}</span>
                            <span className="cart-qty">{item.qty}</span>
                        </li>
                    )
                })
            }

            </ul>
            <Total />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        cartCount: getCartCount(state.cart)
    }
}

export default connect(mapStateToProps)(Checkout);
import React from 'react';
import Total from './Total';
import { connect } from 'react-redux';
import { getCartCount } from '../selectors/cartSelectors';

function Checkout(props) {

    return (
        <div>
            <h1>Checkout</h1>
            {props.cartCount === 0 ? <p>You have nothing in your cart.</p> : <p className="cart-count">Items: {props.cartCount}</p>}
            {
                props.cart.map((item) => {
                    return (
                       
                        <div key={item.id} id={item.id} className="cart-item-container">
                            <div className="cart-image-container">
                                <img src={item.image} alt="img" className="cart-image" />
                            </div>
                            <div className="cart-body">
                                <div className="cart-stock">{item.stock}</div> 
                                <div className="cart-description">{item.description}</div> 
                                <div className="cart-size">{item.size}</div> 
                                <div className="cart-price">${item.price.toFixed(2)}</div>
                            </div>
                            <div className="cart-controls">
                                <div className="cart-qty"><span class="cart-times">x</span> {item.qty}</div>
                            </div>
                       </div>

                    )
                })
            }

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
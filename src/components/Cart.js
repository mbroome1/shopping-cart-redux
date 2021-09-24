import React from 'react';
import { connect } from 'react-redux';
import { getCartCount } from '../selectors/cartSelectors';
import { removeFromCart, incrementQty, decrementQty } from '../actions/cartActions';

function Cart(props) {
    const handleRemoveFromCart = function(e){
        const id = e.target.parentElement.parentElement.parentElement.id;

        if (id){
            props.dispatch(removeFromCart(id));
        }
    }
    const handleIncrementQty = function(e){
        const id = e.target.parentElement.parentElement.parentElement.id;
        if (id) {
            props.dispatch(incrementQty(id));
        }
    }
    const handleDecrementQty = function(e){
        const id = e.target.parentElement.parentElement.parentElement.id;
        if (id) {
            props.dispatch(decrementQty(id));
        }
    }
    return (
        <div>
            <h1>Cart</h1>
            {props.cartCount === 0 ? <p>You have nothing in your cart.</p> : <p className="cart-count">Items: {props.cartCount}</p>}
            {
                props.cart.map((item) => {
                    
                    return (
                        <div key={item.id} id={item.id} className="cart-item-container">
                            <div className="cart-image-container">
                                <img src={item.image} alt="img" className="cart-image" />
                            </div>
                            <div className="cart-body">
                                <div className="cart-description">{item.description}</div> 
                                <div className="cart-stock">{item.stock}</div> 
                                <div className="cart-size">{item.size}</div> 
                                <div className="cart-price">${item.price.toFixed(2)}</div>
                            </div>
                            <div className="cart-controls">
                                <div className="cart-controls-top">
                                    <button className="cart-qty-button" onClick={handleDecrementQty} disabled={item.qty<2 ?? true }>-1</button>
                                    <span className="cart-qty">{item.qty}</span>
                                    <button className="cart-qty-button" onClick={handleIncrementQty}>+1</button>
                                </div>
                                <div className="cart-controls-bottom">
                                    <button className="cart-remove-button" onClick={handleRemoveFromCart}>remove</button>
                                </div>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        cartCount: getCartCount(state.cart)
    }
}

export default connect(mapStateToProps)(Cart);
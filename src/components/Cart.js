import React from 'react';
import { connect } from 'react-redux';
import { getCartCount } from '../selectors/cartSelectors';
import { removeFromCart, incrementQty, decrementQty } from '../actions/cartActions';

function Cart(props) {
    const handleRemoveFromCart = function(e){
        const id = e.target.parentElement.id;

        if (id){
            props.dispatch(removeFromCart(id));
        }
    }
    const handleIncrementQty = function(e){
        const id = e.target.parentElement.id;
        if (id) {
            props.dispatch(incrementQty(id));
        }
    }
    const handleDecrementQty = function(e){
        const id = e.target.parentElement.id;
        if (id) {
            props.dispatch(decrementQty(id));
        }
    }
    return (
        <div>
            <h1>Cart</h1>
            {props.cartCount === 0 ? <p>You have nothing in your cart.</p> : <p className="cart-count">Items: {props.cartCount}</p>}
            <ul>
            {
                props.cart.map((item) => {
                    return (
                        <li key={item.id} id={item.id}>
                            <img src={item.image} alt="img" className="cart-img" />
                            <span className="cart-stock">{item.stock}</span> <span className="cart-description">{item.description}</span> <span className="cart-size">{item.size}</span> <span className="cart-price">${item.price.toFixed(2)}</span>
                            <button onClick={handleDecrementQty} disabled={item.qty<2}>-1</button>
                            <span className="cart-qty">{item.qty}</span>
                            <button onClick={handleIncrementQty}>+1</button>
                            <button onClick={handleRemoveFromCart}>remove</button>
                        </li>
                    )
                })
            }

            </ul>
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
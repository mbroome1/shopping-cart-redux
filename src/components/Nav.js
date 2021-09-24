import React from 'react'
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { getCartCount } from '../selectors/cartSelectors';

const Nav = (props) => {
    return (

        <nav className="nav">
            <div className="container">
                <div className="nav-container">
                    <div className="nav-logo">Redux Cart</div>
                    <div className="nav-middle">
                        <div className="nav-cart">Cart: <span className="nav-cart-circle">{props.cartCount}</span></div>
                    </div>
                    <div className="nav-right">
                        <ul clasname="nav-list">
                            <li className="nav-list-item"><NavLink className="nav-list-item-link" to="/">Home</NavLink></li>
                            <li className="nav-list-item"><NavLink className="nav-list-item-link" to="/Catalogue">Catalogue</NavLink></li>
                            <li className="nav-list-item"><NavLink className="nav-list-item-link" to="/Checkout">Checkout</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>

        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        cartCount: getCartCount(state.cart)
    }
}

export default connect(mapStateToProps)(Nav);

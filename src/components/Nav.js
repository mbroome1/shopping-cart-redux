import React from 'react'
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { getCartCount } from '../selectors/cartSelectors';

const Nav = (props) => {
    return (

        <nav className="nav">
            <div className="nav__container">
                <div className="nav__logo">Redux Cart</div>
                <div className="nav__right">
                    <div className="nav__cart">Cart: {props.cartCount}</div>
                    <ul clasname="nav__list">
                        <li className="nav__list__item"><NavLink className="nav__list__item--link" to="/">Home</NavLink></li>
                        {/*<li className="nav__list__item"><Link className="nav__list__item--link" to="/About">About</Link></li>*/}
                        <li className="nav__list__item"><NavLink className="nav__list__item--link" to="/Catalogue">Catalogue</NavLink></li>
                        <li className="nav__list__item"><NavLink className="nav__list__item--link" to="/Checkout">Checkout</NavLink></li>
                    </ul>
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

import React from 'react'
import { connect } from 'react-redux'
import { getCartTotal } from '../selectors/cartSelectors'

 function Total(props) {
    return (
        <div className="total-container">
            <h2>Total: ${props.cartTotal}</h2>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cartTotal: getCartTotal(state.cart)
    }
}
export default connect(mapStateToProps)(Total)
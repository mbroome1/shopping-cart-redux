import React from 'react'
import { connect } from 'react-redux'
import { getCartTotal } from '../selectors/cartSelectors'

 function Total(props) {
    return (
        <div>
            <h1>Total: ${props.cartTotal}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cartTotal: getCartTotal(state.cart)
    }
}
export default connect(mapStateToProps)(Total)
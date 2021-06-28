import React from 'react'
import Product from './Product';
import { connect } from 'react-redux';
import { getProducts} from '../selectors/cartSelectors'

function ProductList(props) {
    
    return (
        <div className="product-list">
        {
           props.products.map((product)=> <Product key={product.stock} product={product} />)
        }
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        products: getProducts(state.productList)
    }
}
export default connect(mapStateToProps)(ProductList)
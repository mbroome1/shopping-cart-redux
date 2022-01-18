import React from './Catalogue';
import ProductList from './ProductList';
import Cart from './Cart';
import Total from './Total';

export default function Catalogue(props) {
    return (
        <div>
            <h1>Products</h1>
            <ProductList />
            <Cart />
            <Total />
  
        </div>
    )
}


import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';

function Product(props) {
    const handleAddToCart = function(e) {
        e.preventDefault();
        var size = e.target.elements.size.value;
        var qty = Number.parseInt(e.target.elements.qty.value);
        props.dispatch(
            addToCart({
                id: uuidv4(),
                stock: props.product.stock, 
                description:props.product.description,
                price: props.product.price,
                size: size,
                qty: qty,
                image: props.product.image
            })
        )
    }
    return (
        <div className="col">
            <div className="product">
                <h2 className="product-stock">{props.product.stock}</h2>
                <div className="product-image-container">
                    <img className="product-image" src={props.product.image} alt='pic'/>
                </div>
                <div className="product-body">
                    <p className="product-description">{props.product.description}</p>
                    <p className="product-price">${props.product.price.toFixed(2)}</p>
                    <form onSubmit={handleAddToCart}>
                        <div className="select-group">
                            <label htmlFor="size" className="product-label">Size:</label>
                            <select id="size" className="product-size">
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                            </select>
                        </div>
                        <div className="select-group">
                            <label htmlFor="qty" className="product-label">Qty:</label>
                            <select id="qty" className="product-qty">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <button className="product-add-button">Add to Cart</button>
                    </form>
                </div>

            </div>
        </div>
            

    )
}
export default connect()(Product)

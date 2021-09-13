import React from 'react'

export default function Home() {
    return (
        <div>
          <div>
            <h1>Home</h1>
            <p>This app is a learning example of how to use React, React Router for navigating different pages and Redux state management for managing cart state globally.</p>
          </div>

          <div className="component-heading">
            <h2>Component Overview:</h2>
          </div>

          <div className="component">
            <h3>Catalogue</h3>
            <li>Wrapper component containing a the product list, and the cart component.</li>
            <li>Lastly, has a separate total component which displays the cart total value.</li>
          </div>

          <div className="component">
            <h3>ProductList</h3>
            <li>Wrapper component which displays multiple product components.</li>
            <li>Creates a product component for each product in state, then passes down product information as props.</li>
          </div>

          <div className="component">          
            <h3>Product</h3>
            <li>Picks up product information through props.</li>
            <li>Each product is displayed in a form element with its own submit functions that trigger a local add to cart routine within the component. This local function then uses dispatch provided by redux, passing along a product object for redux to add to the cart array sitting in redux state.</li>
          </div>

          <div className="component">
            <h3>Cart</h3>
            <li>Looks at the cart state and loops through each item in cart.</li>
            <li>Each item in cart shows the quantity with increment and decrement buttons to manipulate the cart state for that item.</li>
            <li>Local component functions are triggered clicking each button, which in turn trigger a dispatch through to redux to further handle the action.</li>
          </div>

          <div className="component">
            <h3>Checkout</h3>
            <li>This component mainly exists to confirm changing state on the cart object via the cart component will automatically change what is displayed in this component.</li>
            <li>Displays a simple overview of what is in cart state.</li>
          </div>

          <div className="component">
            <h3>Nav</h3>
            <li>Configures react router navigation with links to other component pages.</li>
            <li>Displays the cart item count using a redux selector.</li>
          </div>

        </div>
    )
}

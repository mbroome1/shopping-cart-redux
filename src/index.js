import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import "./styles/index.css";

import App from './components/App';
import reportWebVitals from './reportWebVitals';

import {addToCart} from './actions/cartActions';

import { getCartSelector } from './selectors/cartSelectors';

store.subscribe(() => {
  console.log(store.getState())
});


// store.dispatch(addToCart({
//   stock: 1000,
//   description: 'test desc',
//   price: 99.99,
//   qty:2,
//   size: 'S'
//   }));
// // store.dispatch(addToCart({
// //     stock: 2000,
// //     description: 'test desc',
// //     price: 99.99,
// //     qty:3,
// //     size: 'L'
// // }));
// store.dispatch(addToCart({
//   stock: 2000,
//   description: 'test desc',
//   price: 99.99,
//   qty:2,
//   size: 'L'
// }));

const state = store.getState();
const getCart = getCartSelector(state.cart);

console.log(getCart);

ReactDOM.render(
<React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
</React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

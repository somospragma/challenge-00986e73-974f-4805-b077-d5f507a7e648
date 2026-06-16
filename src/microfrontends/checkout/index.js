import React from 'react';
import ReactDOM from 'react-dom';

const checkoutApp = () => {
  const domElement = document.getElementById('single-spa-application:checkout');
  ReactDOM.render(<div>Checkout Microfrontend</div>, domElement);
};

export default checkoutApp;
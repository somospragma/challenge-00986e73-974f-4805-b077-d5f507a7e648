import React from 'react';
import ReactDOM from 'react-dom';

const productosApp = () => {
  const domElement = document.getElementById('single-spa-application:productos');
  ReactDOM.render(<div>Productos Microfrontend</div>, domElement);
};

export default productosApp;
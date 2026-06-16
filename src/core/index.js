import React from 'react';
import ReactDOM from 'react-dom';

import productosApp from 'microfrontends/productos/index';
import carritoApp from 'microfrontends/carrito/index';
import checkoutApp from 'microfrontends/checkout/index';

registerApplication({
  name: 'productos',
  app: productosApp,
  activeWhen: ['/productos'],
});

registerApplication({
  name: 'carrito',
  app: carritoApp,
  activeWhen: ['/carrito'],
});

registerApplication({
  name: 'checkout',
  app: checkoutApp,
  activeWhen: ['/checkout'],
});

start();
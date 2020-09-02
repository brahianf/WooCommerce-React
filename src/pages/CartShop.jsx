import React from 'react';
import useCartState from '../utils/useCartState';
import Button from '../components/Button';

import '../assets/styles/pages/CartShop.scss'


const CartShop = () => {
  
  return (
    <div className='CartShop'>
      <p>Mis Compras</p>
      <div className="CartShop__amount">
          <label>Cantidad</label>
          <p>2</p>
      </div>
      <div className="CartShop__nameProduct">
          <label>Producto</label>
          <p>Lenovo touch</p>
      </div>
      <div className="CartShop__subCount">
        <label>$ subTotal</label>
        <p>1222</p>
      </div>
      <div className="CartShop__count">
        <label>$ Total</label>
        <p>2444.99</p>
      </div>
      <div className="CartShop__totalCount">
        <label>$ Total a Pagar <p>$2444.99</p></label>
      </div>
      <div className="CartShop__button">
        <Button data="Confirmar"/>
        <Button data="Cancelar"/>
      </div>
    </div>
  );
};

export default CartShop;

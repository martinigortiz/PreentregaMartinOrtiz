import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
    const imgCarrito = "https://w7.pngwing.com/pngs/833/426/png-transparent-shopping-cart-icon-shopping-cart-black-design-trade-thumbnail.png"
  return (
    <div>
        <img className='imgCarrito' src={imgCarrito} alt="Imagen carrito" />
        <strong>2</strong>
    </div>
  )
}

export default CartWidget
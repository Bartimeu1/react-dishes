import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from '../components/Container';
import CartHeader from '../components/CartHeader';
import CartMenu from '../components/CartMenu';
import CartEmpty from '../components/CartEmpty';

export default function CartPage() {
  const cartItems = useSelector(state => state.cart.cartItems)
  return (
    <Container>
      <CartHeader/>
      {cartItems.length > 0 ? 
        <CartMenu/> :
        <CartEmpty/>
      }
    </Container>
  )
}

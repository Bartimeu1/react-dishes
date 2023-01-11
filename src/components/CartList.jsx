import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import CartItem from './CartItem';

const List = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;
`;

export default function CartList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <List>
      {cartItems.map((item) => (
        <CartItem 
          key={item.itemId}
          itemId={item.itemId}
          info={item.info} 
          amount={item.amount}
        ></CartItem>
      ))}    
    </List>
  )
}

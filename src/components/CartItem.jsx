import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { incItemAmount, decItemAmount, deleteItem } from '../store/cart/cart';

const ItemContent = styled.div`
  display: flex;
  justify-content: start;
  position: relative;
  margin-bottom: 61px;
  &::after {
    position: absolute;
    content: '';
    background: #F7F7F7;
    height: 1px;
    width: 100%;
    bottom: -35px;
    left: 0;
  }
  &:last-child {
    margin-bottom: 0;
    &::after {
      display: none;
    }
  }
`;
const ItemBlock = styled.div`
  display: flex;
  align-items: center;
`;
const ItemImage = styled.img.attrs(({src}) => ({
  src: src
}))`
  width: 80px;
  margin-right: 15px;
`;
const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 290px;
  margin-right: 60px;
`;
const ItemTitle = styled.h3`
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 0.01em;
  color: #000000;
`;
const ItemSubtitle = styled.p`
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.01em;
  color: #8D8D8D;
`;
const ItemCounter = styled.div`
  display: flex;
  align-items: center;
  margin-right: 93px;
  min-width: 112px;
`;
const CounterButton = styled.button`
  border: 2px solid #FE5F1E;
  border-radius: 50%;
  background: #FFFFFF;
  width: 32px;
  height: 32px;
  position: relative;
  color: #FE5F1E;
  font-size: 20px;
  cursor: pointer;
`;
const CounterText = styled.p`
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 0.01em;
  color: #000000;
  margin: 0 12px;
  min-width: 23px;
  text-align: center;
`;
const ItemPrice = styled.p`
  font-weight: 700;
  font-size: 22px;
  min-width: 73px;
  letter-spacing: 0.01em;
  color: #000000;
  margin-right: 93px;
`;
const DeleteButton = styled.button`
  background: #FFFFFF;
  border: 2px solid #D7D7D7;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  transform: rotate(45deg);
  font-size: 20px;
  color: #D0D0D0;
  cursor: pointer;
`;

export default function CartItem({ info, amount, itemId }) {
  const dispatch = useDispatch();
  const { image, title, kind, size, price } = info;

  return (
    <ItemContent>
      <ItemBlock>
        <ItemImage src={image}/>
        <ItemText>
          <ItemTitle>{title}</ItemTitle>
          <ItemSubtitle>{kind} тесто, {size} см.</ItemSubtitle>
        </ItemText>
      </ItemBlock>
      <ItemBlock>
        <ItemCounter>
          <CounterButton
            onClick={() => dispatch(decItemAmount(itemId))}
          >-</CounterButton>
          <CounterText>{amount}</CounterText>
          <CounterButton
            onClick={() => dispatch(incItemAmount(itemId))}
          >+</CounterButton>
        </ItemCounter>
        <ItemPrice>{price*amount} ₽</ItemPrice>
        <DeleteButton
          onClick={() => dispatch(deleteItem(itemId))}
        >+</DeleteButton>
      </ItemBlock>
    </ItemContent>
  )
}

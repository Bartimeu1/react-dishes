import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { clearCart } from '../store/cart/cart';

import cart from '../assets/images/cartDark.svg';
import trash from '../assets/images/trash.svg';

import CartList from './CartList';

const Menu = styled.div`
  max-width: 920px;
  margin: 0 auto;
`;
const MenuTopper = styled.div`
  margin-bottom: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  &::after {
    position: absolute;
    content: '';
    background: #F7F7F7;
    height: 1px;
    width: 100%;
    bottom: -35px;
    left: 0;
  }
`;
const TopperBlock = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const TopperTitle = styled.h2`
  font-weight: 700;
  font-size: 28px;
  letter-spacing: 0.01em;
  color: #000000;
  margin-left: 18px;
`;
const TopperImg = styled.img.attrs(({src}) => ({
  src: src
}))``;
const TopperText = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #B6B6B6;
  margin-left: 11px;
`;
const MenuFloor = styled.div`
  display: flex;
  flex-direction: column;
`;
const FloorBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0;
  }
`;
const FloorText = styled.p`
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 0.01em;
  color: #000000;
  & span {
    font-weight: bold;
    color: ${props => props.price ? '#FE5F1E' : '#000000'}
  }
`;
const BackButton = styled(Link)`
  background: #FFFFFF;
  border: 1px solid #D3D3D3;
  border-radius: 30px;
  font-weight: 400;
  font-size: 16px;
  color: #CACACA;
  padding: 18px 30px 17px 30px;
  transition: 0.3s;
  &:hover {
    background: #FE5F1E;
    color #fff;
    transition: 0.3s;
  }
`;
const SendButton = styled.button`
  background: #FE5F1E;
  border-radius: 30px;
  font-weight: 700;
  font-size: 16px;
  color: #FFFFFF;
  border: 1px solid #FE5F1E;
  padding: 17px 30px 16px 30px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #fff;
    color #FE5F1E;
    transition: 0.3s;
  }
`;

export default function CartMenu() {
  const dispatch = useDispatch();
  const { cartAmount, cartPrice } = useSelector(state => state.cart);

  return (
    <Menu>
      <MenuTopper>
        <TopperBlock>
          <TopperImg src={cart}/>
          <TopperTitle>Корзина</TopperTitle>
        </TopperBlock>
        <TopperBlock onClick={() => dispatch(clearCart())}>
          <TopperImg src={trash}/>
          <TopperText>Очистить корзину</TopperText>
        </TopperBlock>
      </MenuTopper>
      <CartList />
      <MenuFloor>
        <FloorBlock>
          <FloorText>Всего пицц: <span>{cartAmount} шт.</span></FloorText>
          <FloorText price>Сумма заказа: <span>{cartPrice} ₽</span></FloorText>
        </FloorBlock>
        <FloorBlock>
          <BackButton to='/'>Вернуться назад</BackButton>
          <SendButton>Оплатить сейчас</SendButton>
        </FloorBlock>
      </MenuFloor>
    </Menu> 
  )
}

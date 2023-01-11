import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logo from '../assets/images/logo.svg';
import cart from '../assets/images/cart.svg';

const HeaderEl = styled.header`
  margin-bottom: 76px;
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
const Wrapper = styled.div`
  display: flex;
  aling-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;

`;
const LogoImg = styled.img.attrs(({src}) => ({
  src: src
}))`
  width: 38px;
  margin-right: 17px;
`;
const LogoText = styled.div``;
const LogoTitle = styled.h1`
  font-weight: 800;
  font-size: 24px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #181818;
`;
const LogoSubtitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #7B7B7B;
`;
const LinkButton = styled(Link)`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  background: #FE5F1E;
  border-radius: 30px;
  padding: 15px 23px;
  position: relative;
  transition: 0.3s;
  &::after {
    position: absolute;
    content: '';
    background: rgba(255, 255, 255, 0.25);
    height: 25px;
    width: 1px;
    left: 52%;
  }
  &:hover {
    background: #ff0000;
    transition: 0.3s;
  }
`;
const ButtonText = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: #FFFFFF;
`;
const ButtonCart = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonImg = styled.img.attrs(({src}) => ({
  src: src
}))`
  margin: 0 8px 0 27px;
`;


export default function Header() {
  const { cartAmount, cartPrice } = useSelector(state => state.cart);

  return (
    <HeaderEl>
      <Wrapper>
        <Logo>
          <LogoImg src={logo}/>
          <LogoText>
            <LogoTitle>REACT PIZZA</LogoTitle>
            <LogoSubtitle>самая вкусная пицца во вселенной</LogoSubtitle>
          </LogoText>
        </Logo>
        <LinkButton to="/cart">
          <ButtonText>{cartPrice} ₽</ButtonText>
          <ButtonCart>
            <ButtonImg src={cart}/>
            <ButtonText>{cartAmount}</ButtonText>
          </ButtonCart>
        </LinkButton>
      </Wrapper>
    </HeaderEl>
  )
}

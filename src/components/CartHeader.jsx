import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from "../assets/images/logo.svg";

const Header = styled.header`
  margin-bottom: 98px;
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
const Logo = styled(Link)`
  display: flex;
  align-items: center;
`;
const LogoImg = styled.img.attrs(({src}) => ({
  src: src
}))`
  margin: 0 16px 0 0;
`;
const LogoText = styled.div`
  display: flex;
  flex-direction: column;
`;
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

export default function CartHeader() {
  return (
    <Header>
      <Logo to="/">
        <LogoImg src={logo}></LogoImg>
        <LogoText>
          <LogoTitle>REACT PIZZA</LogoTitle>
          <LogoSubtitle>Самая реактивная пицца</LogoSubtitle>
        </LogoText>
      </Logo>
    </Header>
  )
}

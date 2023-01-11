import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import empty from '../assets/images/empty.png';
import emoji from '../assets/images/emoji.svg';

const Empty = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const EmptyImg = styled.img.attrs(({src}) => ({
  src: src
}))``;
const EmptyTopper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const EmptyTitle = styled.h3`
  font-weight: 700;
  font-size: 28px;
  letter-spacing: 0.01em;
  color: #000000;
  margin-right: 10px;
`;
const EmptySubtitle = styled.p`
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #777777;
  line-height: 145.4%;
  margin-bottom: 47px;
`;
const EmptyButton = styled(Link)`
  background: #282828;
  border-radius: 30px;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.015em;
  color: #FFFFFF;
  border: 1px solid #282828;
  padding: 17px 30px 16px 30px;
  margin-top: 74px;
  transition: 0.3s;
  &:hover {
    color: #282828;
    background: #fff;
    transition: 0.3s;
  }
`;

export default function CartEmpty() {
  return (
    <Empty>
      <EmptyTopper>
        <EmptyTitle>Корзина пустая</EmptyTitle>
        <EmptyImg src={emoji}/>
      </EmptyTopper>
      <EmptySubtitle>
        Вероятней всего, вы ещё не заказали пиццу . <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </EmptySubtitle>
      <EmptyImg src={empty}/>
      <EmptyButton to='/'>Вернуться назад</EmptyButton>
    </Empty>
  )
}

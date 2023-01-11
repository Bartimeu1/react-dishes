import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import ProductsMenu from './ProductsMenu';

import { addCartItem } from '../store/cart/cart';

const Card = styled.div`
  flex: 0 1 calc((100% / 4) - 55px);
  text-align: center;
  margin-bottom: 65px;
  margin: 27.5px;
`;
const CardTitle = styled.h3`
  font-weight: 800;
  font-size: 18px;
  text-align: center;
  letter-spacing: 0.01em;
  color: #000000;
  margin-bottom: 22px;
`;
const CardImage = styled.img.attrs(props => ({
  src: props.img
}))`
  max-width: 260px;
`;
const CardFloor = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CardPrice = styled.p`
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 0.015em;
  color: #000000;
`;
const CardButton = styled.button`
  background: #FE5F1E;
  border: 1px solid #FE5F1E;
  border-radius: 30px;
  font-weight: 700;
  font-size: 16px;
  color: #FFFFFF;
  padding: 11px 18px 14px 23px;
  position: relative;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #FFFFFF;
    border: 1px solid #EB5A1E;
    color: #EB5A1E;
    transition: 0.3s;
  }
`;
const CardButtonSelected = styled.button`
  background: inherit;
  border: 1px solid #FE5F1E;
  border-radius: 30px;
  font-weight: 700;
  font-size: 16px;
  color: #EB5A1E;
  padding: 11px 40px 14px 23px;
  position: relative;
  cursor: pointer;
  transition: 0.3s;
  position: relative;
`;
const CardCounter = styled.div`
  width: 22px;
  height: 22px;
  background: #EB5A1E;
  border-radius: 50%;
  color: #fff;
  font-weight: 700;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 9px;
  right: 12px;
`;

export default function ProductsItem({ info }) {
  const { title, image, price, kinds, sizes, id } = info;

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);

  const [currentKind, setCurrentKind] = useState("тонкое"); 
  const [currentSize, setCurrentSize] = useState("26"); 

  const choiceCurrent = function(value, mark) {
    mark === "kind" ? setCurrentKind(value) : setCurrentSize(value);
  }
  // Pack an product object for redux state
  const selectProductItem = function() {
    let item = {
      id: id,
      title: title,
      price: price,
      kind: currentKind,
      size: currentSize,
      image: image
    };
    dispatch(addCartItem(item));
  }
  // Calculate the number of product selections
  const [productCounter, setProductCounter] = useState(0);
  const incProductCounter = () => {
    setProductCounter(0);
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].info.id === id) {
        setProductCounter(prevState => prevState + cartItems[i].amount);
      }
    }
  }  
  useEffect(() => {
    incProductCounter();
  }, [cartItems]);

  return (
    <Card>
      <CardImage img={image} />
      <CardTitle>{title}</CardTitle>
      <ProductsMenu 
        kinds={kinds}
        sizes={sizes}
        currentKind={currentKind}
        currentSize={currentSize}
        selectProductItem={selectProductItem}
        choiceCurrent={choiceCurrent}
      />
      <CardFloor>
        <CardPrice>от {price} ₽</CardPrice>
        {productCounter > 0 ?
          <CardButtonSelected onClick={() => (selectProductItem())}>
            Добавить
            <CardCounter>{productCounter}</CardCounter>
          </CardButtonSelected> :
          <CardButton onClick={() => (selectProductItem())}>
            Добавить
          </CardButton>
        }
      </CardFloor>
    </Card>
  )
}

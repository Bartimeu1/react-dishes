import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import ProductsMenuButton from './ProductsMenuButton';

const Menu = styled.div`
  margin-bottom: 17px;
  width: 100%;
  background: #F3F3F3;
  border-radius: 10px;
  padding: 7px 5px;
`;
const MenuBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: -7px 0;
`;

export default function ProductsMenu({ kinds, sizes, selectProductItem, currentKind, currentSize, choiceCurrent }) {
  const dishKinds = ["тонкое", "традиционное"];
  const dishSizes = ["26", "30", "40"];

  return (
    <Menu>
      <MenuBlock>
        {dishKinds.map((kind, index) => (
          <ProductsMenuButton
            key={kind}
            mark="kind"
            able={kinds[index] ? true : false}
            value={kind}
            current={kind === currentKind ? true : false}
            choiceCurrent={choiceCurrent}
          ></ProductsMenuButton>
        ))}
      </MenuBlock>
      <MenuBlock>
        {dishSizes.map((size, index) => (
          <ProductsMenuButton
            key={size}
            mark="size"
            able={sizes[index] ? true : false}
            value={size}
            current={size === currentSize ? true : false}
            choiceCurrent={choiceCurrent}
          >см.</ProductsMenuButton>
        ))}
      </MenuBlock>
    </Menu>
  )
}

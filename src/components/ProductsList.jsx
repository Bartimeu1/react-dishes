import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { useGetProductsQuery } from '../store/products/products.api'; 

import ProductsItem from './ProductsItem';
import Preloader from './Preloader';

const Wrapper = styled.div`
  min-height: 101vh;
`;
const List = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 -35px -65px -35px;
`;
const ListTitle = styled.h2`
  font-weight: 700;
  font-size: 28px;
  letter-spacing: 0.01em;
  color: #000000;
  margin-bottom: 35px;
`;

export default function ProductsList() {
  const currentFilter = useSelector(state => state.controls.currentFilter);
  const currentSort = useSelector(state => state.controls.currentSort);
  const { data, isLoading, error } = useGetProductsQuery();
  const [filteredItems, setFilteredItems] = useState(data);
  useEffect(() => {
    let items = [];
    // Filter Items
    if (currentFilter != 'Все') {
      items = data.filter((item) => {
        return item.category === currentFilter;
      });
    } else items = data;

    // Sort Items   
    if (items != undefined) {
      items = currentSort === 'popular' ? [...items].sort((a, b) => a.rating - b.rating) : 
      'alphabet' ? [...items].sort((a, b) => a.title.localeCompare(b.title)) : 
      'price' ?  [...items].sort((a, b) => a.price - b.price) :
      null
    }
    setFilteredItems(items);

  }, [currentFilter, currentSort, data]);

  
  return (
    <Wrapper>
      {isLoading ? <Preloader/> : 
        <>
          <ListTitle>{currentFilter} пиццы</ListTitle>
          <List>
            {filteredItems && filteredItems.map((item) => (
              <ProductsItem
                key={item.title}
                info={item}
              ></ProductsItem>
            ))}
          </List>
        </>
      }
    </Wrapper>
  )
}


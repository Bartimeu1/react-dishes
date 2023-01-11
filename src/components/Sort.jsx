import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { changeSort } from '../store/controls/controls';

import CustomSelect from './CustomSelect';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const SortText = styled.p`
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.015em;
  color: #2C2C2C;
  margin-right: 8px;
  position: relative;
  &::after {
    content: ''; 
    position: absolute; 
    left: -20px; 
    bottom: 3px;
    border: 7px solid transparent; 
    border-bottom: 8px solid #2C2C2C;; 
    border-radius: 5px;
  }
`;

export default function Sort() {
  const dispatch = useDispatch();
  
  const [currentSort, setCurrentSort] = useState('популярности');
  const [visibleSelect, setVisibleSelect] = useState(false);

  const toogleSelect = () => {
    setVisibleSelect(prevState => !prevState);
  }
  const choiceSort = (value, title) => {
    setCurrentSort(title);
    dispatch(changeSort(value));
  }

  const sortItems = [
    {title: 'популярности', value: 'popular'},
    {title: 'цене', value: 'price'},
    {title: 'алфавиту', value: 'alphabet'}
  ]

  return (
    <Wrapper>
      <SortText>Сортировка по:</SortText>
      <CustomSelect 
        visible={visibleSelect} 
        options={sortItems} 
        currentSort={currentSort}
        toogleSelect={toogleSelect}
        choiceSort={choiceSort}
      ></CustomSelect>
    </Wrapper>
  )
}

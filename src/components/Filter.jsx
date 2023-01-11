import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { changeFilter } from '../store/controls/controls';

import FilterButton from './FilterButton';

const Wrapper = styled.div`
  margin: 0 -9px;
`;

export default function Filter() {
  const dispatch = useDispatch();

  const [currentFilter, setCurrentFilter] = useState('Все');

  const choiceFilter = (value) => {
    setCurrentFilter(value);
    dispatch(changeFilter(value));
  }


  const filterItems = [
    {value: 'Все'},
    {value: 'Мясные'},
    {value: 'Вегетарианские'},
    {value: 'Гриль'},
    {value: 'Острые'},
    {value: 'Закрытые'}
  ];

  return (
    <Wrapper>
      {filterItems.map((item) => (
        <FilterButton 
          key={item.value}
          value={item.value}
          current={currentFilter === item.value ? true : false}
          choiceFilter={choiceFilter}
        ></FilterButton>
      ))}
    </Wrapper>
  )
}

import React from 'react';
import styled from 'styled-components';

import CustomOption from './CustomOption';

const SelectEl = styled.div`
  position: relative;
`;
const SelectMenu = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  width: 132px;
  height: 136px;
  position: absolute;
  left: -38px;
  top: 25px;
  padding-top: 13px;
`;
const SortText = styled.p`
  font-size: 14px;
  letter-spacing: 0.015em;
  color: #FE5F1E;
  cursor: pointer;
  min-width: 93px;
`;


export default function CustomSelect(props) {
  const {currentSort, options, visible, toogleSelect, choiceSort} = props;
  return (
    <SelectEl>
      <SortText
        onClick={() => toogleSelect()}
      >{currentSort}</SortText>
      {visible ? 
        <SelectMenu>
          {options.map((item) => (
            <CustomOption 
              key={item.value}
              current={currentSort === item.title ? true : false}
              toogleSelect={toogleSelect}
              choiceSort={choiceSort}
              title={item.title}
              value={item.value}
            ></CustomOption>
         ))}
        </SelectMenu> 
      : null}
    </SelectEl>
  )
}

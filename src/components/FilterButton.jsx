import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  background: #F9F9F9;
  border-radius: 30px;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.015em;
  color: #2C2C2C;
  padding: 12px 30px 14px 30px;
  margin: 0 9px;
  cursor: pointer;
`;
const ButtonCurrent = styled.button`
  border: none;
  background: #282828;
  border-radius: 30px;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.015em;
  color: #FFFFFF;;
  padding: 12px 30px 14px 30px;
  margin: 0 9px;
  cursor: pointer;
`;

export default function FilterButton(props) {
  const { current, value, choiceFilter } = props;
  return (
    <>
      {current ? <ButtonCurrent>{value}</ButtonCurrent> : 
      <Button 
        onClick={() => {choiceFilter(value)}}
      >{value}</Button>}
    </>
  )
}

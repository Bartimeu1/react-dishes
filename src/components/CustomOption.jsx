import React from 'react';
import styled from 'styled-components';

const OptionEL = styled.div`
  width: 100%;
  cursor: pointer;
  padding: 10px 14px;
  font-size: 14px;
  font-weight: 700;
  &:hover {
    background: rgba(254, 95, 30, 0.05);
  }
`;
const OptionELCurrent = styled.div`
  width: 100%;
  cursor: pointer;
  padding: 10px 14px;
  font-size: 14px;
  font-weight: 700;
  color: #FE5F1E;
  background: rgba(254, 95, 30, 0.05);
`;

export default function CustomOption(props) {
  const { current, toogleSelect, choiceSort, title, value } = props;

  return (
    <>
      {current ? 
        <OptionELCurrent>{title}</OptionELCurrent> : 
        <OptionEL 
          onClick={() => (toogleSelect(), choiceSort(value, title))}
        >{title}</OptionEL>
      }
    </>
  )
}

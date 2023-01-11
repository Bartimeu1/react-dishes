import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.015em;
  color: #2C2C2C;
  padding: 7px 0;
  margin: 7px 0;
  background: ${props => props.current ? "#fff" : "none"};
  cursor: pointer;
  border-radius: 5px;
  flex: ${props => props.mark === "kind" ? "0 0 50%" : "0 0 33%"}
`;
const ButtonDisabled = styled.button`
  border: none;
  background: none;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.015em;
  color: #2C2C2C;
  padding: 7px 0;
  margin: 7px 0;
  opacity: 0.6;
  flex: ${props => props.mark === "kind" ? "0 0 50%" : "0 0 33%"}
`;

export default function ProductsMenuButton({ able, value, current, choiceCurrent, mark, children }) {
  return (
    <>
      {able ? 
        <Button
          current={current}
          mark={mark}
          onClick={() => choiceCurrent(value, mark)}
        >{value} {children}</Button> : 
        <ButtonDisabled
          mark={mark}
        >{value} {children}</ButtonDisabled>
      }
    </>
  )
}

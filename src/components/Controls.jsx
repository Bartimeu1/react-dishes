import React from 'react';
import styled from 'styled-components';

import Filter from './Filter';
import Sort from './Sort';

const ControlsEl = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export default function Controls() {
  return (
    <ControlsEl>
      <Filter/>
      <Sort/>
    </ControlsEl>
  )
}

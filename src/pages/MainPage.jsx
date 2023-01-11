import React from 'react';

import { Container } from '../components/Container';
import Header from '../components/Header';
import Controls from '../components/Controls';
import ProductsList from '../components/ProductsList';

export default function MainPage() {
  return (
    <Container>
      <Header></Header>
      <Controls></Controls>
      <ProductsList></ProductsList>
    </Container>
  )
}

import React from 'react';
import { LButton } from '../Button/Button';
import Container from '../Container/Container';
import { NFound, NFoundCenter } from './NoutFound.styles';

const NotFound = () => {
  return (
    <Container>
      <NFound>
        <NFoundCenter>
          whoops...this page is not available
          <br />
          <LButton to='/discover'>Home</LButton>
        </NFoundCenter>
      </NFound>
    </Container>
  );
};

export default NotFound;

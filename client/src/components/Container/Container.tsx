import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 140rem;
  margin: 5rem auto;
  padding-left: 3rem;
  padding-right: 3rem;

  @media only screen and (max-width: 30em) {
    padding: 0rem;
    margin: 0;
  }
  @media only screen and (min-width: 48em) and (max-width: 50.625em) {
    padding: 0rem;
    margin: 0;
  }
`;

const Container: React.FC = ({ children }) => {
  return (
    <>
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default Container;

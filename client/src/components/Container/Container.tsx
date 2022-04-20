import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 140rem;
  margin: 5rem auto;
  padding-left: 3rem;
  padding-right: 3rem;
`;

const Container: React.FC = ({ children }) => {
  return (
    <>
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default Container;

import styled from 'styled-components';

export const Heading = styled.h2`
  font-size: 4rem;
  font-weight: 300;
  color: var(--primary);
  padding: 5rem 2rem;

  @media only screen and (max-width: 30em) {
    margin: 2rem 0rem 0rem 2rem;
    font-size: 3rem;
  }
`;

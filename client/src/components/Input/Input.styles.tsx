import styled from 'styled-components';

export const TextField = styled.input`
  display: inline-block;
  border: 0.2rem solid var(--primary);
  width: 100%;
  padding: 1.8rem;
  margin-top: 5rem;
  border-radius: 0.5rem;
  background-color: transparent;

  &:focus {
    outline: none;
  }

  &[type] {
    font-size: 3rem;
    font-weight: 700;
  }

  @media only screen and (max-width: 30em) {
    margin-top: 8rem;
    padding: 1.2rem;
    width: 90%;
    margin-left: 3rem;
  }

  @media only screen and (min-width: 48em) and (max-width: 50.625em) {
    margin-top: 8rem;
    padding: 1.2rem;
    width: 90%;
    margin-left: 3rem;
  }
`;

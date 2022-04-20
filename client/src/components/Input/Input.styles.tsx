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
`;

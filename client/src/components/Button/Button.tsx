import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const baseButton = css`
  display: inline-block;
  border: 0.1rem solid;
  border-radius: 0.4rem;
  font-size: 1.6rem;
  font-weight: var(--default-weight);
  padding: 1rem 4rem;
  margin: 0rem 2rem 0rem 0rem;
  color: var(--white-grey);
  border-color: var(--primary);
  background-color: var(--primary);
  text-decoration: none;
`;

export const Button = styled.a`
  ${baseButton}
`;

export const LButton = styled(Link)`
  ${baseButton}
`;

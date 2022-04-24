import styled from 'styled-components';

export const NFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8rem;
  font-weight: 700;
  color: var(--primary);
  text-align: center;
`;

export const NFoundCenter = styled.div`
  position: absolute;
  top: 30%;
  transform: translateX(-50%, -50%);

  @media only screen and (max-width: 30em) {
    font-size: 4rem;
    left: 0;
  }

  @media only screen and (max-width: 48em) {
    font-size: 4rem;
  }
`;

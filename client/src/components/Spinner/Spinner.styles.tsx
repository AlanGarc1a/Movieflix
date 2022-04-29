import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerContent = styled.div`
  position: relative;
`;

export const SpinnerBox = styled.div`
  position: absolute;
  left: 40%;
  margin-top: 10rem;

  @media only screen and (max-width: 30em) {
    left: 35%;
  }
`;

export const SpinnerCircle = styled.div`
  border: 1.2rem solid var(--grey);
  border-top: 1.2rem solid var(--white-grey);
  border-radius: 50%;
  width: 15rem;
  height: 15rem;
  margin: 0.3rem auto;
  animation: ${rotate} 2s linear infinite;
`;

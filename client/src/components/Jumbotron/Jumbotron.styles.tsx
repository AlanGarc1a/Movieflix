import styled from 'styled-components';

interface IJumboProps {
  bgImage?: string;
}

export const Jumbo = styled.div<IJumboProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 55vh;
  overflow: hidden;
  top: 2%;

  &:before {
    content: '';
    position: absolute;
    top: 5%;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    background-image: url(${(p) => p.bgImage});
    background-size: cover;
    background-position: center;
  }

  @media only screen and (max-width: 30em) {
    height: 100vh;
    top: -5%;
  }
`;

export const JumboOverlay = styled.div`
  @media only screen and (max-width: 30em) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #040303, #5c5c5c);
    mix-blend-mode: overlay;
    opacity: 0.8;
  }
`;

import styled from 'styled-components';

interface HeaderProps {
  bgImage: string;
}

export const HeaderHeading = styled.h3`
  font-size: 6rem;
  font-weight: 500;
  color: var(--white);
`;

export const HeaderSubHeading = styled.h3`
  font-size: 4rem;
  font-weight: 300;
  color: var(--white);
`;

export const HeaderContent = styled.header<HeaderProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  background: ${(props) => `url(${props.bgImage}) no-repeat top center`};
  background-size: cover;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to right top, #0f1318, #303f4c);
    opacity: 0.6;
  }
`;

export const HeaderIntro = styled.div`
  position: absolute;
  z-index: 2;
`;

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardBox = styled.div`
  width: 22rem;
  position: relative;

  transform: translateY(0);
  transition: all 0.2s ease-in;

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0.8rem 0.8rem 0.9rem var(--primary);
  }
`;

export const CardRating = styled.div`
  border-radius: 50%;
  background-color: var(--white);
  color: var(--primary);
  font-size: 1.8rem;
  position: absolute;
  top: 2%;
  left: 80%;
  width: 3rem;
  height: 3rem;
  text-align: center;
`;

export const CardLink = styled(Link)`
  text-decoration: none;
`;

export const CardImgBox = styled.div`
  width: 100%;
  height: 30rem;
  border-radius: 0.5rem;
`;

export const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--secondary);
  mix-blend-mode: overlay;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardFooter = styled.div`
  padding-top: 0.1rem;
  color: var(--primary);
`;

export const CardTitle = styled.span`
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 500;
`;

export const CardSubTitle = styled.span`
  display: inline-block;
  font-size: 1.4rem;
  margin-right: 2rem;
`;

export const CardGenres = styled.span`
  display: inline-block;
  color: var(--primary);
  font-size: 1.3rem;
  font-weight: 500;
`;

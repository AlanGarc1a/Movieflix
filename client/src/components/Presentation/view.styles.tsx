import styled from 'styled-components';

export const CenterView = styled.div`
  position: relative;
  width: 90%;
  left: 5%;

  @media only screen and (max-width: 30em) {
    width: 100%;
    position: absolute;
    top: 55%;
    left: 0;
  }
`;

export const ViewContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 30em) {
    position: absolute;
    top: 100%;
    left: -10%;
    bottom: 0;
    color: var(--white);
  }
`;

export const ViewItem = styled.div`
  margin-left: 2rem;
  &:not(:last-child) {
    margin-right: 5rem;
  }

  @media only screen and (min-width: 62em) and (max-width: 64em) {
    &:not(:nth-child(2)) {
      display: none;
    }
  }

  @media only screen and (min-width: 48em) and (max-width: 50.625em) {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const ViewImgBox = styled.div`
  width: 25rem;
  margin-right: 3rem;
  margin-bottom: 5rem;
  display: none;
  @media only screen and (min-width: 64em) {
    display: block;
  }
`;

export const ViewImage = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 1rem;
  box-shadow: 0rem 0.8rem 1.8rem var(--primary);
  transform: scale(1.5);
`;

export const ViewAbout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ViewHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ViewTitle = styled.span`
  display: inline-block;
  font-size: 3rem;
  font-weight: 500;
`;

export const ViewText = styled.span`
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 500;
  margin-right: 2rem;
`;

export const ViewList = styled.div`
  display: flex;
  margin: 1rem 0rem;
`;

export const ViewAboutDesc = styled.p`
  font-size: 1.5rem;
  margin: 1rem 0rem;

  & > a {
    text-decoration: none;
    text-transform: uppercase;
    margin-left: 1rem;
    color: var(--light-green);
    font-weight: 700;
  }
`;

export const ViewRating = styled.span`
  font-size: 2rem;
  margin-right: 5rem;
  align-self: center;
`;

export const ViewVotes = styled.span`
  display: inline-block;
  font-size: 1rem;
  color: var(--grey);
  padding: 1rem 0rem;
`;

export const ViewCast = styled.div`
  margin-top: 3rem;
  margin-bottom: 0rem;
  display: flex;
  flex-direction: column;
`;

export const Credit = styled.div`
  :not(:last-child) {
    margin-bottom: 1rem;
  }
`;

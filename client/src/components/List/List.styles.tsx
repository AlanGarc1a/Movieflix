import styled from 'styled-components';

export const ListHeader = styled.div`
  @media only screen and (max-width: 30em) {
    text-align: center;
  }

  a {
    font-size: 1rem;
    text-decoration: none;
    color: var(--blue);
  }

  @media only screen and (min-width: 48em) and (max-width: 50.625em) {
    text-align: center;
  }
`;

export const ListContainer = styled.ul`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  list-style-type: none;
  margin-top: 1rem;
  margin-bottom: 8rem;

  @media only screen and (max-width: 48em) {
    justify-content: center;
  }
`;

export const ListTitle = styled.span`
  display: inline-block;
  color: var(--primary);
  font-size: 2rem;
  margin-left: 2rem;

  @media only screen and (max-width: 30em) {
    margin-left: 0rem;
  }
`;

export const ListItem = styled.li`
  margin-right: 3rem;
  margin-bottom: 5rem;
`;

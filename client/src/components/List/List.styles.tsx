import styled from 'styled-components';

export const ListContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
  list-style-type: none;
  margin-top: 1rem;
  margin-bottom: 15rem;

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ListTitle = styled.span`
  display: inline-block;
  color: var(--primary);
  font-size: 2rem;
  padding-left: 4rem;
`;

export const ListItem = styled.li`
  margin-right: 3rem;
  margin-bottom: 5rem;
`;

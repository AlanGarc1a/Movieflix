import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SearchResultList = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  list-style: none;
`;

export const SearchResultItem = styled.li`
  border-bottom: 0.1rem solid var(--grey);
  margin: 2rem 0rem;
  &:hover {
    background-color: var(--grey);
  }
`;

export const SearchResultLink = styled(Link)`
  text-decoration: none;
  color: var(--primary);
`;

export const SearchResultRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  font-size: var(--default-size);
`;

export const SearchResultImgBox = styled.div`
  width: 13rem;
  height: 7.3rem;
  margin: 1.2rem 1.2rem 1.2rem 1rem;
  overflow: hidden;
  border-radius: 0.2rem;
`;

export const SearchResultContent = styled.div`
  flex: 1;
  margin-right: 0.3rem;
`;

export const SearchResultType = styled.div`
  color: var(--primary);
  font-size: var(--default-size);
  margin-right: 2.4rem;
  flex-shrink: 0;
  letter-spacing: 0.1rem;
`;

export const SearchResultImg = styled.img`
  width: 100%;
  height: 100%;
`;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Container from '../components/Container/Container';
import Input from '../components/Input/Input';
import SearchList from '../components/SearchList/SearchList';
import axios from 'axios';
import { IMovie } from '../schemas/Movie';
import Spinner from '../components/Spinner/Spinner';
import { Navigate } from 'react-router-dom';

const SearchFor = styled.div`
  width: 100%;
  padding: 2rem;
`;

const SearchResult = styled.span`
  font-size: 2rem;
  font-weight: var(--default-weight);
  color: var(---grey);

  & > mark {
    font-weight: 500;
    color: var(--white);
    background-color: var(--primary);
  }
`;

const NoResults = styled.div`
  font-size: 3rem;
  text-align: center;
  color: var(--primary);
`;

const MovieSearch: React.FC = () => {
  const [term, setTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorRedirect, setError] = useState<boolean>(false);

  const timer: number = 2000;

  const getSearchResults = async () => {
    try {
      if (term) {
        const searchRes = await axios.get(`/api/movie-search/${term}`);

        const { results } = searchRes.data;
        setSearchResults(results);
        setLoading(false);
      }
    } catch (error) {
      setError(true);
      if (errorRedirect) {
        return <Navigate to='*' replace />;
      }
    }
  };

  const handleTerm = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTerm(event.target.value);
  };

  const showNoResults = () => {
    if (searchResults.length === 0 && !loading) {
      return <NoResults>No Results</NoResults>;
    }
  };

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      getSearchResults();
    }, timer);

    return () => {
      clearTimeout(delaySearch);
      setSearchResults([]);
      setLoading(true);
    };
  }, [term]);

  return (
    <Container>
      <Input
        value={term}
        type='text'
        placeholder='Search for Movie'
        onChange={handleTerm}
      />
      <SearchFor>
        <SearchResult>
          Search for "<mark>{term}</mark>"
        </SearchResult>
      </SearchFor>
      {term && loading ? <Spinner /> : <SearchList items={searchResults} />}
      {showNoResults()}
    </Container>
  );
};

export default MovieSearch;

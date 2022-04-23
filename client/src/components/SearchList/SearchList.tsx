import React from 'react';
import { IMovie } from '../../schemas/Movie';
import {
  SearchResultContent,
  SearchResultRow,
  SearchResultImg,
  SearchResultImgBox,
  SearchResultItem,
  SearchResultLink,
  SearchResultList,
  SearchResultType,
} from './SearchList.styles';

interface ISearchResultsProps {
  items: IMovie[];
}

const SearchList: React.FC<ISearchResultsProps> = ({ items }) => {
  const renderSearchResults = () => {
    return items.map((item) => {
      return (
        <SearchResultItem key={item.id}>
          <SearchResultLink to={`/${item.title}/${item.id}`}>
            <SearchResultRow>
              <SearchResultImgBox>
                <SearchResultImg src={item.image} alt={item.title} />
              </SearchResultImgBox>
              <SearchResultContent>{item.title}</SearchResultContent>
              <SearchResultType>
                {item.description?.slice(0, 6)}
              </SearchResultType>
            </SearchResultRow>
          </SearchResultLink>
        </SearchResultItem>
      );
    });
  };
  return <SearchResultList>{renderSearchResults()}</SearchResultList>;
};

export default SearchList;

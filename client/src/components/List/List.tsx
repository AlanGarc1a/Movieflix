import React from 'react';
import { IMovie } from '../../schemas/Movie';
import { ListContainer, ListItem, ListTitle, ListHeader } from './List.styles';
import Card from '../Card/Card';

interface IListProps {
  itemsToDisplay?: number;
  items: IMovie[];
  title?: string;
}

const List: React.FC<IListProps> = ({ itemsToDisplay, items, title }) => {
  return (
    <>
      <ListHeader>
        <ListTitle>{title}</ListTitle>
      </ListHeader>
      <ListContainer>
        {items.slice(0, itemsToDisplay).map((item) => {
          return (
            <ListItem key={item.id}>
              <Card
                id={item.id}
                title={item.title}
                image={item.image}
                genres={item.genres}
                imDbRating={item.imDbRating}
              />
            </ListItem>
          );
        })}
      </ListContainer>
    </>
  );
};

export default List;

import { IActors } from './Actors';
import { ITrailer } from './Trailer';
import { IPosters } from './Posters';

export interface IMovie {
  id?: string;
  rank?: string;
  title?: string;
  year?: string;
  image?: string;
  description?: string;
  runtimeMins?: string;
  directors?: string;
  runtimeStr?: string;
  plot?: string;
  imDbRating?: string;
  imDbRatingVotes?: string;
  metacriticRating?: string;
  contentRating?: string;
  genres?: string;
  stars?: string;
  writers?: string;
  languages?: string;
  companies?: string;
  trailer?: ITrailer;
  actorList?: IActors[];
  posters?: IPosters[];
}

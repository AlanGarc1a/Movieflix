import React, { SetStateAction } from 'react';

export interface IUserProps {
  username?: string | null;
  isLoggedIn: boolean;
}

interface IContextProps {
  user?: IUserProps | null;
  setUser: React.Dispatch<SetStateAction<IUserProps>>;
}

const CurrentUserContext = React.createContext<IContextProps | null>(null);

export default CurrentUserContext;

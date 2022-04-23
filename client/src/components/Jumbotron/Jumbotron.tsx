import React from 'react';

import { Jumbo, JumboOverlay } from './Jumbotron.styles';

interface IJumbotronProps {
  bgImage?: string;
}

const Jumbotron: React.FC<IJumbotronProps> = ({ bgImage }) => {
  return (
    <Jumbo bgImage={bgImage}>
      <JumboOverlay></JumboOverlay>
    </Jumbo>
  );
};

export default Jumbotron;

import React from 'react';

import { DarkJumbo, Jumbo, JumboOverlay } from './Jumbotron.styles';

interface IJumbotronProps {
  bgImage?: string;
}

const Jumbotron: React.FC<IJumbotronProps> = ({ bgImage }) => {
  return (
    <>
      {bgImage === undefined ? (
        <DarkJumbo></DarkJumbo>
      ) : (
        <Jumbo bgImage={bgImage}>
          <JumboOverlay></JumboOverlay>
        </Jumbo>
      )}
    </>
  );
};

export default Jumbotron;

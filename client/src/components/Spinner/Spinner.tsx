import React from 'react';
import { SpinnerBox, SpinnerCircle, SpinnerContent } from './Spinner.styles';

const Spinner: React.FC = () => {
  return (
    <SpinnerContent>
      <SpinnerBox>
        <SpinnerCircle />
      </SpinnerBox>
    </SpinnerContent>
  );
};

export default Spinner;

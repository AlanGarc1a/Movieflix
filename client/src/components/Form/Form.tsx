import React from 'react';
import { SForm } from './Form.styles';

interface IFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<IFormProps> = ({ children, onSubmit }) => {
  return <SForm onSubmit={onSubmit}>{children}</SForm>;
};

export default Form;

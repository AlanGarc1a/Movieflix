import React from 'react';
import { TextField } from './Input.styles';

interface IInputProps {
  value: string;
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInputProps> = ({
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <>
      <TextField
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        aria-label='Type Movie'
      />
    </>
  );
};

export default Input;

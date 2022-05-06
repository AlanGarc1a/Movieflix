import React, { useContext, useState } from 'react';
import { SButton } from '../components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import {
  FormHeader,
  FormBackground,
  FormDiv,
  FormError,
} from '../components/Form/Form.styles';
import { FormInput } from '../components/Input/Input.styles';
import Form from '../components/Form/Form';
import axios, { AxiosError } from 'axios';
import CurrentUserContext from '../context/authContext';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  let navigate = useNavigate();

  const ctx = useContext(CurrentUserContext);

  if (!ctx) {
    return null;
  }

  const { setUser } = ctx;

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setUsername(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const existingUser = {
      username,
      password,
    };

    try {
      const res = await axios.post('/api/users/login', existingUser, {
        withCredentials: true,
      });

      if (res.status === 201) {
        setUser({
          username: res.data.existingUser.username,
          isLoggedIn: true,
        });
        navigate('/');
      }
    } catch (error) {
      const err = error as AxiosError;
      setError(true);
      setErrorMsg(err.response?.data.msg);
    }
  };

  return (
    <FormBackground>
      <Form onSubmit={submitHandler}>
        <FormHeader>
          Login<span></span>
          <div>
            New member?
            <Link to='/sign-up'>Sign Up</Link>
          </div>
        </FormHeader>
        {error ? <FormError>{errorMsg}</FormError> : <></>}
        <FormDiv>
          <FormInput
            value={username}
            type='text'
            placeholder='Username'
            onChange={handleUsername}
            aria-label='username'
          />
        </FormDiv>

        <FormDiv>
          <FormInput
            value={password}
            type='password'
            placeholder='Password'
            onChange={handlePassword}
            aria-label='password'
          />
        </FormDiv>
        <FormDiv>
          <SButton aria-label='submit'>Submit</SButton>
        </FormDiv>
      </Form>
    </FormBackground>
  );
};

export default Login;

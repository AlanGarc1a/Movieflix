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

const SignUp: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
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

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newUser = {
      email,
      username,
      password,
    };

    try {
      const res = await axios.post('/api/users/register', newUser, {
        withCredentials: true,
      });

      setUser({
        username: res.data.savedUser.username,
        isLoggedIn: true,
      });

      navigate('/');
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
          Create new account<span></span>
          <div>
            Already A Member?
            <Link to='/login'>Log in</Link>
          </div>
        </FormHeader>
        {error ? <FormError>{errorMsg}</FormError> : <></>}
        <FormDiv>
          <FormInput
            value={email}
            type='email'
            placeholder='Email'
            onChange={handleEmail}
            required
            aria-label='email'
          />
        </FormDiv>

        <FormDiv>
          <FormInput
            value={username}
            type='text'
            placeholder='Username'
            onChange={handleUsername}
            required
            aria-label='username'
          />
        </FormDiv>

        <FormDiv>
          <FormInput
            value={password}
            type='password'
            placeholder='Password'
            onChange={handlePassword}
            required
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

export default SignUp;

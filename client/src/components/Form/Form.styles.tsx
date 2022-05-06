import styled from 'styled-components';

export const SForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 45%;
  left: 48%;
  transform: translate(-50%, -50%);
  border-radius: 0.8rem;

  @media only screen and (max-width: 30em) {
    width: 100%;
    left: 50%;
    padding: 1rem;
  }
`;

export const FormHeader = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  margin: 0.5rem;
  color: var(--white);

  span {
    display: inline-block;
    background-color: var(--blue);
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    margin-left: 0.1rem;
  }

  div {
    font-size: 1.5rem;
    font-weight: 300;

    a {
      text-decoration: none;
      padding-left: 0.5rem;
      color: var(--blue);
    }
  }
`;

export const FormError = styled.div`
  text-align: center;
  color: red;
  font-size: 2rem;
`;

export const FormDiv = styled.div`
  margin: 1rem 1rem;

  &:not(:first-child) {
    margin-bottom: 2rem;
  }
`;

export const FormBackground = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    to right bottom,
    var(--primary),
    var(--secondary)
  );
  position: relative;
`;

import React, { useState, useContext } from 'react';
import { AuthContext } from '../components/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text
} from '../Signin/SigninElements';

const SignIn = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputs)
      });
      console.log(response);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      if (isAuthenticated) {
        navigate('/Landingpage');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Art Gallery</Icon>
          <FormContent>
            <Form onSubmit={handleSignIn}>
              <FormH1>Login in to your account</FormH1>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput
                type="email"
                required
                name="email"
                value={inputs.email}
                onChange={handleInputChange}
              />
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormInput
                type="password"
                required
                name="password"
                value={inputs.password}
                onChange={handleInputChange}
              />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;

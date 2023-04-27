import React, { useState } from 'react';
import axios from 'axios';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from '../Signin/SigninElements';

const SignIn = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });

  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/login', {
        email: inputs.email,
        password: inputs.password
      });
      const data = res.data;
      console.log(data);
      if (data.status === 'success') {
         console.log('success');

        // handle successful signin here
      }
      // handle successful signin here
    } catch (err) {
      if (err.response) {
        if (err.response.status === 400) {
          setIsEmailError(true);
          setIsPasswordError(true);
        } else if (err.response.status === 401) {
          setIsPasswordError(true);
        }
      } else {
        console.log(err);
      }
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
                autocomplete="email"
                className={isEmailError ? 'error' : ''}
              />
              {isEmailError && (
                <Text color="#ff0000">Invalid email or password</Text>
              )}
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormInput
                type="password"
                required
                name="password"
                value={inputs.password}
                onChange={handleInputChange}
                autocomplete="current-password"
                className={isPasswordError ? 'error' : ''}
              />
              {isPasswordError && (
                <Text color="#ff0000">Invalid email or password</Text>
              )}
              <FormButton type="submit">Continue</FormButton>
              <Text>Don't have an account?</Text>
              <Text>
                <a href="/signup">Sign up</a>
              </Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;

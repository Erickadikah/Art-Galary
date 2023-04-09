import React from 'react';
import  {useNavigate} from 'react-router-dom';
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from '../Signin/SigninElements';

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = (event) => {
    event.preventDefault(); // Prevent form submission

    // Perform sign-in logic here
    // ...

    // Redirect to home page
    navigate('/');
  };

  return (
    <>
    <Container>
      <FormWrap>
        <Icon to="/">Art Gallary</Icon>
        <FormContent>
          <Form onSubmit={handleSignIn}>
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" required />
            <FormButton type="submit">Continue</FormButton>
            <Text>Forgot password</Text>
            </Form>
        </FormContent>
      </FormWrap>
    </Container>
    </>
  );
}

export default SignIn;

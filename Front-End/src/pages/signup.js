import React, { useState, useContext } from 'react';
import { AuthContext } from '../components/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
import { useDispatch } from 'react-redux';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    console.log(inputs);
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputs)
      }).then(() =>navigate('/Landingpage'));
      console.log(response);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
        // Update UI with data from backend
      if (isAuthenticated) {
  dispatch({ type: 'LOGIN', payload: data })
    .then((data) => localStorage.setItem('userId', data.user._id))
    .then(() => navigate('/Landingpage'));
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
            <Form onSubmit={handleSignUp}>
              <FormH1>Create New account</FormH1>
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormInput
                type="name"
                required
                name="name"
                value={inputs.name}
                onChange={handleInputChange}
              />
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
              <Text>Already have an account login 
              <Link to='/SignIn'>Login</Link>
              </Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
  };

export default SignUp;
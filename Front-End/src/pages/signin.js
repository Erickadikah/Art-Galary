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
import axios from 'axios';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  });

  console.log('isAuthenticated', isAuthenticated);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };
  const sendRequest = async (e) => {
  try {
    const res = await axios.post("http://localhost:5000/api/user/login", {
      email: inputs.email,
      password: inputs.password
    });
    const data = res.data;
    localStorage.setItem('userId', data.user._id);
    return data;
  } catch (error) {
    console.log(error);
    navigate('/Landingpage');
  }
};
  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(inputs);
    const data = await sendRequest();
    if (data && data.status === 'success') {
        navigate('/Landingpage');
      console.log('navigate to landing page');
    }
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Art Gallery</Icon>
          <FormContent>
            <Form onSubmit={handleSignUp}>
              <FormH1>Login</FormH1>
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
              <Text>Dont have an account login 
              <Link to='/signup'>SignUp</Link>
              </Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;

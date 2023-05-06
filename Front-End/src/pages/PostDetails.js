import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import {
  Box,
  InputLabel,
  TextField,
  Typography,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PostDetails = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then((data) => console.log(data)).then(() => navigate('/UserPosts'));
  };

  const fetchDetails = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/post/${id}`);
      const { post: data } = res.data;
      setPost(data);
      setInputs({
      title: data.title,
      description: data.description,
      price: data.price,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const sendRequest = async () => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/post/update/${id}`,
        {
          price: inputs.price,
          title: inputs.title,
          description: inputs.description,
        }
      ).catch(err => console.log(err));
      const data = await res.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [id]);

  return (
    <div>
      {post && (
        <form onSubmit={handleSubmit}>
          <Box
            border={1}
            borderColor="#01BF71"
            borderRadius={2.5}
            display="flex"
            margin="auto"
            marginTop={5}
            flexDirection="column"
            width="100%"
            padding={10}
          >
            <Typography
              fontWeight="semi-bold"
              padding={0}
              variant="h5"
              textAlign="center"
            >
              Edit Product
            </Typography>
            <InputLabel sx={{ mb: 1, mt: 2, fontSize: '24' }}>Title</InputLabel>
            <TextField
              margin="auto"
              variant="outlined"
              name="title"
              onChange={handleChange}
              value={inputs.title}
            />
            <InputLabel sx={{ mb: 1, mt: 2, fontSize: '24' }}>
              Description
            </InputLabel>
            <TextField
              margin="auto"
              variant="outlined"
              name="description"
              onChange={handleChange}
              value={inputs.description}
            />
            <InputLabel sx={{ mb: 1, mt: 2, fontSize: '24' }}>Price</InputLabel>
            <TextField
              margin="auto"
              variant="outlined"
              name="price"
              onChange={handleChange}
              value={inputs.price}
            />
            <Button
              variant="contained"
              color="success"
              sx={{ mb: 1, mt: 2, fontSize: '24', borderRadius: 4 }}
              type="submit"
            >
              Update Product
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default PostDetails;

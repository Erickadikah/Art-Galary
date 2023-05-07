import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
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
    sendRequest().then((data) => console.log(data)).then(() => navigate('/UserPosts')).then (() => window.location.reload());
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
          <Card sx={{ minWidth: 200, marginTop: 5 , padding: 10}}>
            <CardHeader
              title="Edit Product"
              sx={{ textAlign: 'center', backgroundColor: '#01BF71' }}
              titleTypographyProps={{ fontWeight: 'semi-bold' }}
            />
            <CardContent>
              <InputLabel sx={{ mb: 1, fontSize: 24 }}>Title</InputLabel>
              <TextField
                margin="normal"
                fullWidth
                variant="outlined"
                name="title"
                onChange={handleChange}
                value={inputs.title}
              />
              <InputLabel sx={{ mb: 1, fontSize: 24 }}>
                Description
              </InputLabel>
              <TextField
                margin="normal"
                fullWidth
                variant="outlined"
                name="description"
                onChange={handleChange}
                value={inputs.description}
              />
              <InputLabel sx={{ mb: 1, fontSize: 24 }}>Price</InputLabel>
              <TextField
                margin="normal"
                fullWidth
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
            </CardContent>
          </Card>
        </form>
      )}
    </div>
  );
};

export default PostDetails;


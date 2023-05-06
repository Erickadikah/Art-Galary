import { InputLabel, TextField, Typography, Box, Button } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import axios from 'axios'

const AddPost = () => {
  const [inputs, setInputs] = useState({
    title: '',
    description: '',
    imageURL: '',
    price: '',
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async () => {
    const res = await axios.post("http://localhost:5000/api/post/add", {
      title:inputs.title,
      description:inputs.description,
      image:inputs.imageURL,
      price:inputs.price,
      user: localStorage.getItem("userId")
    }).catch(err => console.log(err))
    const data = await res.data;
    return data
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(data=> console.log(data))
  };

  return (
    <div>
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
            Add Product
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
          <InputLabel sx={{ mb: 1, mt: 2, fontSize: '24' }}>Image URL</InputLabel>
          <TextField
            margin="auto"
            variant="outlined"
            name="imageURL"
            onChange={handleChange}
            value={inputs.imageURL}
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
            sx={{ mb: 1, mt: 2, fontSize: '24', borderRadius:4}}
            type="submit"
          >
            Add Product
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default AddPost;


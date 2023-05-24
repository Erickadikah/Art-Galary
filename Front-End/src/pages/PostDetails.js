import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardHeader,
  InputLabel,
  TextField,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PostDetails = () => {
  const navigate = useNavigate();
  const [post] = useState(null);
  const { id } = useParams();
  const [inputs, setInputs] = useState({});
  const [setIsLoading] = useState(false);
  const [setUser] = useState(null);

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

  const sendRequest = async () => {
    try {
      const res = await axios.put(
        `https://art-gallery-api-g2ca.onrender.com/api/post/update/${id}`,
        {
          price: inputs.price,
          title: inputs.title,
          description: inputs.description,
        }
      ).catch(err => console.log(err)).alert("Product Updated");
      const data = await res.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  };

useEffect(() => {
  const fetchDetails = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`https://art-gallery-api-g2ca.onrender.com/api/user/${id}`);
      const data = await res.data;
      setUser(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  fetchDetails();
}, [id, setIsLoading, setUser]);

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

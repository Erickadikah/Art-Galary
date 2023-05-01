import { InputLabel, TextField, Typography, Box, Button} from '@mui/material'
import React from 'react'
import { useState } from 'react'

const AddPost = () => {
   const [inputs, setInputs] = useState({
    title: '',
    descripton: '',
    imageURL: '',
    Price: '',
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      setInputs: {
        ...prevState,
        [e.target.name]: e.target.value,
      },
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box border={3} 
        borderColor="#01BF71" 
        borderRadius={2.5} 
        display='flex'
        margin={'auto'}
        marginTop={5}
        flexDirection={'column'} 
        width={'90%'}>
        <Typography fontWeight={'semi-bold'} padding={3} variant={'h5'} textAlign={'center'}>Add Product</Typography>
        <InputLabel name='title' onChange={handleChange} value={inputs.title} sx={{mb:1, mt:2, fontSize: '24'}}>Title</InputLabel>
        <TextField margin='auto' variant='outlined' />
        <InputLabel  name='description' onChange={handleChange} value={inputs.descripton} sx={{mb:1, mt:2, fontSize: '24'}}>Description</InputLabel>
        <TextField margin='auto' variant='outlined'/>
        <InputLabel  name='imageURL' onChange={handleChange} value={inputs.imageURL} sx={{mb:1, mt:2, fontSize: '24'}}>imageURL</InputLabel>
        <TextField margin='auto' variant='outlined'/>
        <InputLabel  name='Price' onChange={handleChange} value={inputs.Price} sx={{mb:1, mt:2, fontSize: '24'}}>Price</InputLabel>
        <TextField margin='auto' variant='outlined'/>
        <Button variant='contained' color='success' sx={{mb:1, mt:2, fontSize: '24'}} type="submit">Add Product</Button>
        </Box>
      </form>
    </div>
  )
}

export default AddPost

import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import { Card, 
  CardHeader, 
  CardMedia,
  CardContent, 
  CardActions, 
  Avatar, 
  IconButton, 
  Typography, 
  Box,
  Button,
  TextField
  } from '@mui/material';
import { AddCircle } from '@mui/icons-material';

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
    sendRequest().then(data=> console.log(data)).then(()=> window.location.reload())
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Card sx={{ maxWidth: 600, margin: 'auto', marginTop: 5 }}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe">
                <AddCircle />
              </Avatar>
            }
            title="Add Product"
            sx={{ textAlign: 'center' }}
          />
          <CardMedia
            component="img"
            height="300"
            image={inputs.imageURL}
            alt={inputs.title}
            sx={{ objectFit: 'cover' }}
          />
          <CardContent>
            <TextField
              id="title"
              label="Title"
              name="title"
              value={inputs.title}
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="description"
              label="Description"
              name="description"
              value={inputs.description}
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="imageURL"
              label="Image URL"
              name="imageURL"
              value={inputs.imageURL}
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="price"
              label="Price"
              name="price"
              value={inputs.price}
              onChange={handleChange}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </CardContent>
          <CardActions disableSpacing>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton aria-label="add to favorites">
              <AddCircle />
            </IconButton>
            <Button
              variant="contained"
              color="success"
              sx={{ borderRadius: 4 }}
              type="submit"
            >
              Add Product
            </Button>
          </CardActions>
        </Card>
      </form>
    </div>
  );
};

export default AddPost;


// import { InputLabel, TextField, Typography, Box, Button } from '@mui/material';
// import React from 'react';
// import { useState } from 'react';
// import axios from 'axios'
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles({
//   formContainer: {
//     border: '1px solid #01BF71',
//     borderRadius: '2.5px',
//     display: 'flex',
//     margin: 'auto',
//     marginTop: '5rem',
//     flexDirection: 'column',
//     width: '100%',
//     padding: '10px',
//   },
//   formTitle: {
//     fontWeight: 'semi-bold',
//     padding: 0,
//     fontSize: '1.5rem',
//     textAlign: 'center',
//   },
//   formInput: {
//     marginBottom: '1rem',
//     marginTop: '2rem',
//     fontSize: '1rem',
//   },
//   formButton: {
//     marginBottom: '1rem',
//     marginTop: '2rem',
//     fontSize: '1rem',
//     borderRadius: '4px',
//   },
// });

// const AddPost = () => {
//   const classes = useStyles();
//   const [inputs, setInputs] = useState({
//     title: '',
//     description: '',
//     imageURL: '',
//     price: '',
//   });

//   const handleChange = (e) => {
//     setInputs((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const sendRequest = async () => {
//     const res = await axios.post("http://localhost:5000/api/post/add", {
//       title:inputs.title,
//       description:inputs.description,
//       image:inputs.imageURL,
//       price:inputs.price,
//       user: localStorage.getItem("userId")
//     }).catch(err => console.log(err))
//     const data = await res.data;
//     return data
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(inputs);
//     sendRequest().then(data=> console.log(data)).then(()=> window.location.reload())
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <Box className={classes.formContainer}>
//           <Typography className={classes.formTitle}>
//             Add Product
//           </Typography>
//           <InputLabel className={classes.formInput}>Title</InputLabel>
//           <TextField
//             className={classes.formInput}
//             variant="outlined"
//             name="title"
//             onChange={handleChange}
//             value={inputs.title}
//           />
//           <InputLabel className={classes.formInput}>
//             Description
//           </InputLabel>
//           <TextField
//             className={classes.formInput}
//             variant="outlined"
//             name="description"
//             onChange={handleChange}
//             value={inputs.description}
//           />
//           <InputLabel className={classes.formInput}>Image URL</InputLabel>
//           <TextField
//             className={classes.formInput}
//             variant="outlined"
//             name="imageURL"
//             onChange={handleChange}
//             value={inputs.imageURL}
//           />
//           <InputLabel className={classes.formInput}>Price</InputLabel>
//           <TextField
//             className={classes.formInput}
//             variant="outlined"
//             name="price"
//             onChange={handleChange}
//             value={inputs.price}
//           />
//           <Button
//             className={classes.formButton}
//             variant="contained"
//             color="success"
//             type="submit"
//           >
//             Add Product
//           </Button>
//         </Box>
//       </form>
//     </div>
//   );
// };

// export default AddPost;

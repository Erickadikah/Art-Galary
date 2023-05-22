import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { Box, CircularProgress, Card, CardContent, Typography, Avatar, Button } from '@mui/material';
// import UserPosts from '../components/UserPosts';
import UserPosts from './UserPosts';
const UserProfile = () => {
  const [ProfileImage, setProfileImage] = useState({ myFile : "" })
  const [user, setUser] = useState();
  const id = localStorage.getItem('userId');
  const [isLoading, setIsLoading] = useState(false);
  // const [userAvatar, setUserAvatar] = useState(null);
  // const [uploadedImageUrl, setUploadedImageUrl] = useState(null);

  const sendRequest = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`http://localhost:5000/api/user/${id}`);
      const data = await res.data;
      setIsLoading(false);
      return data;
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      return null;
    }
  }, [id]);

  useEffect(() => {
    sendRequest().then((data) => setUser(data.user));
  }, [sendRequest]);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
        <CircularProgress />
      </Box>
    );
  }

  // const handleFileUpload = async (e, userId) => {
  //   e.preventDefault();

  //   // Get the user's selected avatar image file
  //   const avatarImage = userAvatar;

  //   // Create a new FormData object and append the avatar image file
  //   // const formData = new FormData();
  //   // formData.append('avatar', avatarImage);
  //   // formData.append('id', id);

  //   // Send the POST request to update the user's profile picture
  //   try {
  //     setIsLoading(true);
  //     alert('sending data')
  //     const res = await axios.post(`http://localhost:5000/api/post/user/avatar`, {
  //       avatar:avatarImage,
  //       id:id
  //     }
 
  //     );
  //     const data = await res.data;
  //     setIsLoading(false);
  //     setUploadedImageUrl(data.user.avatarUrl);
  //     setUser(data.user._id);
  //   } catch (error) {
  //     console.log(error);
  //     setIsLoading(false);
  //   }
  // };
  const url = "http://localhost:5000/uploads"

  const createProfile = async (newImage) => {
    try {
        await axios.post(url, newImage)
    }catch(error) {
      console.log(error)
    }
  }


  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file.size > 10 * 1024 * 1024) {
      console.log("File too large")
      return
    }
    const base64 = await convertToBase64(file)
    setProfileImage({...ProfileImage, myFile : base64 })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    createProfile(ProfileImage)
    console.log("ProfileImage uploaded")
  };
  // const handleFileUpload = async (e) => {
  //   const file = e.target;
  // }

  return (
    <>
    <Card>
      <CardContent>
        {user ? (
          <div style={{color: 'black', alignItems: 'center'}}>
          <Avatar src={ ProfileImage.myFile || user.avatarUrl} sx={{ width: 150, height: 200, margin: '0 auto' }} />
            <Typography variant="h4" sx={{ textAlign: 'center'}}>{user.name}</Typography>
            <Typography variant="h6" sx={{ textAlign: 'center'}}>{user.email}</Typography>
            <input type="file" name="profile" accept="image/*" onChange={ (e) => handleFileUpload(e)} />
            <Button variant="contained" onClick={handleSubmit}>add Profile Picture</Button>
          </div>
        ) : (
          <Typography variant="body1" sx={{ textAlign: 'center' }}>Loading...</Typography>
        )}
      </CardContent>
    </Card>
      <div>
      <h1 style={{color: 'white', textAlign: 'center' }}>My Products</h1>
        <UserPosts />
      </div>
    </>
  );
};

export default UserProfile;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => resolve(fileReader.result.split(',')[1]);
    fileReader.onerror = (error) => reject(error);
  });
}

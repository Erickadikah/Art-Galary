import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, CircularProgress, Card, CardContent, Typography, Avatar } from '@mui/material';

const UserProfile = () => {
  const [user, setUser] = useState();
  const id = localStorage.getItem('userId');
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = async () => {
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
  };

  useEffect(() => {
    sendRequest().then((data) => setUser(data.user));
  }, []);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
     <Card>
      <CardContent>
        {user ? (
          <div style={{color: 'black', alignItems: 'center'}}>
            <Avatar src={user.avatarUrl} sx={{ width: 200, height: 200, margin: '0 auto' }} />
            <Typography variant="h4" sx={{ textAlign: 'center'}}>{user.name}</Typography>
            <Typography variant="h6" sx={{ textAlign: 'center'}}>{user.email}</Typography>
          </div>
        ) : (
          <Typography variant="body1" sx={{ textAlign: 'center' }}>Loading...</Typography>
        )}
      </CardContent>
    </Card>
  );
};


export default UserProfile;

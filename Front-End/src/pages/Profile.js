import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { Box, CircularProgress} from '@mui/material';
import { Avatar, Text, Button, Paper } from '@mantine/core';
import UserPosts from './UserPosts';
const UserProfile = () => {
  const [user, setUser] = useState(null);
  const id = localStorage.getItem('userId');
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`https://art-gallery-api-g2ca.onrender.com/api/user/${id}`);
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

  return (
    <>
    <div>
      {user && (
        <Paper
          radius="md"
          withBorder
          p="lg"
          sx={(theme) => ({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
          })}
        >
          <Avatar src='https://images.unsplash.com/photo-1685391317670-8fdb5382a492?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60' size={120} radius={120} mx="auto" />
          <Text ta="center" fz="lg" weight={500} mt="md">
            {user.name}
          </Text>
          <Text ta="center" c="dimmed" fz="sm">
            {user.email}
          </Text>

          <Button variant="default" fullWidth mt="md">
            Send message
          </Button>
        </Paper>
        )}
        </div>
        <div>
        <UserPosts />
      </div>
    </>
  );
};

export default UserProfile;

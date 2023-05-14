import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Postify from './Componentpost';
import { Box, CircularProgress } from '@mui/material';

const PostComp = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading,setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    const sendRequest = async () => {
      try {
        setisLoading(true);
        const response = await axios.get('http://localhost:5000/api/posts');
        const data = await response.data;
        setPosts(data.posts);
        setisLoading(false);
      } catch (error) {
        console.log(error);
        setisLoading(false);
        return null;
      }
    };
    sendRequest();
  }, []);

  console.log(posts);
  if(isLoading) return (
    <Box>
        <CircularProgress />
      </Box>
  )

  return (
   <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px'}}>
  {posts && posts.map((post, index) => (
    <Postify
      id={post._id}
      isUser={localStorage.getItem("userId") === post.user._id}
      imageURL={post.image}
      description={post.description && post.description.substring(0, 100)} 
      userName={post.user && post.user.name} 
      price={post.price} 
      title={post.title}
      key={index}
      style={{ flexBasis: 'calc(100% / 2)', maxWidth: 'calc(100% /2)', margin: '10px' }}
    />
  ))}
</div>
  );
};

export default PostComp;

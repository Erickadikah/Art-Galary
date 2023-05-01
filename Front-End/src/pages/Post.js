import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Postify from './Componentpost';

const PostComp = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts');
        const data = await response.data;
        setPosts(data.posts);
      } catch (error) {
        console.log(error);
      }
    };
    sendRequest();
  }, []);

  console.log(posts);

  return (
    <div>
     {posts && posts.map((post, index) => (
        <Postify 
        imageURL={post.imageURL}
        description={post.description && post.description.substring(0, 100)} 
        userName={post.user && post.user.name} 
        price={post.price} 
        title={post.title}
        />
      ))}
    </div>
  );
};

export default PostComp;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Postify from './Componentpost';

const UserPosts = () => {
  const [posts, setPosts] = useState();
  const id = localStorage.getItem('userId');

  const sendRequest = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/post/${id}`);
      const data = res.data;
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  useEffect(() => {
    sendRequest().then((data) => {
      setPosts(data.posts.posts);
    });
  }, []);
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

export default UserPosts;

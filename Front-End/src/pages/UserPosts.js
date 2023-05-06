import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Postify from './Componentpost';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const UserPosts = () => {
   const [user, setUser] = useState();  
  const id = localStorage.getItem('userId');
  const [isLoading,setisLoading] = useState(false);

  const sendRequest = async () => {
    try {
      setisLoading(true);
      const res = await axios.get(`http://localhost:5000/api/post/user/${id}`)
      .catch(err => console.log(err));
      const data = await res.data;
      setisLoading(false)
      return data;
    } catch (error) {
      console.log(error);
      setisLoading(false);
      return null;
    }
  };

  useEffect(() => {
    sendRequest().then((data) => setUser(data.user));
},[]);
console.log(user);
if(isLoading) return (
  <Box sx={{ display: 'flex' ,justifyContent:'center',padding:'2rem'}}>
      <CircularProgress />
    </Box>
)
  return (
   <div>
   {" "}
   {user &&
     user.posts &&
     user.posts.map((blog, index) => (
      
    <Postify 
      key={index}
      isUser={true}
      id={blog._id}
      title={blog.title}
      price={blog.price}
description={blog.description && blog.description.substring(0, 700)}
      imageURL={blog.image}
      userName={user.name}
    />
  
   ))}
   </div>
  
  );
};

export default UserPosts;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Postify from './Componentpost';

// const UserPosts = () => {
//   const [posts, setPosts] = useState();
//   const [error, setError] = useState(null);
//   const id = localStorage.getItem('userId');

//   const sendRequest = async () => {
//     try {
//       const res = await axios.get(`http://localhost:5000/api/post/user/${id}`);
//       const data = res.data;
//       return data;
//     } catch (error) {
//       console.log(error);
//       throw new Error('Error Fetching posts..')
//     }
//   };

//   useEffect(() => {
//     sendRequest().then((data) => {
//       if (data && data.posts)
//       setPosts(data.posts.posts);
//     })
//     .catch((error) => {
//       setError(error.message);
//     });
//   }, []);

//   return (
//     <div>
//     {error && <div>{error}</div>}
//     {posts &&
//       posts.map((post, index) => (
//         <Postify
//          imageURL={post.image}
//           description={post.description && post.description.substring(0, 100)}
//           userName={post.user && post.user.name}
//           price={post.price}
//           title={post.title}
//           key={index} 
//         />
//       ))}
//     </div>
//   );
// };

// export default UserPosts;


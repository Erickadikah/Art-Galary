import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import SignupPage from "./pages/signup";
import { AuthProvider } from "./components/AuthContext";
import {
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import Landingpage from "./pages/Landingpage";
import Post from "./pages/Post";
import PostDetails from "./pages/PostDetails";
import UserPosts from "./pages/UserPosts";
import AddPost from "./pages/AddPost";
// import { useSelector } from "react-redux";
import { useEffect } from "react";
import Profile from "./pages/Profile";
import { useState } from "react";


function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("userId")) {
      setIsLoggedin(true);
    }
  }, []);
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/signin" element={<SigninPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/PostDetails" element={<PostDetails />} />
          <Route path="/UserPosts" element={<UserPosts />} />
          <Route path="/LandingPage" element={<Landingpage />} />
          <Route path="/myPosts/:id" element={<PostDetails />} />
          <Route path="/posts/add" element={<AddPost />} />
          <Route path="/Profile" element={<Profile />} />
    </Routes>
    {isLoggedin ? <p>Wecome back</p> : null}
  </Router>
</AuthProvider>
  );
}

export default App;

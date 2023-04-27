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
import { useSelector } from "react-redux";


function App() {
  const isLoggedin = useSelector((state) => state.isLoggedin);
  console.log(isLoggedin);
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/posts" element={<Post />} />
        <Route path="/PostDetails" element={<PostDetails />} />
        <Route path="/UserPosts" element={<UserPosts />} />
        <Route path="/LandingPage" element={<Landingpage />} />
        <Route path="/myPosts/:id" element={<PostDetails />} />
        <Route path="/posts/add" element={<AddPost />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;

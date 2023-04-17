import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import SignupPage from "./pages/signup";
import {
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;

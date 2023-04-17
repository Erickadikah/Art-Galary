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

function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/LandingPage" element={<Landingpage />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;

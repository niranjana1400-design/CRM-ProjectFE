import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Register from "./Components/Register";
import Login from "./Components/Login";
import Userdata from "./Components/Userdata";
import Navbar from "./Components/Navbar";
import Reports from "./Components/Reports";
import Profile from "./Components/Profile";
import Settings from "./Components/Settings";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Userdata />} />
        <Route path="/" element={<Login />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
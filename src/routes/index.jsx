import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
// import { ToastContainer } from 'react-toastify'
import Login from "../pages/Login";
import Register from "../pages/Register";
import Layout from "../container/layout";
import Layout2 from "../container/layout2";
import Client from "../pages/Client";
import Server from "../pages/Server";
import Blockchain from "../pages/Blockchain";
import Portfolio from "../pages/Portfolio";
import About from "../pages/About";
import ConfirmPassword from "../pages/Password/ConfirmPassword";
import VerifyOtp from "../pages/Password/VerifyOtp";

const Routepath = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home/>} />
        <Route path="/client" element={<Client/>} />
        <Route path="/server" element={<Server/>} />
        <Route path="/blockchain" element={<Blockchain/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/about" element={<About/>} />
      </Route>
      <Route path="/" element={<Layout2 />}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/confirm-password" element={<ConfirmPassword />} />
      <Route path="/verify-otp" element={<VerifyOtp />} />
      </Route>
    </Routes>
  );
};

export default Routepath;

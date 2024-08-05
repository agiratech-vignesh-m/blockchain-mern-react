import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
// import { ToastContainer } from 'react-toastify'
import Login from "../pages/Login";
import Register from "../pages/Register";
import Layout from "../container/layout";
import Layout2 from "../container/layout2";

const Routepath = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home/>} />
      </Route>
      <Route path="/" element={<Layout2 />}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default Routepath;

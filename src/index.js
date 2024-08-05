import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { GoogleOAuthProvider } from '@react-oauth/google';

const GoogeClientID = process.env.REACT_APP_GOOGLE_CLIENTID
console.log("GoogeClientID", GoogeClientID)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <GoogleOAuthProvider clientId={GoogeClientID}>
  <ToastContainer/>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </GoogleOAuthProvider>
  </>
);

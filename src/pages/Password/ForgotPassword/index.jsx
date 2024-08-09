import React, { useState } from "react";
import "./forgotPassword.css";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ForgotPassword = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const errorMessage = validateForm(email);
    setErrors(errorMessage);

    if (Object.keys(errorMessage).length === 0) {
      navigate('/verify-otp');
    }
  };

  const handleErrorChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Clear error message when input data changes
    if (errors.email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
    }
  };

  const validateForm = (email) => {
    const errors = {};
    if (!email?.trim()) {
      errors.email = "*Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "*Email is invalid";
    }
    return errors;
  };

  return (
    <div className="forgot-email-main">
      <div className="forgot-email-container">
        <div className="forgot-email-header">
          <h1>Forgot Password</h1>
          <p>
            Enter your registered email address and we'll send you a otp to
            reset your password
          </p>
        </div>
        <div className="forgot-email-form">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleErrorChange}
            required
          />
          {errors.email && (
            <span className="login-error-message">{errors.email}</span>
          )}
        </div>
        <div className="forgot-email-button">
          <button 
          disabled={!email}
          onClick={handleSubmit}>Continue</button>
        </div>
        <div className="forgot-email-footer">
          <Link className="forgot-email-footer-link" to="/login">
            <FaArrowLeft
              style={{
                width: "15px",
                height: "12px",
                marginRight: "10px",
              }}
            />
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

// Form.js
import React, { useState } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import PasswordStrengthBar from "react-password-strength-bar";
import { FaRegEye, FaEyeSlash } from "react-icons/fa6";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [apiError, setApiError] = useState(false);
  const [apiErrorMessage, setApiErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm(formData);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      fetch("http://localhost:8000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Response Data", data);
        })
        .catch((error) => {
          setApiError(!apiError);
          setApiErrorMessage(error.message);
          console.log("Error", error);
        });
    } else {
      console.log("Form submission failed due to validation errors.");
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.firstName?.trim()) {
      errors.firstName = "*First name is required";
    } else if (data.firstName.length < 4) {
      errors.firstName = "*First name must be at least 4 characters long";
    } else if (data.firstName.length > 15) {
      errors.firstName = "*First name must be at least 4 characters long";
    }

    if (!data.lastName?.trim()) {
      errors.lastName = "*Last name is required";
    } else if (data.lastName.length < 4) {
      errors.lastName = "*Last name must be at least 4 characters long";
    } else if (data.lastName.length > 15) {
      errors.lastName = "*Last name must be at least 4 characters long";
    }

    if (!data.email?.trim()) {
      errors.email = "*Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "*Email is invalid";
    }

    if (!data.password) {
      errors.password = "*Password is required";
    } else if (data.password.length < 8) {
      errors.password = "*Password must be at least 8 characters long";
    }

    if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "*Passwords do not match";
    } else {
      console.log("Form submission failed due to validation errors.");
    }

    return errors;
  };

  return (
    <div className="form-container">
      <div className="form">
        <h2 className="form-title">Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="first-form">
            <div className="first-form-1">
              <label className="form-label">First Name:</label>
              <input
                className="form-input"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <span className="error-message">{errors.firstName}</span>
              )}
            </div>
            <div className="first-form-1">
              <label className="form-label">Last Name:</label>
              <input
                className="form-input"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <span className="error-message">{errors.lastName}</span>
              )}
            </div>
          </div>

          <div className="form-1">
            <label className="form-label">Email:</label>
            <input
              className="form-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>
          <div className="form-1">
            <label className="form-label">Password:</label>
            <div className="form-input-password">
              <input
                className="form-input-pwd-1"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <span
                className="password-span"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEyeSlash color="#030637" fontSize="1.2rem" />
                ) : (
                  <FaRegEye color="#030637" fontSize="1.2rem" />
                )}
              </span>
            </div>
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
            <PasswordStrengthBar
              style={{ marginTop: "0.5rem" }}
              password={formData?.password}
            />
          </div>
          <div className="form-1">
            <label className="form-label">Confirm Password:</label>
            <div className="form-input-password">
              <input
                className="form-input-pwd-1"
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <span
                className="password-span"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <FaEyeSlash color="#030637" fontSize="1.2rem" />
                ) : (
                  <FaRegEye color="#030637" fontSize="1.2rem" />
                )}
              </span>
            </div>
            {errors.confirmPassword && (
              <span className="error-message">{errors.confirmPassword}</span>
            )}
          </div>
          {apiError && <span className="api-error-message">{apiErrorMessage}</span>}
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>

        <div className="footer">
          <p style={{ color: "#030637" }}>Already have an account?</p>
          <Link style={{ color: "#910A67" }} to="/login">
            Sign in.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;

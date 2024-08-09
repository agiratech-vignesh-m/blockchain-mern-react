import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { FaRegEye, FaEyeSlash } from "react-icons/fa6";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
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
      fetch(`http://localhost:9000/user?email=${formData.email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify(formData),
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
    if (!data.email?.trim()) {
      errors.email = "*Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "*Email is invalid";
    }

    if (!data.password) {
      errors.password = "*Password is required";
    }
    return errors;
  };

  return (
    <div className="login-form-container">
      <div className="login-form">
        <h2 className="login-form-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="login-form-1">
            <label className="login-form-label">Email:</label>
            <input
              className="login-form-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className="login-error-message">{errors.email}</span>
            )}
          </div>
          <div className="login-form-1">
            <label className="login-form-label">Password:</label>
            <div className="login-form-input-password">
              <input
                className="login-form-input-pwd-1"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <FaEyeSlash color="#030637" fontSize="1.2rem" />
                ) : (
                  <FaRegEye color="#030637" fontSize="1.2rem" />
                )}
              </span>
            </div>
            {errors.password && (
              <span className="login-error-message">{errors.password}</span>
            )}
          </div>
          <div
            style={{
              marginBottom: "1rem",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Link style={{ color: "#910A67" }} to="/forgot-password">
              Forget password?
            </Link>
          </div>
          {apiError && (
            <span className="api-error-message">{apiErrorMessage}</span>
          )}
          <button className="login-submit-button" type="submit">
            Submit
          </button>
        </form>

        <div className="login-footer">
          <p style={{ color: "#030637" }}>New to Checkmate?</p>
          <Link style={{ color: "#910A67" }} to="/register">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;

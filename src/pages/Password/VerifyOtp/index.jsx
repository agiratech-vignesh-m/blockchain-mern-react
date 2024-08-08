import React, { useState } from "react";
import "./verifyOtp.css";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(59)

  const handleResendOtp = () => {};
  return (
    <div className="login-form-container">
      <div className="verify-otp">
        <h1 className="verify-otp-title">Verify OTP</h1>
        <p>We've sent a code to your email Id</p>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
          containerStyle="otp-container"
          inputStyle="otp-input"
          isInputNum={true}
          shouldAutoFocus
        />

        <div className="verify-otp-footer">
          <div>
            <p style={{ color: "#030637" }}> Time remaining:</p>
          </div>
          <div>
            <Link style={{ color: "#910A67" }} onClick={handleResendOtp}>
              Resend OTP
            </Link>
          </div>
        </div>
        <button className="verify-otp-button">Verify</button>
      </div>
    </div>
  );
};

export default VerifyOtp;

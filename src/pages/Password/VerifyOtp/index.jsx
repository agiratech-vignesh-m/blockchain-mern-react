import React, { useEffect, useState } from "react";
import "./verifyOtp.css";
import OtpInput from "react-otp-input";
import { Link, useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(30);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      // Decrease seconds if greater than 0
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      // When seconds reaches 0, decrease minutes if greater than 0
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          // Reset seconds to 59 and decrease minutes by 1
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
      if (minutes > 0) {
      }
    }, 1000);
    return () => {
      // Cleanup: stop the interval when the component unmounts
      clearInterval(interval);
    };
  }, [seconds]); // Rerun this effect whenever 'seconds changes

  const handleResendOtp = () => {
    console.log("Resend OTP clicked")
    setMinutes(1);
    setSeconds(30);
  };

  const handleVerifyOtp = () => {
    console.log("Verify OTP clicked")

    navigate('/login')
  }
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
            <p style={{ color: "#030637" }}>
              Time remaining:
              <span className="span"
                style={{
                  fontWeight: 600,
                  fontSize: "medium",
                }}
              >
                {minutes < 10 ? `0${minutes}` : minutes}:
                {seconds < 10 ? `0${seconds}` : seconds}
              </span>
            </p>
          </div>
          <div>
            {seconds > 0 || minutes > 0 ? (
              <Link
                className="disabledCursor"
                style={{ color: "#910A67" }}
                onClick={handleResendOtp}
              >
                Resend OTP
              </Link>
            ) : (
              <Link style={{ color: "#910A67" }} onClick={handleResendOtp}>
                Resend OTP
              </Link>
            )}
          </div>
        </div>
        <button 
        disabled={otp.length !== 4}
        className="verify-otp-button"
        onClick={handleVerifyOtp}
        >Verify</button>
      </div>
    </div>
  );
};

export default VerifyOtp;

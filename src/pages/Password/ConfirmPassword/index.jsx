import React from "react";

const ConfirmPassword = () => {

  const handleSubmit = () => {

  }
  return <div className="login-form-cointainer">
    <h1>Confirm Password</h1>
    <div>
    <form onSubmit={handleSubmit}>
      <label>Enter new password</label>
      <input type='password'/>
      <label>Confirm new password</label>
      <input type='password'/>
      <button type="submit">Set Password</button>
    </form>
    </div>
    </div>;
};

export default ConfirmPassword;

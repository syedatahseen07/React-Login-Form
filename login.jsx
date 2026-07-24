import React, { useState } from "react";
import "./Login.css";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Login Successful!");
  };

  return (
    <div className="container">

      <div className="login-box">

        <h1>Welcome Back 👋</h1>

        <p>Login to continue</p>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        <div className="links">

          <a href="#">Forgot Password?</a>

          <a href="#">Create Account</a>

        </div>

      </div>

    </div>
  );
}

export default Login;
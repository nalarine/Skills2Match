import React, { useState } from "react";
import img from '../photos/logo (3).png'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("Login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "./Main";
        } else {
          if (data.reason === "user_not_found") {
            setError("Invalid email or password. Don't have an account yet? Sign up now!");
          } else {
            setError("Invalid email or password. Please try again.");
          }
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
        setError("An error occurred during login. Please try again later.");
      });
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <div className="logoDiv">
            <a href="#" className="logo">
              <img src={img} alt="" />
            </a>
          </div>
          <h3>Log In</h3>

          {error && <div className="alert alert-danger">{error}</div>}

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-grid mb-3">
            <div className="custom-checkbox-container">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
            Log In
            </button>
          </div>
          <p className="forgot-password text-right">
          Don’t have an account yet?<a href="/sign-up">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}

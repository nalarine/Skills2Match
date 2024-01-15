import React, { Component, useState } from "react";
import GoogleSignInButton from './GoogleSignInButton';
import img from '../photos/logo (3).png'


export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [dob, setDob] = useState(""); // New state for date of birth
  const isGmailPattern = (email) => {
    const gmailRegex = /^[a-zA-Z0-9._-]+@gmail.com$/;
    return gmailRegex.test(email);
  };
  const handleSubmit = (e) => {
  e.preventDefault();
        // Validate age restriction for OSY (18-24 years old)
        const age = calculateAge(dob);

        if (age < 18 || age > 24) {
          alert("Applicants must be between 18 and 24 years old.");
          return;
        }

  if (!isGmailPattern(email)) {
    alert("Please use a valid Gmail address.");
    return;
  }
      
    if (userType == "Admin" && secretKey != "usaid") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();

      console.log(fname, lname, email, password);
      fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          email,
          lname,
          password,
          userType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("Registration Successful");
          } else {
            alert("Something went wrong");
          }
        });
    }
  };

   // Function to calculate age based on date of birth
   const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
        <div className="logoDiv" >
          <a href="#" className="logo">
            <img src={img} alt="" />
          </a>
          </div>
          <h3>Sign up to find the work that suits your skills</h3>
          <h6 style={{ fontStyle: 'italic', fontWeight: 'normal', textAlign: 'center'}}>"Welcome to Skills 2.0 Match. Please note that access is restricted to Out-of-School Youth (OSY) students. Your details will be verified to ensure eligibility for login.</h6> 
          <div className="register-buttons">
            <input
              type="radio"
              id="userRadio"
              name="UserType"
              value="User"
              onChange={() => setUserType("User")}
              checked={userType === "User"}
              style={{ display: "none" }}
            />
            <label htmlFor="userRadio" className={`button-label ${userType === "User" ? "active" : ""}`}>
              User
            </label>

            <input
              type="radio"
              id="adminRadio"
              name="UserType"
              value="Admin"
              onChange={() => setUserType("Admin")}
              checked={userType === "Admin"}
              style={{ display: "none" }}
            />
            <label htmlFor="adminRadio" className={`button-label ${userType === "Admin" ? "active" : ""}`}>
              Admin
            </label>
          </div>

          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

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

          <div className="mb-3 date-of-birth">
            <label>Date of Birth</label>
            <input
              type="date"
              className="form-control"
              onChange={(e) => setDob(e.target.value)}
            />
          </div>

          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary mb-3">
            Create Account
            </button>
          </div>
          <div className="d-flex justify-content-center">
              <GoogleSignInButton onGoogleSignIn={(user) => console.log('Google signed in', user)} />
            </div>
          <p className="forgot-password text-right">
          Already have an account?<a href="/sign-in">Log In</a>
          </p>
        </form>
      </div>
    </div>
  );
}

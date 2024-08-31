import React, { useEffect, useState } from "react";
import "./Signup.css"; // Import the CSS file
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Ensure that useEffect does not redirect if a user is signed up but not logged in
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.isLoggedIn) {
      navigate("/");
    }
  }, [navigate]);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Store email and isLoggedIn flag in localStorage
        localStorage.setItem(
          "user",
          JSON.stringify({ email, isLoggedIn: false })
        );

        // Redirect to the login page
        navigate("/login");
      } else {
        const errorData = await response.text();
        setError(errorData);
      }
    } catch (err) {
      console.error("Error during signup:", err);
      setError("An error occurred during signup.");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-box">
        <h2 className="signup-title">Create Account</h2>
        <form onSubmit={handleSignup} className="signup-form">
          {error && <p className="error">{error}</p>}
          <input
            type="email"
            className="signup-input"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="signup-input"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            className="signup-input"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" className="signup-button">
            Sign Up
          </button>
          <p className="p-tag">You agree to our terms and policies</p>

          <button className="signup-button">
            <Link to="/login" className="signup-link">
              Already have an account? Login
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

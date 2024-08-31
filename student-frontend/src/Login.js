import React, { useState, useEffect } from "react";
import "./Signup.css"; // Import the CSS file
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.isLoggedIn) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Update localStorage to indicate the user is logged in
        localStorage.setItem(
          "user",
          JSON.stringify({ email, isLoggedIn: true })
        );
        navigate("/"); // Redirect to a dashboard or home page after successful login
      } else {
        const errorData = await response.text();
        setError(errorData);
      }
    } catch (err) {
      console.error("Error during login:", err);
      setError("An error occurred during login.");
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-box">
        <h2 className="signup-title">Login</h2>
        <form onSubmit={handleLogin} className="signup-form">
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
          <button type="submit" className="signup-button">
            Login
          </button>
          <p className="p-tag">You agree to our terms and policies</p>
          <button className="signup-button">
            <Link to="/signup" className="signup-link">
              Create account
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

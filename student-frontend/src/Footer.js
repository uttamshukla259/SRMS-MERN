import React from "react";
import "./App.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <h3>Student Result Management System</h3>
        <p>
          Thank you for being a part of our community. We're here to support
          your educational journey!
        </p>
      </div>
      <div>
        <p>Contact us: 8757300503 | Email: uttam822125@gmail.com</p>
        <p>
          Follow us on:
          <a href="#">Facebook</a> |<a href="#">Twitter</a> |
          <a href="#">LinkedIn</a>
        </p>
      </div>
      <div>
        <p>
          &copy; {new Date().getFullYear()} Student Result Management System.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

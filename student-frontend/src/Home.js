import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import studentGif from "./image/student1.gif";
import adminGif from "./image/admin.gif";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1 className="hero-title">
          Welcome to the Student Result Management System
        </h1>
        <p className="hero-subtitle">
          Managing and accessing student academic records has never been easier.
        </p>
      </header>

      <section className="features-section">
        <div className="feature">
          <div className="f1">
            <h2>For Students</h2>
            <p>
              <strong>Quick Access to Results:</strong> Enter your roll number
              to instantly view your academic performance.
            </p>
            <p>
              <strong>User-Friendly Interface:</strong> Easily navigate through
              your results, helping you focus on your education.
            </p>
            <div className="b1">
              <Link to="student" className="l1">
                Student <FontAwesomeIcon icon={faArrowRight} className="icon" />
              </Link>
            </div>
          </div>
          <div className="f1">
            <img src={studentGif} alt="Feature GIF" className="feature-gif" />
          </div>
        </div>
        <div className="feature">
          <div className="f">
            <h2>For Administrators</h2>
            <p>
              <strong>Efficient Data Management:</strong> Add, update, and
              delete student records with ease.
            </p>
            <p>
              <strong>Secure Access:</strong> Only authorized personnel can
              manage the data, ensuring student information is protected.
            </p>
            <div className="b1">
              <Link to="admin" className="l1">
                Admin <FontAwesomeIcon icon={faArrowRight} className="icon" />
              </Link>
            </div>
          </div>
          <div className="f1">
            <img src={adminGif} alt="Feature GIF" className="feature-gif" />
          </div>
        </div>
      </section>

      <section className="why-choose-us-section">
        <h2>Why Choose Us?</h2>
        <ul className="why-choose-list">
          <li>
            <strong>Reliability:</strong> Our system guarantees uptime and data
            security.
          </li>
          <li>
            <strong>Ease of Use:</strong> Designed for users of all technical
            levels.
          </li>
          <li>
            <strong>Support:</strong> Our dedicated support team is here to
            assist you with any questions or issues.
          </li>
        </ul>
        <p className="call-to-action">
          Join us in revolutionizing the way student results are managed and
          accessed. Experience the future of academic management today!
        </p>
      </section>
    </div>
  );
};

export default Home;

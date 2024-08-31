import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  }
  return (
    <div className="Nav-ul">
      <ul>
        <li>
          <Link to="/" className="links">
            Home
          </Link>
        </li>
        <li>
          <Link to="student" className="links">
            Student
          </Link>
        </li>
        <li>
          <Link to="admin" className="links">
            Admin
          </Link>
        </li>

        {/* <li>
          <Link to="profile" className="links">
            Profile
          </Link>
        </li> */}

        {/* <li>
          <Link to="login" className="links">
            Login
          </Link>
        </li> */}
        <li>
          {user ? (
            <Link onClick={logout} to="/signup" className="links">
              Logout
            </Link>
          ) : (
            <Link to="/signup" className="links">
              Signup
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

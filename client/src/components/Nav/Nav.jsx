import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Nav/ourlogo.png";
import { IconContext } from "react-icons";
import "./nav.css";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { useAuth } from "../../hooks/useAuth";

import { MdAppRegistration } from "react-icons/md";
const Nav = () => {
  const [sidebar, setSidebar] = useState(false);
  const { user, logout } = useAuth();
  const isAuthenticated = user != null;

  const navigate = useNavigate();
  const goLogin = () => {
    navigate("/login");
  };

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="nav-container">
      <IconContext.Provider value={{ color: "#000000" }}>
        <div className="nav-bar">
          <div className="navbar-links">
            {!isAuthenticated && (
              <>
                <Link to="/" className="links">
                  Home
                </Link>
                <Link to="/aboutUs" className="links">
                  About Us
                </Link>
              </>
            )}

            {isAuthenticated && (
              <>
                <Link to="/homePage" className="links">
                  Home
                </Link>
                <Link to="/createForm" className="links">
                  Create Form
                </Link>
                <Link to="/aboutUs" className="links">
                  About Us
                </Link>
              </>
            )}
          </div>
          <Link to="#" className="menu">
            <FaBars className="hamburger" onClick={showSidebar} />
          </Link>
          <Link to="/">
            <div className="logo-box-nav-bar">
              <img className="logo-text" src={logo} />
            </div>
          </Link>
          <div className="navbar-button-group">
            <ul className="navbar-buttons">
              {!isAuthenticated ? (
                <>
                  <Link to="/login" className="links">
                    <BiLogIn color="#1f2232" className="nav-icons" />
                    Login
                  </Link>
                  <Link to="/register" className="links">
                    <MdAppRegistration color="#1f2232" className="nav-icons" />
                    Sign Up
                  </Link>
                </>
              ) : (
                <>
                  {user && user.username && (
                    <div className="user-name-nav">{user.username}</div>
                  )}
                  <Link to="/login" className="right-links">
                    {user ? (
                      <span className="links " onClick={logout}>
                        {" "}
                        <BiLogOut color="#1f2232" className="nav-icons" />
                        Logout
                      </span>
                    ) : (
                      <button className="navbar-button" onClick={goLogin}>
                        {" "}
                        Profile{" "}
                      </button>
                    )}
                  </Link>
                </>
              )}
            </ul>
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="nav-bar-toggle">
              <Link to="#" className="menu-close">
                <AiOutlineClose />
              </Link>
            </li>
            <li className="buttons-hamburger">
              {isAuthenticated ? (
                <>
                  <Link to="/" className="user-name-hamburger">
                    {user.username}
                  </Link>
                  <span className="links-hamburger " onClick={logout}>
                    {" "}
                    <BiLogOut color="#1f2232" className="nav-icons" />
                    Logout
                  </span>
                </>
              ) : (
                <>
                  <Link to="/login" className="links-hamburger">
                    <BiLogIn color="#1f2232" className="nav-icons" />
                    Login
                  </Link>
                  <Link to="/register" className="links-hamburger">
                    <MdAppRegistration color="#bc9ec1" className="nav-icons" />
                    Sign Up
                  </Link>
                </>
              )}
            </li>
            {!isAuthenticated && (
              <>
                <Link to="/" className="navbar-text-hamburger">
                  <li>Home</li>
                </Link>
                <Link to="/aboutUs" className="navbar-text-hamburger">
                  <li> About Us</li>
                </Link>
              </>
            )}

            {isAuthenticated && (
              <>
                <Link to="/homePage" className="navbar-text-hamburger">
                  <li>Home</li>
                </Link>
                <Link to="/createForm" className="navbar-text-hamburger">
                  <li>Create Form</li>
                </Link>
                <Link to="/aboutUs" className="navbar-text-hamburger">
                  <li> About Us</li>
                </Link>
              </>
            )}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
};

export default Nav;

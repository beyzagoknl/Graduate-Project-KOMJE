import React from "react";
import "../Footer/footer.css";
import logo from "../Footer/ourlogo.png";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-footer">
        <div className="col">
          <Link to="/">
            <img src={logo} className="logo" />
          </Link>
        </div>

        <div className="contact-container">
          <div className="social-box">
            <h5 className="text">Follow Us</h5>

            <div className="social-icons">
              <ul className="sci">
                <li>
                  <a
                    href="https://www.facebook.com/people/Komje-App/100088080527367/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaIcons.FaFacebook className="icons" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/komjeapp/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaIcons.FaInstagram className="icons" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/komje-app-48b8bb258/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaIcons.FaLinkedin className="icons" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/AppKomje"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaIcons.FaTwitter className="icons" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className=" contact-us-box">
            <h5 className="text">Contact Us</h5>

            <p className="mail">
              <a className="mailp" href="mailto: komje.app@gmail.com">
                komje.app@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="copyrightText">
        <p>@{new Date().getFullYear()} KOMJE. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import logoImg from "../../images/prudentcode-white.png";
import "../../styles/Footer.css";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="logo-wrapper">
        <img src={logoImg} alt="logo" />
        <span> Copyright &copy; 2020</span>
      </div>
      <div className="social-wrapper">
        <Link to="#">
          <i className="fab fa-facebook-f"></i>facebook
        </Link>

        <Link to="#">
          {" "}
          <i className="fab fa-instagram"></i>instagram
        </Link>
        <Link to="#">
          <i className="fab fa-linkedin-in"></i>linkedIn
        </Link>
      </div>
      <div className="terms-wrapper">
        {<Link to="#">Polityka</Link>}
        {<Link to="">Regulamin</Link>}
        {<Link to="/kontakt">Kontakt</Link>}
      </div>
    </div>
  );
};
export default Footer;

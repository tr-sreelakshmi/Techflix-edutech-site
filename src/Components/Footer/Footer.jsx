import React from "react";
import "../Footer/Footer.css";
import footer from "../../assets/img/footer.png";
import { Link } from "react-router-dom";

function Footer() {
   const handeClick = ()=>{
    window.scrollTo(0,0);
   }
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footerbox">
            <div className="logo">
              <div className="logo-img">
                <img src={footer} alt="" />
              </div>
              <h2>Techflix</h2>
            </div>
            <p>
              Embrace the future of innovation and technology with our
              cutting-edge tech business solutions
            </p>
          </div>
          <div className="footerbox">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-link">
              <li>
                <a href="/courses">Our Program</a>
              </li>
              <li>
                <a href="/services">Our Plan</a>
              </li>
              <li>
                <a href="">Become member</a>
              </li>
            </ul>
          </div>
          <div className="footerbox">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-link">
              <li>
                <Link to="/about-us" onClick={handeClick}>About Us</Link>
              </li>
              <li>
                <Link to="/contact-us" onClick={handeClick}>Contact Us</Link>
              </li>
              <li>
                <a href="/support-us"onClick={handeClick} >Support Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

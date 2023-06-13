import React from "react";
import Dyota from '../Assets/DyotaFooter.svg';
import { Link } from "react-router-dom";
import About from "../screens/About";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="inner-container">
          <div className="footer-logo">
            <img className="contact-logo" src={Dyota} />
            <button className="footer-cta"><a className = 'cta-text'href="https://calendly.com/jatin-sood">Book a meeting</a></button>
          </div>
          <div className="footer-links">
            <p className="link-heading">Quick Links</p>
            <Link to='/about'>About Us</Link>
            <a href="#services-section">Services</a>
            <a>Careers</a>
          </div>
          <div className="footer-socials">
            <p className="link-heading">Socials</p>
            <a href="https://twitter.com/DyotaDigital">
              <i className="fa fa-twitter dimensions t">
                <span> </span>Twitter
              </i>
            </a>
            <a  href="https://www.instagram.com/dyotalive/">
              <i className="fa fa-instagram dimensions ">
                <span> </span>Instagram
              </i>
            </a>
            <a href="https://www.linkedin.com/company/dyotads/?trk=public_profile_topcard-current-company">
              <i className="fa fa-linkedin dimensions ">
                <span> </span>LinkedIn
              </i>
            </a>
          </div>
          <div className="other-links">
            <p className="link-heading">Services</p>
            <a>Search Engine Optimization</a>
            <a>LinkedIn Marketing</a>
            <a>Social Media Advertising</a>
          </div>
          <div className="footer-contacts">
            <p className="link-heading">Contact</p>
            <div className="footer-icons">
              <div className="footer-phone">
              <i className="fa fa-phone" ></i>
              <p className="phonenumber">+91 7009058870</p>
              </div>
               
            <div className="footer-mail">
              <i className="fa fa-envelope" style={{ fontSize: "24px" }}></i>
              
              <p className="footeremail">dyota.digital@gmail.com</p>
            </div>
              
            </div>

         
          </div>
        </div>
      </div>
    </div>
  );
}



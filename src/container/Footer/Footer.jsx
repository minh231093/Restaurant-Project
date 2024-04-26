import React from "react";

import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { images } from "../../constants";

import { FooterOverlay, Newsletter } from "../../components";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact</h1>
        <p className="p__opensans">The Hawthorn</p>
        <p className="p__opensans">Unnamed fictional island</p>
        <p className="p__opensans">England</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="" />
        <p className="p__opensans">England</p>
        <img
          src={images.spoon}
          alt=""
          className="spoon__img"
          style={{ marginTop: "15" }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working hours</h1>
        <p className="p__opensans">Mon - Fri</p>
        <p className="p__opensans">10:00 - 22:00</p>
        <p className="p__opensans">Sat - Sun</p>
        <p className="p__opensans">10:00 - 24:00</p>
      </div>
    </div>

    <div className="footer_copyright">
      <p className="p__opensans"> All rights reserved</p>
    </div>
  </div>
);

export default Footer;

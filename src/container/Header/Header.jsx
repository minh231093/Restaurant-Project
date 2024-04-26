import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section __padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavor" />
      <h1 className="app__header-h1">The key to fine dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        The Minamoto are a cadet branch of the imperial family, directly
        descended from Emperor Seiwa; they are, in effect, very distant cousins
        to the Taira, and family arguments tend to get out of hand very quickly.
      </p>
      <button type="button" className="custom__button">
        Enjoy
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="" />
    </div>
  </div>
);

export default Header;

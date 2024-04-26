import React from "react";
import SubHeading from "../SubHeading/SubHeading";

import "./Newsletter.css";

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" style={{ color: "gold" }} />
      <h1 className="headtext__comorant">Subscribe</h1>
      <p className="p__opensans"> Never miss anything</p>
    </div>

    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Email" />
      <button className="custom__button">Click</button>
    </div>
  </div>
);

export default Newsletter;

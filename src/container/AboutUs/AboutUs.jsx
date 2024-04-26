import React from "react";
import { images } from "../../constants";

import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext_cormorant">About us</h1>
        <img src={images.spoon} alt="" className="spoon__img" />
        <p className="p__opensans">
          The founding of Rome is shrouded in legend. Legend has it, for
          example, that the Romans can trace their ancestry back to Aeneas, the
          hero who escaped from the sack of Troy. The founding of Rome also
          involves violence and murder. Viewed in a certain light, much of
          subsequent Roman history can be seen as a continuation of these
          aggressive ways. Since this time, the Romans have kept fine traditions
          of warfare and high-stakes (or even murderous) politics.
        </p>
        <button type="button" className="custom__button">
          Join
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext_cormorant">About us</h1>
        <img src={images.spoon} alt="" className="spoon__img" />
        <p className="p__opensans">
          Rome is a place where tradition and history count for much. The
          legends of the city's founding are important, and the powerful
          patrician families are directly descended from the first followers of
          Romulus. These heroic times demanded harsh, decisive action, and this
          is a tradition that the often-conservative Romans have maintained to
          this day. The Romans, including the Julii family, are people for whom
          politics and war are all or nothing affairs.
        </p>
        <button type="button" className="custom__button">
          Join
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;

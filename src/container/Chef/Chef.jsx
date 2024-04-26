import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chefGif} alt="" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">Our principle</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="" />
          <p className="p__opensans">
            Over the next few hours you will ingest fat, salt, sugar, protein,
            bacteria, fungi, various plants and animals, and, at times, entire
            ecosystems. But I have to beg of you one thing.
            <br />
            Do not eat.
            <br />
            Taste. Savor. Relish. Consider every morsel that you place inside
            your mouth.
            <br />
            Be mindful. But do not eat.
          </p>
        </div>

        <div className="app__chef-sign">
          <p>Almásy</p>
          <p className="p__opensans">Chef & founder</p>
          <img src={images.Stalin} alt="" />
        </div>
      </div>
    </div>
  </div>
);

export default Chef;

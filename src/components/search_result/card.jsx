import React from "react";
import Avatar from "./avatar";
import StarIcon from "./star";
import About from "./about";
import Tag from "./tag";

import "./search_result.css";

const Card = () => {
  return (
    <div>
      <div className="service-provider-card">
        <Avatar />
        <div className="item2">
          <span className="city-location">Johor Bahur, Kular, @John</span>
          <StarIcon color={true} />
          <StarIcon color={true} />
          <StarIcon color={true} />
          <StarIcon color={true} />
          <StarIcon color={false} />
        </div>
        <div className="item3"></div>
        <div className="item4">
          <p className="listed-fee">$5.00 USD</p>
        </div>
      </div>
      <About
        desc="As award-winning international designers and developers, we help
                businesses big and small to beautify their online presence and make
                their brands stand out. We cover everything from mobile app development
                to WordPress overhauls, logotypes and UX/UI - taking you from vision to
                tangible results that deliver."
      />
      <div className="categories-displayed">
        <Tag tag="Mechnical" />
        <Tag tag="Plubming" />
        <Tag tag="Farming" />
      </div>
    </div>
  );
};

export default Card;

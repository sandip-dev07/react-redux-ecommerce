import React from "react";
import { Link } from "react-scroll";

import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-details">
        <h1>REDUX BEST SELLING</h1>
        <h3>UNIQUE PRODUCTS BY WORLD'S TOP DESIGNER</h3>
        <Link
          to="prod-section"
          activeClass="active"
          offset={-80}
        >
          <button>EXPLORE NOW</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

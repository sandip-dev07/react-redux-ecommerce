import React from "react";
import "./newsletter.scss";

import {
  GrFacebookOption,
  GrTwitter,
  GrInstagram,
  GrYoutube,
  GrPinterest,
} from "react-icons/gr";

import logo1 from "../../assets/logo1.jpg";
import logo2 from "../../assets/logo2.jpg";
import logo3 from "../../assets/logo3.jpg";
import logo4 from "../../assets/logo4.jpg";
import logo5 from "../../assets/logo5.jpg";

const logoData = [
  {
    id: 1,
    img: logo1,
  },
  {
    id: 2,
    img: logo2,
  },
  {
    id: 3,
    img: logo3,
  },
  {
    id: 4,
    img: logo4,
  },
  {
    id: 5,
    img: logo5,
  },
];

const NewsLetter = () => {
  return (
    <div className="brands-newsLetter-container">
      <div className="brands-wrapper">
        <h3>THE MOST LOVED BRANDS</h3>
        <div className="logo-box">
          {logoData.map((data) => (
            <img key={data.id} src={data.img} alt="" />
          ))}
        </div>
      </div>
      <div className="news-letter">
        <div className="news-wrapper">
          <div className="news-left">
            <div className="text">
              <p>sign up for</p>
              <h3>newsletter</h3>
            </div>
            <div className="subs">
              <input type="text" placeholder="Enter email address" />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="news-right">
            <div className="icons">
              <GrFacebookOption />
              <GrTwitter />
              <GrInstagram />
              <GrYoutube />
              <GrPinterest />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

import React from "react";
import "./Portfolio.css";
// import logo from '../../assets/zoro1.jpg'
import logo from "../../assets/luffy.png";

const Portfolio = () => {
  return (
    <section id="introduction" className="portfolio-main">
      <div className="introduction-section-content-box">
        <div className="introduction-section-content">
          <p className="section-title"> Hey, I'm Vignesh Manickam</p>
          <h1 className="introduction-section-title">
            <span className="introduction-section-title-color">Blockchain</span>
            {""}
            <br />
            Developer
          </h1>
          <p className="introduction-section-description">
            Need to add the description the blockchain technology
            <br />
            And how the data are integrated with the blockchain using web.js and
            ether.js.
          </p>
        </div>
        <button className="btn btn-primary"> Get in touch</button>
      </div>
      <div className="introduction-section-image">
        <img
          // className="introduction-section-image"
          src={logo}
          alt="introduction-logo"
        />
      </div>
    </section>
  );
};

export default Portfolio;

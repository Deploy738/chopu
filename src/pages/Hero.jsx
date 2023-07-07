import { NavLink } from "react-router-dom";
import Home from "../assets/home.png";

const Hero = () => {
  return (
    <>
      <header>
        <div className="container  ">
          <div className="section-hero-data ">
            <p>Hello</p>
            <h1 className="hero-heading" style={{ color: "#1b2e35" }}>
              {"It's"} me{" "}
              <span style={{ color: "#007dfe" }}> Neysha Budhathoki</span>
            </h1>
            <p className="hero-para">
              Welcome to my portfolio! My name is Neysha Budhathoki, and I am a
              young and enthusiastic individual from Morang, Nepal. Born on
              October 18, 2018, I have been blessed with a supportive and
              understanding family who have been my pillars of strength.
            </p>
            <div className="buttons">
              <NavLink className=" btn-primary" to="/about">
                Learn More
              </NavLink>
            </div>
          </div>
          <div className="section-hero-image ">
            <picture>
              <img id="animation" src={Home} alt="" className="hero-img" />
            </picture>
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;

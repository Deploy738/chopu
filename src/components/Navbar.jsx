import { NavLink, Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Logo from "../assets/logo.png";
// import Logo from "../assets/logo.jpeg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <nav className="navbar">
        {/* Mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={handleNav} className="mobile-navbar__close">
            <AiOutlineClose />
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={handleNav} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={handleNav} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={handleNav} to="/gallery">
                Gallery
              </Link>
            </li>
          </ul>
          <div className="mobile-img">
            <img src={Logo} alt="icon" />
          </div>
        </div>

        {/* Desktop Navbar */}
        <div className="logo">
          <Link to="/">
            <h1>
              Ney<span style={{ color: "lightseagreen" }}>sha.</span>
            </h1>
          </Link>
        </div>

        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
        </ul>
        <Link to="/gallery">
          <div className="img">
            <img src={Logo} alt="icon" />
          </div>
        </Link>

        {/* Mobile Ham */}
        <div className="mobile-ham" onClick={handleNav}>
          <AiOutlineMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import { NavLink, Link } from "react-router-dom";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>Neysha</span> Budhathoki
              </li>
              <li className="text-blue-500">Welcome to my portfolio!</li>
            </ul>

            <ul className="footer-content__2">
              <li>Quick Links</li>
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

            <ul className="footer-content__2">
              <li>Contact Info</li>
              <li>(+977) 9845352896</li>
              <li>(+977) 9811018822</li>
              <li>(+977) 9866787633</li>
            </ul>

            <ul className="footer-content__2">
              <li>Follow Me</li>
              <li>
                <Link target="blank" to="https://www.tiktok.com/@_n.e.y.s.h.a_">
                  <FaTiktok size={"4rem"} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>
            Copyright &copy; {new Date().getFullYear()} All Rights Reserved ||
            Designed By{" "}
            <Link
              target="blank"
              to="https://www.facebook.com/people/Suyog-Acharya/pfbid02FRjHRCpaE9ksbpMJCTPHkqdVJgfkv938dXP454VovKDdfdnb6azLju4dFopUNZB6l/"
            >
              Suyog Acharya
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

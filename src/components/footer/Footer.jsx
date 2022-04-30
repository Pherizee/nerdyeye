import logo from "../../img/logo.png";
import marker from "../../img/icons/map-marker-alt-solid.png";
import envelope from "../../img/icons/envelope-regular.png";
import phone from "../../img/icons/phone-alt-solid.png";
import instagram from "../../img/icons/Icon feather-instagram.svg";
import twitter from "../../img/icons/Icon feather-twitter.svg";
import linkedIn from "../../img/icons/Icon feather-linkedin.svg";
import youtube from "../../img/icons/youtube.svg";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="footer__logo">
          <a href="#">
            <img src={logo} alt="nerdyeye logo" />
          </a>
        </div>
        <div className="footer__content">
          <div className="contact">
            <h3>Contact</h3>
            <p>We build and we teach tech and digital solutions</p>
            <address>
              <div>
                <img src={marker} alt="map marker icon" />
                <p>4 Ishola Alagomeji, Off Herbert Macaulay, Yaba, Lagos</p>
              </div>
              <div>
                <img src={envelope} alt="envelope icon" />
                <a href="mailto:info@nerdyeye.com">info@nerdyeye.com</a>
              </div>
              <div>
                <img src={phone} alt="phone icon" />
                <a href="tel:+234 812 724 4042">+234 812 724 4042</a>
              </div>
            </address>
          </div>
          <div className="services">
            <h3>Services</h3>
            <li>
              <a href="#">Website Design/Development</a>
            </li>
            <li>
              <a href="#">Mobile App Development</a>
            </li>
            <li>
              <a href="#">Digital Marketing Campaign Management</a>
            </li>
          </div>
          <div className="courses">
            <h3>Courses</h3>
            <li>
              <a href="#">Digital Marketing Training</a>
            </li>
            <li>
              <a href="#">Graphics Design Training</a>
            </li>
            <li>
              <a href="#">UI/UX Design Training</a>
            </li>
            <li>
              <a href="">Front-end Website Development</a>
            </li>
            <li>
              <a href="">Full-stack Web And Mobile App Development</a>
            </li>
          </div>
          <div className="company">
            <h3>Company</h3>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Work Force</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </div>
          <div className="other-links">
            <h3>Other Links</h3>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Site Map</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
          </div>
          <div className="social-media">
            <h3>Social Media</h3>
            <a href="#">
              <img src={instagram} alt="instagram icon" />
            </a>
            <a href="#">
              <img src={twitter} alt="twitter icon" />
            </a>
            <a href="#">
              <img src={linkedIn} alt="linkedin icon" />
            </a>
            <a href="#">
              <img src={youtube} alt="youtube icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <small>
          All Rights Reserved Nerdy Eye Powered By Dungada Tech Ltd.
        </small>
      </div>
    </footer>
  );
};

export default Footer;

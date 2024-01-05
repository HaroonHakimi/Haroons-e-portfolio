import React from "react";
import FooterLogo from "../assets/footerLogo.png";
import { MdOutlineArrowUpward } from "react-icons/md";
import MyResume from "../assets/resume/Resume.pdf"

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <a href="#" className="footer__logo">
        <img src={FooterLogo} alt="" />
        <span className="footer__scroll-top">
          Top <MdOutlineArrowUpward />
        </span>
      </a>
      <div className="footer__link--wrapper">
        <div>
          <a target="_blank" href="https://github.com/HaroonHakimi">Github</a>
        </div>
        <div>
          <a target="_blank" href="https://www.linkedin.com/in/haroonhakimi">LinkedIn</a>
        </div>
        <div>
          <a target="_blank" href="mailto:haroonhakimi2005@gmail.com">Email</a>
        </div>
        <div>
          <a target="_blank" href={MyResume}>Resume</a>
        </div>
      </div>
      <div>Copyright &copy; 2023 Haroon Hakimi</div>
    </div>
  );
};

export default Footer;

/** @format */

import React from "react";
import FooterLogo from "../assets/image/FooterLogo.png";

const Footer = () => {
  return (
    <footer id="footer">
      <img src={FooterLogo} alt="로고" />
      <div className="footer__menu">
        <span className="text">개인정보처리방침</span>
        <span>|</span>

        <span className="text">이용약관</span>
        <span>|</span>

        <span className="text">About Us</span>
        <span>|</span>

        <span className="text">Contact Us</span>
      </div>

      <div className="footer__line" />

      <p className="footer__copyright">우리동네 오타쿠. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

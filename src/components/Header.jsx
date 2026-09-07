/** @format */

import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/image/Logo.png";

const Header = (props) => {
  return (
    <header id="header" className={`header__wrap`}>
      <div className="header__inner">
        <div className="header__logo">
          <Link className="Logo_wrap" to="/">
            <img className="Logo_img" src={logo} alt="로고" />
          </Link>
        </div>
        <div className="header__menu">
          <ul>
            <li>
              <a className="menu" href="#banner">
                홈
              </a>
            </li>
            {/* <li>
              <a  className="menu"  href="#banner">
                소개
              </a>
            </li> */}
            <li>
              <a className="menu" href="#userservice">
                이용 방법
              </a>
            </li>
            <li>
              <a className="menu" href="#promotion">
                스토리
              </a>
            </li>
            <li>
              <a className="menu" href="#ownerservice">
                굿즈샵
              </a>
            </li>
            <li>
              <a className="menu" href="#businessmodel">
                덕질 라이프
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

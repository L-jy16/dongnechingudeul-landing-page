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
              <Link className="menu" to="/">
                홈
              </Link>
            </li>
            <li>
              <Link className="menu" to="/">
                소개
              </Link>
            </li>
            <li>
              <Link className="menu" to="/">
                이용 방법
              </Link>
            </li>
            <li>
              <Link className="menu" to="/">
                스토리
              </Link>
            </li>
            <li>
              <Link className="menu" to="/">
                굿즈샵
              </Link>
            </li>
            <li>
              <Link className="menu" to="/">
                덕질 라이프
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

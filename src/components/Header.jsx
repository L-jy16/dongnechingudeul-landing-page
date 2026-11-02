/** @format */

import React from "react";
import { Link } from "react-router-dom";

import { headerNav } from "../constants/index";

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
        <nav className="header__menu" aria-label="주 메뉴">
          <ul>
            {headerNav.map((nav, key) => (
              <li key={key}>
                <a className="menu" href={nav.url} aria-current={nav.url === "#banner" ? "page" : undefined}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

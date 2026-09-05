/** @format */

import React from "react";
import goods_btn_icon from "../assets/image/BannerIcon1.png";
import shop_btn_icon from "../assets/image/BannerIcon2.png";

const Banner = () => {
  return (
    <section id="banner">
      <div className="banner__content">
        <h1 className="title">
          찾고, 만나고
          <br />
          교환하는 굿즈 경험
        </h1>

        <div className="btn__wrap">
          <div className="start__btn__wrap">
            <button className="goods">
              <img src={goods_btn_icon} alt="버튼 안 아이콘" />
              <span>내 주변 굿즈 찾아보기</span>
            </button>

            <button className="shop">
              <img src={shop_btn_icon} alt="버튼 안 아이콘" />
              <span>굿즈샵 파트너 시작하기</span>
            </button>
          </div>

          <div className="download__btn__wrap">
            <button className="apple"></button>
            <button className="google"></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

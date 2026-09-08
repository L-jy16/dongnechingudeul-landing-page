/** @format */

import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import goods_find from "../assets/image/userservice_goods.png";
import goods_icon from "../assets/image/SliderIcon1.png";
import goods_step from "../assets/image/userservice_step_goods.png";

import ar_find from "../assets/image/userservice_AR.png";
import ar_icon from "../assets/image/SliderIcon3.png";
import ar_step from "../assets/image/userservice_step_AR.png";

import guild_find from "../assets/image/userservice_guild.png";
import guild_icon from "../assets/image/SliderIcon2.png";
import guild_step from "../assets/image/userservice_step_guild.png";

const UserService = () => {
  const swiperRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const moveSlide = (index) => {
    swiperRef.current?.slideTo(index);
  };

  return (
    <section id="userservice">
      <div className="userservice__wrap">
        <h2>
          <span />
          이용방법
        </h2>

        <div className="userservice__content__wrap">
          {/* 상단 버튼 */}
          <div className="btn__wrap">
            <button
              className={`goods_find ${activeIndex === 0 ? "active" : ""}`}
              onClick={() => moveSlide(0)}
            >
              <span />
              굿즈 찾기
            </button>

            <button
              className={`AR ${activeIndex === 1 ? "active" : ""}`}
              onClick={() => moveSlide(1)}
            >
              <span />
              AR 탐험
            </button>

            <button
              className={`guild ${activeIndex === 2 ? "active" : ""}`}
              onClick={() => moveSlide(2)}
            >
              <span />
              덕질 사무소
            </button>
          </div>

          {/* 슬라이드 */}
          <div className="slider__wrap">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.activeIndex);
              }}
              navigation={{
                prevEl: ".userservice-prev",
                nextEl: ".userservice-next",
              }}
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={0}
              speed={600}
              className="userserviceSwiper"
            >
              {/* 01 굿즈 찾기 */}
              <SwiperSlide>
                <div className="img__wrap">
                  <img className="slider" src={goods_find} alt="굿즈 찾기" />
                  <div className="slider__wrap">
                    <img
                      className="icon icon01"
                      src={goods_icon}
                      alt="굿즈 찾기"
                    />
                    <div className="text__wrap">
                      <h3 className="title">
                        <strong>AI로 더 빠르게,</strong>
                        <br />
                        원하는 굿즈를 찾아보세요.
                      </h3>
                      <span className="desc">
                        사진이나 키워드로 굿즈를 검색하고
                        <br />내 주변에서 만날 수 있는 굿즈샵까지 확인할 수
                        있어요.
                      </span>
                    </div>
                  </div>

                  <img
                    className="step"
                    src={goods_step}
                    alt="굿즈 찾기 이용 단계"
                  />
                </div>
              </SwiperSlide>

              {/* 02 AR 탐험 */}
              <SwiperSlide>
                <div className="img__wrap">
                  <img className="slider" src={ar_find} alt="AR 탐험" />
                  <div className="slider__wrap">
                    <img
                      className="icon icon02"
                      src={ar_icon}
                      alt="굿즈 찾기"
                    />
                    <div className="text__wrap">
                      <h3 className="title">
                        <strong>AI로 더 빠르게,</strong>
                        <br />
                        동네를 탐험해보세요.
                      </h3>
                      <span className="desc">
                        내 주변 굿즈샵을 AR 길찾기로
                        <br />
                        쉽고 재미있게 찾아갈 수 있어요
                      </span>
                    </div>
                  </div>

                  <img className="step" src={ar_step} alt="AR 탐험 이용 단계" />
                </div>
              </SwiperSlide>

              {/* 03 덕질 사무소 */}
              <SwiperSlide>
                <div className="img__wrap">
                  <img className="slider" src={guild_find} alt="덕질 사무소" />
                  <div className="slider__wrap">
                    <img
                      className="icon icon03"
                      src={guild_icon}
                      alt="굿즈 찾기"
                    />
                    <div className="text__wrap">
                      <h3 className="title">
                        <strong>덕질 사무소에</strong> 굿즈를 등록하고
                        <br />
                        나만의 컬렉션을 완성해보세요.
                      </h3>
                      <span className="desc">
                        다른 유저의 사무소를 둘러보다
                        <br />
                        원하는 굿즈가 있으면 교환할 수 있어요.
                      </span>
                    </div>
                  </div>

                  <img
                    className="step"
                    src={guild_step}
                    alt="덕질 사무소 이용 단계"
                  />
                </div>
              </SwiperSlide>
            </Swiper>

            {/* 왼쪽 버튼 */}
            <button
              type="button"
              className="userservice-prev"
              aria-label="이전 슬라이드"
            >
              ‹
            </button>

            {/* 오른쪽 버튼 */}
            <button
              type="button"
              className="userservice-next"
              aria-label="다음 슬라이드"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserService;

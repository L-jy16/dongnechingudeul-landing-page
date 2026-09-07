/** @format */

import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import goods_find from "../assets/image/userservice_goods.png";
import goods_step from "../assets/image/userservice_step_goods.png";

// 나중에 실제 이미지로 교체
import ar_find from "../assets/image/userservice_AR.png";
import ar_step from "../assets/image/userservice_step_AR.png";

import guild_find from "../assets/image/userservice_guild.png";
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
              굿즈 사무소
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

                  <img className="step" src={ar_step} alt="AR 탐험 이용 단계" />
                </div>
              </SwiperSlide>

              {/* 03 굿즈 사무소 */}
              <SwiperSlide>
                <div className="img__wrap">
                  <img className="slider" src={guild_find} alt="굿즈 사무소" />

                  <img
                    className="step"
                    src={guild_step}
                    alt="굿즈 사무소 이용 단계"
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

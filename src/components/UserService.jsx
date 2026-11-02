/** @format */

import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import goods_find from "../assets/image/userservice_goods.png";
import goods_step from "../assets/image/userservice_step_goods.png";
import goods_icon from "../assets/image/SliderIcon1.png";

import ar_find from "../assets/image/userservice_AR.png";
import ar_step from "../assets/image/userservice_step_AR.png";
import ar_icon from "../assets/image/SliderIcon3.png";

import guild_find from "../assets/image/userservice_guild.png";
import guild_step from "../assets/image/userservice_step_guild.png";
import guild_icon from "../assets/image/SliderIcon2.png";

const stepLabels = {
  goods: ["굿즈 발견", "동네 방문", "덕질사무소 방문", "굿즈샵 방문"],
  ar: ["위치 확인", "AR 길찾기", "매장 도착", "방문 인증"],
  guild: ["덕질사무소 방문", "굿즈 교환 요청", "굿즈 저장", "나만의 컬렉션"],
};

const ServiceSteps = ({ type }) => (
  <ol className="service-steps" aria-label="이용 순서">
    {stepLabels[type].map((label, index) => (
      <li key={label}>
        <span className="step-number">{index + 1}</span>
        <span className="step-art" aria-hidden="true">
          <span style={{ backgroundPosition: `${index * 100 / 3}% ${{ goods: 0, ar: 50, guild: 100 }[type]}%` }} />
        </span>
        <span className="step-label">{label}</span>
      </li>
    ))}
  </ol>
);

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
              aria-pressed={activeIndex === 0}
              onClick={() => moveSlide(0)}
            >
              <span />
              굿즈 찾기
            </button>

            <button
              className={`AR ${activeIndex === 1 ? "active" : ""}`}
              aria-pressed={activeIndex === 1}
              onClick={() => moveSlide(1)}
            >
              <span />
              AR 탐험
            </button>

            <button
              className={`guild ${activeIndex === 2 ? "active" : ""}`}
              aria-pressed={activeIndex === 2}
              onClick={() => moveSlide(2)}
            >
              <span />
              굿즈 사무소
            </button>
          </div>

          {/* 슬라이드 */}
          <div className="service-slider">
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
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination, A11y]}
              slidesPerView={1}
              spaceBetween={0}
              speed={600}
              className="userserviceSwiper"
            >
              {/* 01 굿즈 찾기 */}
              <SwiperSlide>
                <div className="img__wrap">
                  <div className="service-visual">
                    <img className="slider" src={goods_find} alt="굿즈 찾기" />
                    <div className="service-copy">
                      <img
                        className="icon icon01"
                        src={goods_icon}
                        alt=""
                        aria-hidden="true"
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

                  </div>
                  <ServiceSteps type="goods" />
                  <img className="step" src={goods_step} alt="이용 단계 안내" />
                </div>
              </SwiperSlide>

              {/* 02 AR 탐험 */}
              <SwiperSlide>
                <div className="img__wrap">
                  <div className="service-visual">
                    <img className="slider" src={ar_find} alt="AR 탐험" />
                    <div className="service-copy">
                      <img
                        className="icon icon02"
                        src={ar_icon}
                        alt=""
                        aria-hidden="true"
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

                  </div>
                  <ServiceSteps type="ar" />
                  <img className="step" src={ar_step} alt="이용 단계 안내" />
                </div>
              </SwiperSlide>

              {/* 03 덕질 사무소 */}
              <SwiperSlide>
                <div className="img__wrap">
                  <div className="service-visual">
                    <img className="slider" src={guild_find} alt="덕질 사무소" />
                    <div className="service-copy">
                      <img
                        className="icon icon03"
                        src={guild_icon}
                        alt=""
                        aria-hidden="true"
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

                  </div>
                  <ServiceSteps type="guild" />
                  <img className="step" src={guild_step} alt="이용 단계 안내" />
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

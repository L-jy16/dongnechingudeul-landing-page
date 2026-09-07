/** @format */

import React, { useState } from "react";
import card01 from "../assets/image/Serviceflow_Card_Icon01.png";
import card02 from "../assets/image/Serviceflow_Card_Icon02.png";
import card03 from "../assets/image/Serviceflow_Card_Icon03.png";
import card04 from "../assets/image/Serviceflow_Card_Icon04.png";
import card05 from "../assets/image/Serviceflow_Card_Icon05.png";
import road from "../assets/image/StepBackGround.png";
import character from "../assets/image/WalkCharacter.png";

const ServiceFlow = () => {
  const [characterPosition, setCharacterPosition] = useState(10);

  const positions = {
    1: 10,
    2: 30,
    3: 50,
    4: 70,
    5: 90,
  };

  const moveCharacter = (step) => {
    setCharacterPosition(positions[step]);
  };

  return (
    <section id="serviceflow">
      <div className="serviceflow__wrap">
        <span className="shooting-star" />
        <h2>
          <strong>검색</strong>부터 <strong>방문</strong>까지,
          <strong className="color">우리동네 오타쿠</strong>에서
        </h2>

        <div className="list__wrap">
          <ul>
            <li>
              <button
                className="card card01"
                onMouseEnter={() => moveCharacter(1)}
              >
                <span className="number">01</span>
                <div className="title__wrap">
                  <img src={card01} alt="아이콘" />
                  <h3>AI 굿즈 탐색</h3>
                </div>
                <div className="desc">
                  좋아하는 작픔으로
                  <br />
                  원하는 굿즈를 찾아요.
                </div>
              </button>
            </li>
            <li>
              <button
                className="card card02"
                onMouseEnter={() => moveCharacter(2)}
              >
                <span className="number">02</span>
                <div className="title__wrap">
                  <img src={card02} alt="아이콘" />
                  <h3>주변 굿즈샵 발견</h3>
                </div>
                <div className="desc">
                  내 주변 굿즈샵을
                  <br />
                  지도로 한눈에
                </div>
              </button>
            </li>
            <li>
              <button
                className="card card03"
                onMouseEnter={() => moveCharacter(3)}
              >
                <span className="number">03</span>
                <div className="title__wrap">
                  <img src={card03} alt="아이콘" />
                  <h3>AI 동네 탐험</h3>
                </div>
                <div className="desc">
                  AR로 발견하는
                  <br />
                  숨은 굿즈의 스팟
                </div>
              </button>
            </li>
            <li>
              <button
                className="card card04"
                onMouseEnter={() => moveCharacter(4)}
              >
                <span className="number">04</span>
                <div className="title__wrap">
                  <img src={card04} alt="아이콘" />
                  <h3>방문 이벤트</h3>
                </div>
                <div className="desc">
                  가면 더 즐거운
                  <br />
                  현장 이벤트
                </div>
              </button>
            </li>
            <li>
              <button
                className="card card05"
                onMouseEnter={() => moveCharacter(5)}
              >
                <span className="number">05</span>
                <div className="title__wrap">
                  <img src={card05} alt="아이콘" />
                  <h3>구매·수집·교환</h3>
                </div>
                <div className="desc">
                  구매하고, 모으고,
                  <br />
                  팬들과 교류해요.
                </div>
              </button>
            </li>
          </ul>
        </div>
        <div className="walk__character">
          <div className="background">
            <img src={road} alt="걷는 길 " />
          </div>

          <div
            className="character"
            style={{
              left: `${characterPosition}%`,
            }}
          >
            <img src={character} alt="걷는 병아리" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFlow;

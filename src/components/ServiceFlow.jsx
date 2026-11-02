/** @format */

import React, { useLayoutEffect, useRef, useState } from "react";
import card01 from "../assets/image/Serviceflow_Card_Icon01.png";
import card02 from "../assets/image/Serviceflow_Card_Icon02.png";
import card03 from "../assets/image/Serviceflow_Card_Icon03.png";
import card04 from "../assets/image/Serviceflow_Card_Icon04.png";
import card05 from "../assets/image/Serviceflow_Card_Icon05.png";
import road from "../assets/image/StepBackGround.png";
import character from "../assets/image/WalkCharacter.png";

const steps = [
  { icon: card01, title: "AI 굿즈 탐색", lines: ["좋아하는 작품으로", "원하는 굿즈를 찾아요."] },
  { icon: card02, title: "주변 굿즈샵 발견", lines: ["내 주변 굿즈샵을", "지도로 한눈에"] },
  { icon: card03, title: "AR 동네 탐험", lines: ["AR로 발견하는", "숨은 굿즈의 스팟"] },
  { icon: card04, title: "방문 이벤트", lines: ["가면 더 즐거운", "현장 이벤트"] },
  { icon: card05, title: "구매·수집·교환", lines: ["구매하고, 모으고,", "팬들과 교류해요."] },
];

const ServiceFlow = () => {
  const [activeStep, setActiveStep] = useState(0);
  const listRef = useRef(null);
  const [track, setTrack] = useState({ top: 0, bottom: 0, current: 0 });

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const measureTrack = () => {
      const origin = list.getBoundingClientRect().top;
      const centers = [...list.querySelectorAll(".card")].map((card) => {
        const bounds = card.getBoundingClientRect();
        return bounds.top - origin + bounds.height / 2;
      });
      setTrack({ top: centers[0], bottom: centers[centers.length - 1], current: centers[activeStep] });
    };
    measureTrack();
    const observer = new ResizeObserver(measureTrack);
    observer.observe(list);
    return () => observer.disconnect();
  }, [activeStep]);

  return (
    <section id="serviceflow">
      <div className="serviceflow__wrap">
        <span className="shooting-star" aria-hidden="true" />
        <h2>
          <span className="heading-line"><strong>검색</strong>부터 <strong>방문</strong>까지,</span>{" "}
          <span className="heading-line"><strong className="color">우리동네 오타쿠</strong>에서</span>
        </h2>

        <div
          className="list__wrap"
          ref={listRef}
          style={{ "--track-top": `${track.top}px`, "--track-bottom": `${track.bottom}px`, "--step-y": `${track.current}px` }}
        >
          <div className="mobile-progress" aria-hidden="true">
            <span className="mobile-progress__line" />
            <img className="mobile-progress__chick" src={character} alt="" />
          </div>
          <ul>
            {steps.map((step, index) => (
              <li key={step.title}>
                <button
                  type="button"
                  className={`card card0${index + 1}`}
                  aria-pressed={activeStep === index}
                  onMouseEnter={() => setActiveStep(index)}
                  onFocus={() => setActiveStep(index)}
                  onClick={() => setActiveStep(index)}
                >
                  <span className="number">{String(index + 1).padStart(2, "0")}</span>
                  <div className="title__wrap">
                    <img src={step.icon} alt="" />
                    <h3>{step.title}</h3>
                  </div>
                  <div className="desc">{step.lines[0]}<br />{step.lines[1]}</div>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="walk__character">
          <div className="background"><img src={road} alt="" /></div>
          <div className="character" style={{ left: `${10 + activeStep * 20}%` }}>
            <img src={character} alt="선택한 단계를 따라 걷는 병아리" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFlow;

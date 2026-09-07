/** @format */

import React from "react";
import title from "../assets/image/BusinessModelTitle.png";
import content from "../assets/image/BusinessModelContent.png";

const BusinessModel = () => {
  return (
    <section id="businessmodel">
      <img
        className="title"
        src={title}
        alt="팬이 모일수록 동네가 더 특별해집니다."
      />

      <img className="content" src={content} alt="비즈니스 모델 내용" />
    </section>
  );
};

export default BusinessModel;

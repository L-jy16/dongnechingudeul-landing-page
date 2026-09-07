/** @format */

import React from "react";
import interview from "../assets/video/Interview.mp4";

const Promotion = () => {
  return (
    <section id="promotion">
      <h3>굿즈샵과 팬, 모두의 이야기</h3>
      <div className="video__wrap">
        <div className="video">
          <div className="video__screen">
            <video src={interview} muted playsInline controls />
          </div>

          <div className="video__frame" />
        </div>
        <div className="list">
          <ul>
            <li>
              <h4 className="title">
                "굿즈 하나 찾으려고 SNS부터
                <br />
                지도까지 계속 검색해요"
              </h4>
              <span className="user">- 일반인 사용자</span>
            </li>
            <li>
              <h4 className="title">
                "근처에 이런 굿즈샵이 있는지
                <br />
                몰랐어요. 바로 알 수 있으면 좋겠어요"
              </h4>
              <span className="user">- 대학생 사용자</span>
            </li>
            <li>
              <h4 className="title">
                "관심 있는 팬들에게
                <br />
                우리 매장을 알릴 방법이 필요해요"
              </h4>
              <span className="user">- 굿즈샵 사장님</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Promotion;

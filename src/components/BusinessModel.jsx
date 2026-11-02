/** @format */

import React from "react";
import title from "../assets/image/BusinessModelTitle.png";
import content from "../assets/image/BusinessModelContent.png";

const benefits = [
  ["관심 있는 팬에게 발견되기", "우리 매장을 좋아할 가능성이 높은 팬에게 자연스럽게 노출됩니다."],
  ["팬덤 수요 알아보기", "어떤 작품과 커뮤니티가 관심을 받는지 지역 팬덤 데이터를 확인합니다."],
  ["방문을 구매로 연결하기", "이벤트와 쿠폰을 통해 온라인 관심을 실제 방문으로 전환합니다."],
  ["새로운 굿즈 발견하기", "좋아하는 굿즈와 협업된 동네 굿즈샵을 발견합니다."],
  ["모으고 교환하기", "굿즈를 수집하고 같은 취향의 팬들과 교환합니다."],
  ["우리 동네 팬덤 만나기", "취향이 비슷한 친구와 관심을 발견하며 동네 안에서 새로운 팬덤 경험을 만듭니다."],
];

const BusinessModel = () => {
  return (
    <section id="businessmodel">
      <img
        className="title"
        src={title}
        alt="팬이 모일수록 동네가 더 특별해집니다."
      />

      <img className="content" src={content} alt="관심 팬에게 발견되기, 팬덤 수요 알아보기, 방문을 구매로 연결하기, 새로운 굿즈 발견하기, 모으고 교환하기, 우리 동네 팬덤 만나기" />
      <ol className="business-benefits" aria-label="팬과 굿즈샵이 함께 만드는 경험">
        {benefits.map(([heading, description], index) => (
          <li key={heading}>
            <span
              className="benefit-icon"
              aria-hidden="true"
              style={{ backgroundPosition: `${(index % 3) * 50}% ${Math.floor(index / 3) * 100}%` }}
            />
            <div className="benefit-copy">
              <h3>{index + 1}. {heading}</h3>
              <p>{description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default BusinessModel;

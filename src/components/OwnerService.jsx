/** @format */

import React from "react";
import procedure from "../assets/image/ShopProcedure.png";
import shop_admin_view from "../assets/image/ShopAdminPage.png";

const OwnerService = () => {
  return (
    <section id="ownerservice">
      <div className="text__wrap">
        <div className="title">
          <h3>
            우리 매장을 좋아할
            <br />
            <span>팬을</span>만나보세요.
          </h3>
          <span className="staricon" aria-hidden="true" />
        </div>

        <span className="desc">
          관심 있는 팬에게 매장을 알리고
          <br />
          실제 방문과 구매로 이어지는 경험을 만들어보세요
        </span>
      </div>

      <div className="img__wrap">
        <div className="owner-process">
          <img className="procedure" src={procedure} alt="매장 등록, 상품·이벤트 설정, 관심 팬 노출, 프로모션 개선, 방문·쿠폰 데이터 확인" />

        </div>
        <figure className="owner-dashboard">
          <img
            className="shop_admin_view"
            src={shop_admin_view}
            alt="매장 관리자 화면: 방문 현황, 누적 방문자, 구매 전환율과 최근 리뷰"
          />
        </figure>
      </div>
      <div className="owner-scenery" aria-hidden="true" />
    </section>
  );
};

export default OwnerService;

/** @format */

import React from "react";
import procedure from "../assets/image/ShopProcedure.png";
import shop_admin_view from "../assets/image/ShopAdminPage2.png";

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
          <span className="staricon" />
        </div>

        <span className="desc">
          괌심 있는 팬에게 매장을 알리고
          <br />
          실제 방문과 구매로 이어지는 경험을 만들어보세요
        </span>
      </div>

      <div className="img__wrap">
        <img className="procedure" src={procedure} alt="상점주 순서" />
        <img
          className="shop_admin_view"
          src={shop_admin_view}
          alt="상점 대시보드 화면"
        />
      </div>
    </section>
  );
};

export default OwnerService;

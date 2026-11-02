/** @format */

import React, { useLayoutEffect, useRef, useState } from "react";

const Promotion = () => {
  const videoScreenRef = useRef(null);
  const [playerScale, setPlayerScale] = useState(1);

  useLayoutEffect(() => {
    const screen = videoScreenRef.current;
    if (!screen) return;

    // Drive enforces a minimum internal viewport; scale its entire player so
    // the video, poster and controls all fit even on narrow phones.
    const resizePlayer = () => setPlayerScale(screen.clientWidth / 640);
    resizePlayer();
    const observer = new ResizeObserver(resizePlayer);
    observer.observe(screen);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="promotion">
      <h3>굿즈샵과 팬, 모두의 이야기</h3>
      <div className="video__wrap">
        <div className="video">
          <div className="video__screen" ref={videoScreenRef} style={{ "--player-scale": playerScale }}>
            <iframe
              src="https://drive.google.com/file/d/1qiaXrvvncf5fDrgS15K4j8W34cuXxpdd/preview"
              width="640"
              height="360"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Interview Video"
            />
          </div>

          <div className="video__frame" aria-hidden="true" />
        </div>
        <div className="list">
          <ul>
            <li>
              <span className="quote-avatar" aria-hidden="true" />
              <h4 className="title">
                "굿즈 하나 찾으려고 SNS부터
                {" "}
                지도까지 계속 검색해요"
              </h4>
              <span className="user">- 일반인 사용자</span>
            </li>
            <li>
              <span className="quote-avatar" aria-hidden="true" />
              <h4 className="title">
                "근처에 이런 굿즈샵이 있는지
                {" "}
                몰랐어요. 바로 알 수 있으면 좋겠어요"
              </h4>
              <span className="user">- 대학생 사용자</span>
            </li>
            <li>
              <span className="quote-avatar" aria-hidden="true" />
              <h4 className="title">
                "관심 있는 팬들에게
                {" "}
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

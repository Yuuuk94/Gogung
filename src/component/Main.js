import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import required modules
import { Scrollbar } from 'swiper';

import dataM from '../data/gogungCategory.json';

function Main() {
  const http = dataM.http;
  const navigate = useNavigate();
  function navi(url) {
    navigate(url);
  }
  return (
    <>
      <div className="slide-wrap">
        <Swiper
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          {dataM.gogung.map((v, k) => (
            <SwiperSlide
              key={k}
              onClick={() => {
                navi(`/gung/${k}`);
              }}
            >
              <div className="swiper-content" key={k}>
                <p className="mwidth main-title" key={k}>
                  <b key={k}>{v.gung_Name}</b>
                  &nbsp;&nbsp;,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;아름다운 우리
                  고궁
                  <span>>>></span>
                </p>
                <img src={v.imgUrl} alt={k} key={k} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
export default Main;

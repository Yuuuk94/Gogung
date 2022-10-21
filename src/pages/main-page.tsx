import React from 'react';
import { useNavigate } from 'react-router-dom';
import SlideContent from 'component/main/slide-content';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import required modules
import { Scrollbar } from 'swiper';

import dataM from '../data/gogungCategory.json';

function Main() {
  // const { http } = dataM;
  const navigate = useNavigate();
  function navi(url: string) {
    navigate(url);
  }
  return (
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
            key={v.gung_Name}
            onClick={() => {
              navi(`/gung/${k}`);
            }}
          >
            <SlideContent title={v.gung_Name} src={v.imgUrl} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default Main;

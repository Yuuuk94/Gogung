import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import Swiper React
import SlideContent from 'component/main/slide-content';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { Scrollbar } from 'swiper';

import dataM from '../data/gogungCategory.json';

function Main() {
  const { gogung } = dataM;
  const navi = useNavigate();

  return (
    <div className="slide-wrap">
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        {gogung &&
          gogung.map((v) => (
            <SwiperSlide
              key={v.gung_Name}
              onClick={() => {
                navi(`/gung/${v.key}?view=0&sort=0`);
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

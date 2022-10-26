import React from 'react';

type SlideContentProps = {
  title: string;
  src: string;
};

function SlideContent({ title, src }: SlideContentProps) {
  return (
    <div className="swiper-content">
      <p className="mwidth main-title">
        <b>{title}</b>
        &nbsp;&nbsp;,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;아름다운 우리 고궁
        <span>{`>>>`}</span>
      </p>
      <img src={src} alt={title} />
    </div>
  );
}

export default SlideContent;

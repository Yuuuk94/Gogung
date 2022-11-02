/* eslint-disable react/no-danger */
import LikeHart from 'component/like/like-hart';
import { GungDetailType, GungInfo } from '../../interface/gung';
import SubContent from './gung-sub-content';

type GungDetailContentProps = {
  gung: GungDetailType;
};

function GungDetailContent({ gung }: GungDetailContentProps) {
  return (
    <>
      <div className="d-context">
        <div className="d-like">
          <LikeHart likeState={false} />
        </div>
        <h4>{gung.contents_kor[0]}</h4>
        <div className="d-text">
          <p>{gung.serial_number}</p>
          <p>{gung.gung_number}</p>
          <p dangerouslySetInnerHTML={{ __html: gung.explanation_kor[0] }} />
        </div>
      </div>
      <p className="d-img">
        <img src={gung.mainImage[0].imgUrl[0]} alt="출처:문화재청" />
      </p>
      <p className="sub-img">
        {gung.listImg[0].image?.map((img: string) => (
          <img src={img} alt="출처:문화재청" key={img} />
        ))}
      </p>
      <div className="d-s-wrap">
        {gung.imageList[0].imageInfo?.map((data: GungInfo) => (
          <SubContent data={data} key={data.imageContentsKor[0]} />
        ))}
      </div>
    </>
  );
}

export default GungDetailContent;

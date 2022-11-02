/* eslint-disable react/no-danger */
import { useEffect, useState } from 'react';
import { getGungDetail } from 'hooks/api/get-detail-api';
import LikeHart from 'component/like/like-hart';
import { GungDetailType, GungInfo } from '../interface/gung';
import { getQuery } from '../hooks/url';

function Gungdetail() {
  // router query 가져오기
  const query = getQuery();

  // gung detail data 가져오기
  const [gung, setGung] = useState<GungDetailType>();

  useEffect(() => {
    async function api() {
      await getGungDetail(query, (result: GungDetailType) => {
        setGung(result);
      });
    }
    api();
  }, []);

  return (
    <div className="mwidth detail-contain">
      {(gung && <GungDetailContent gung={gung} />) || (
        <div className="loading">로딩 중 ...</div>
      )}
    </div>
  );
}

export default Gungdetail;

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
        {gung.listImg[0].image?.map((img) => (
          <img src={img} alt="출처:문화재청" key={img} />
        ))}
      </p>
      <div className="d-s-wrap">
        {gung.imageList[0].imageInfo?.map((data) => (
          <SubContent data={data} key={data.imageContentsKor[0]} />
        ))}
      </div>
    </>
  );
}

type SubContentProps = {
  data: GungInfo;
};

function SubContent({ data }: SubContentProps) {
  return (
    <div className="d-s-container">
      <div className="d-s-context" key="data.imageIndex">
        <h4 className="d-title">{data.imageContentsKor}</h4>
        <div className="d-text">
          <p>{data.imageContentsChi}</p>
          <p>{data.imageIndex[0]}</p>
          <p>{data.imageExplanationKor[0]}</p>
        </div>
      </div>
      <p className="d-s-img">
        <img src={data.imageUrl[0]} alt="출처:문화재청" />
      </p>
    </div>
  );
}

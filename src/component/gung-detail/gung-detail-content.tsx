/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-danger */
import LikeHart from 'component/like/like-hart';
import { getGungName } from 'hooks/gung-name';
import { useLike } from 'hooks/useLike';
import { useEffect, useState } from 'react';
import { GungDetailType, GungInfo } from '../../interface/gung';
import SubContent from './gung-sub-content';

type GungDetailContentProps = {
  gung: GungDetailType;
};

export function getSession() {
  const session = sessionStorage.getItem('likeGung');

  if (session !== null) {
    const likeList = session.split(',');
    return likeList;
  }
  return [];
}

function GungDetailContent({ gung }: GungDetailContentProps) {
  const gungName = getGungName(gung.gung_number[0]);
  const serialNumber = gung.serial_number[0];

  const [likeState, setLikeState] = useState<boolean>(false);

  useEffect(() => {
    const session = getSession();
    if (session.length > 0) {
      if (session.includes(serialNumber)) {
        setLikeState(true);
      }
    }
  }, []);

  function clickHart() {
    setLikeState(!likeState);
    // 좋아요
    if (likeState !== true) {
      const item = getSession();
      const sessionItem = item.concat(serialNumber).join();
      sessionStorage.setItem('likeGung', sessionItem);
    }
    // 안 좋아요
    if (likeState !== false) {
      const item = getSession();
      const sessionItem = item.filter((like) => like !== serialNumber).join();
      sessionStorage.setItem('likeGung', sessionItem);
    }
  }
  return (
    <>
      <div className="d-context">
        <div className="d-like">
          <LikeHart likeState={likeState} clickHart={clickHart} />
        </div>
        <h4>{gung.contents_kor[0]}</h4>
        <div className="d-text">
          <p>{gung.serial_number}</p>
          <p>{gungName}</p>
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

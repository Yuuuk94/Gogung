/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import LikeHart from 'component/like/like-hart';
import { useNavigate } from 'react-router-dom';
import { getSession } from 'hooks/useLike';
import { GungListType } from '../../interface/gung';

type ListViewProps = {
  gung: GungListType;
};

function ListView({ gung }: ListViewProps) {
  const navi = useNavigate();
  function goDetail() {
    navi(
      `/gungdetail?serial_number=${gung.serial_number[0]}&detail_code=${gung.detail_code[0]}&gung_number=${gung.gung_number[0]}`,
    );
  }

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
    <div className="list-contents-contain">
      <LikeHart likeState={likeState} clickHart={clickHart} />
      <p onClick={goDetail} aria-hidden="true">
        <img src={gung.imgUrl[0]} alt="출처:문화재청" />
      </p>
      <p className="list-content-text" onClick={goDetail} aria-hidden="true">
        <span>{gung.serial_number}</span>
        <span>{gung.contents_kor}</span>
        <span dangerouslySetInnerHTML={{ __html: gung.explanation_kor[0] }} />
      </p>
    </div>
  );
}

export default ListView;

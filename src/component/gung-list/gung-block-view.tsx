/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-danger */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import LikeHart from 'component/like/like-hart';
import { useNavigate } from 'react-router-dom';
import { getSession } from 'hooks/useLike';
import { GungListType } from '../../interface/gung';

type ListViewProps = {
  gung: GungListType;
};

function BlockView({ gung }: ListViewProps) {
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

    const item = getSession();
    // 좋아요
    if (likeState !== true) {
      const sessionItem = item.concat(serialNumber).join();
      sessionStorage.setItem('likeGung', sessionItem);
    }
    // 안 좋아요
    if (likeState !== false) {
      const sessionItem = item.filter((like) => like !== serialNumber).join();
      sessionStorage.setItem('likeGung', sessionItem);
    }
  }
  return (
    <div className="block-contents-contain">
      <LikeHart likeState={likeState} clickHart={clickHart} />

      <p className="block-content-img" onClick={goDetail} aria-hidden="true">
        <img src={gung.imgUrl[0]} alt="출처:문화재청" />
        <span>{gung.contents_kor[0]}</span>
      </p>
    </div>
  );
}

export default BlockView;

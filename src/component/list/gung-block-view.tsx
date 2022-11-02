/* eslint-disable react/no-danger */
/* eslint-disable camelcase */

import LikeHart from 'component/like/like-hart';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { GungListType } from '../../interface/gung';
import { getLikeCookie } from '../../hooks/cookies';

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
  const [likeGung, setLikeGung] = useState<string[]>(['']);

  getLikeCookie((result: Array<string>) => {
    setLikeGung(result);
  });
  console.log(likeGung);

  const [likeState, setLikeState] = useState<boolean>(false);

  useEffect(() => {
    likeGung.forEach((like: string) => {
      if (like === gung.serial_number[0]) {
        setLikeState(!likeState);
      }
    });
  }, [likeGung]);

  return (
    <div className="block-contents-contain">
      <LikeHart likeState={likeState} />

      <p className="block-content-img" onClick={goDetail} aria-hidden="true">
        <img src={gung.imgUrl[0]} alt="출처:문화재청" />
        <span>{gung.contents_kor[0]}</span>
      </p>
    </div>
  );
}

export default BlockView;

/* eslint-disable react/no-danger */
/* eslint-disable camelcase */

import LikeHart from 'component/like/like-hart';
import { useNavigate } from 'react-router-dom';
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

  return (
    <div
      className="block-contents-contain"
      onClick={goDetail}
      aria-hidden="true"
    >
      <p className="block-content-img">
        <img src={gung.imgUrl[0]} alt="출처:문화재청" />
        <span>{gung.contents_kor[0]}</span>
      </p>
      <LikeHart gungNm={gung.serial_number[0]} />
    </div>
  );
}

export default BlockView;

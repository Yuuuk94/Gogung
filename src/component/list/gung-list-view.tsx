/* eslint-disable react/no-danger */
/* eslint-disable camelcase */
import LikeHart from 'component/like/like-hart';
import { useNavigate } from 'react-router-dom';
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
  return (
    <div className="list-contents-contain">
      <LikeHart gungNm={gung.serial_number[0]} />
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

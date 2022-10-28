/* eslint-disable react/no-danger */
/* eslint-disable camelcase */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import qs from 'qs';
import ListView from 'component/list/gung-list-view';
import dataM from '../data/gogungCategory.json';
import { getGungList } from '../hooks/api/get-open-api';
import { GungListType } from '../interface/gung';
import GungListHeader from '../component/gung/gung-list-header';
import favorite_border_white_24dp from '../assets/images/favorite_border_white_24dp.svg';
import favorite_red_24dp from '../assets/images/favorite_red_24dp.svg';

function Gung() {
  // router query 가져오기
  const query = qs.parse(window.location.search, {
    ignoreQueryPrefix: true,
  });
  const currentView = Number(query.view);
  const currentSort = Number(query.sort);

  // gung-list-data 가져오기
  const { num } = useParams();
  const gogung = dataM.gogung[Number(num) - 1];

  const [gungList, setGungList] = useState<Array<GungListType>>();

  useEffect(() => {
    getGungList(num, (result: Array<GungListType>) => {
      setGungList(result);
    });
  }, []);

  return (
    <>
      <GungListHeader
        gungName={gogung.gung_Name}
        currentView={currentView}
        currentSort={currentSort}
      />
      <div className="list">
        {gungList &&
          gungList.map((gung) => (
            <BlockView key={gung.contents_kor[0]} gung={gung} />
          ))}
      </div>
    </>
  );
}
export default Gung;

type ListViewProps = {
  gung: GungListType;
};

function BlockView({ gung }: ListViewProps) {
  const img = {
    favoriteWhite: favorite_border_white_24dp,
    favoriteRed: favorite_red_24dp,
  };
  const [like, setLike] = useState<boolean>(false);
  return (
    <div className="block-contents-wrap">
      <div data-s={gung.serial_number} className="block-contents-contain">
        <p className="block-content-img">
          <img
            data-s={gung.serial_number}
            src={gung.imgUrl[0]}
            alt="출처:문화재청"
          />
          <span data-s={gung.serial_number}>{gung.contents_kor}</span>
        </p>
        <span
          className="list-like"
          onClick={() => {
            setLike(!like);
          }}
          aria-hidden="true"
        >
          {like ? (
            <img src={img.favoriteRed} alt="빈하트" />
          ) : (
            <img src={img.favoriteWhite} alt="좋아요" />
          )}
        </span>
      </div>
    </div>
  );
}

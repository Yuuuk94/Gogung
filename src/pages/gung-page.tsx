/* eslint-disable react/no-danger */
/* eslint-disable camelcase */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getGungQuery } from 'hooks/url';
import ListContainer from '../component/gung-list/gung-list-container';
import dataM from '../data/gogungCategory.json';
import { getGungList } from '../hooks/api/get-open-api';
import { GungListType } from '../interface/gung';
import GungListHeader from '../component/gung-list/gung-list-header';
import {
  registeredGung,
  sortGung,
  reverseSortGung,
  likeGung,
} from '../hooks/gung-sort';

function Gung() {
  // gung-list-data 가져오기
  const { num } = useParams();
  const gogung = dataM.gogung[Number(num) - 1];

  // open data 가져오기
  const [gungList, setGungList] = useState<Array<GungListType>>([]);

  useEffect(() => {
    const gung = async () => {
      if (num !== undefined) {
        const result = await getGungList(num);
        setGungList(gungList.concat(result));
      }
    };
    gung();
  }, [num]);

  // query 가져오기
  const query = getGungQuery();
  const currentSort = Number(query.get('sort'));

  // 정렬
  if (gungList !== undefined)
    switch (currentSort) {
      case 0:
        // 등록순
        registeredGung(gungList);
        break;
      case 1:
        // 이름순 정렬
        sortGung(gungList);
        break;
      case 2:
        // 이름역순 정렬
        reverseSortGung(gungList);
        break;
      case 3:
        // 좋아요
        likeGung(gungList);
        break;
      default:
        setGungList([]);
    }

  return (
    <>
      <GungListHeader gungName={gogung.gung_Name} />
      {(gungList && <ListContainer gungList={gungList} />) || (
        <div className="loading">로딩 중 ...</div>
      )}
    </>
  );
}
export default Gung;

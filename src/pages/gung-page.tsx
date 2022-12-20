import { useParams } from 'react-router-dom';
import { getGungQuery } from 'hooks/url';
import { useQuery } from '@tanstack/react-query';
import ListContainer from '../component/gung-list/gung-list-container';
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
  const { num } = useParams();

  // open data 가져오기
  const {
    data: gungList,
    error: gungError,
    isLoading: gungLoading,
  } = useQuery<GungListType[]>(['gungList'], () => getGungList(num));

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
        // setGungList([]);
        registeredGung(gungList);
    }

  return (
    <>
      <GungListHeader />
      {gungList && <ListContainer gungList={gungList} />}
      {gungLoading && <div className="loading">로딩 중 ...</div>}
      {gungError && <div className="loading">멸망 ...</div>}
    </>
  );
}
export default Gung;

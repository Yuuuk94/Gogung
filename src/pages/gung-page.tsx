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
import { registeredGung, sortGung } from '../hooks/gung-sort';

function Gung() {
  // gung-list-data 가져오기
  const { num } = useParams();
  const gogung = dataM.gogung[Number(num) - 1];

  // open data 가져오기
  const [gungList, setGungList] = useState<Array<GungListType>>();

  useEffect(() => {
    getGungList(num, (result: Array<GungListType>) => {
      setGungList(result);
    });
  }, [num]);

  // query 가져오기
  const query = getGungQuery();
  const view = query.get('view');
  const sort = query.get('sort');
  const [currentView, setView] = useState<number>(Number(view));
  const [currentSort, setSort] = useState<number>(Number(sort));

  useEffect(() => {
    setView(Number(view));
    setSort(Number(sort));
  }, [query]);

  const [gungListView, setGungListView] = useState<GungListType[]>();

  useEffect(() => {
    if (gungList !== undefined) {
      const sortData: GungListType[] = gungList;
      switch (currentSort) {
        case 0:
          // 등록순
          registeredGung(sortData);
          setGungListView(sortData);

          break;
        case 1:
          // 이름순 정렬
          sortGung(sortData);
          setGungListView(sortData);

          break;
        case 2:
          // 이름역순 정렬
          sortGung(sortData);
          setGungListView(sortData);

          break;
        case 3:
          // 좋아요
          registeredGung(sortData);
          setGungListView(sortData);

          break;
        default:
          registeredGung(sortData);
          setGungListView(sortData);
      }
    }
    return () => {
      setGungListView([]);
    };
  }, [currentSort, gungList]);

  return (
    <>
      <GungListHeader gungName={gogung.gung_Name} />
      {(gungListView && (
        <ListContainer currentView={currentView} gungList={gungListView} />
      )) || <div className="loading">로딩 중 ...</div>}
    </>
  );
}
export default Gung;

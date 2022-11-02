/* eslint-disable react/no-danger */
/* eslint-disable camelcase */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ListView from 'component/gung-list/gung-list-view';
import BlockView from 'component/gung-list/gung-block-view';
import { getQuery } from 'hooks/url';
import ListContainer from '../component/gung-list/gung-list-container';
import dataM from '../data/gogungCategory.json';
import { getGungList } from '../hooks/api/get-open-api';
import { GungListType } from '../interface/gung';
import GungListHeader from '../component/gung-list/gung-list-header';
import { registeredGung, sortGung } from '../hooks/gung-sort';

function Gung() {
  // gung-list-data 가져오기
  const { num } = useParams();
  const pageNm = num;
  const gogung = dataM.gogung[Number(pageNm) - 1];

  // open data 가져오기
  const [gungList, setGungList] = useState<Array<GungListType>>();

  useEffect(() => {
    getGungList(pageNm, (result: Array<GungListType>) => {
      setGungList(result);
    });
  }, [pageNm]);

  // query 가져오기
  const query = getQuery();
  const currentView = Number(query.view);
  const currentSort = Number(query.sort);

  // query sort에 따른 데이터 정렬
  const [gungListView, setGungListView] = useState<Array<GungListType>>();

  useEffect(() => {
    if (gungList !== undefined) {
      setGungListView(gungList);
      if (currentSort === 0) {
        // 등록순
        const sort = registeredGung(gungList);
        setGungListView(sort);
      } else if (currentSort === 1) {
        // 이름순 정렬
        const sort = sortGung(gungList);
        setGungListView(sort);
      } else if (currentSort === 2) {
        // 이름순 역정렬
        const sort = sortGung(gungList);
        setGungListView(sort);
      }
    }
  }, [query, gungListView]);

  return (
    <>
      <GungListHeader
        gungName={gogung.gung_Name}
        currentView={currentView}
        currentSort={currentSort}
      />
      <ListContainer listType={currentView}>
        {(gungListView &&
          gungListView?.map((gung) =>
            currentView === 0 ? (
              <BlockView key={gung.contents_kor[0]} gung={gung} />
            ) : (
              <ListView key={gung.contents_kor[0]} gung={gung} />
            ),
          )) || <div className="loading">로딩 중 ...</div>}
      </ListContainer>
    </>
  );
}
export default Gung;

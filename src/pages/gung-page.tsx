/* eslint-disable react/no-danger */
/* eslint-disable camelcase */
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import qs from 'qs';
import ListView from 'component/list/gung-list-view';
import BlockView from 'component/list/gung-block-view';
import ListContainer from '../component/list/gung-list-container';
import dataM from '../data/gogungCategory.json';
import { getGungList } from '../hooks/api/get-open-api';
import { GungListType } from '../interface/gung';
import GungListHeader from '../component/gung/gung-list-header';

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

  // router query 가져오기
  const query = qs.parse(window.location.search, {
    ignoreQueryPrefix: true,
  });
  const currentView = Number(query.view);
  const currentSort = Number(query.sort);

  // query sort에 따른 데이터 정렬
  const [gungListView, setGungListView] = useState<Array<GungListType>>();

  useEffect(() => {
    if (currentSort === 0) {
      gungList?.sort((a: GungListType, b: GungListType): 1 | 0 | -1 => {
        if (a.serial_number[0] > b.serial_number[0]) {
          return 1;
        }
        if (a.serial_number[0] < b.serial_number[0]) {
          return -1;
        }
        return 0;
      });
      setGungListView(gungList);
    }

    if (currentSort === 1) {
      gungList?.sort((a: GungListType, b: GungListType): 1 | 0 | -1 => {
        if (a.contents_kor[0] > b.contents_kor[0]) {
          return 1;
        }
        if (a.contents_kor[0] < b.contents_kor[0]) {
          return -1;
        }
        return 0;
      });
      setGungListView(gungList);
    }

    if (currentSort === 2) {
      gungList?.sort((a: GungListType, b: GungListType): 1 | 0 | -1 => {
        if (a.contents_kor[0] < b.contents_kor[0]) {
          return 1;
        }
        if (a.contents_kor[0] > b.contents_kor[0]) {
          return -1;
        }
        return 0;
      });
      setGungListView(gungList);
    }

    if (currentSort === 3) {
      console.log('좋아요!');
    }
  }, [gungList, currentSort, gungListView, currentView]);

  return (
    <>
      <GungListHeader
        gungName={gogung.gung_Name}
        currentView={currentView}
        currentSort={currentSort}
      />
      <ListContainer listType={currentView}>
        {gungListView && currentView === 0
          ? gungListView?.map((gung) => (
              <BlockView key={gung.contents_kor[0]} gung={gung} />
            ))
          : gungListView?.map((gung) => (
              <ListView key={gung.contents_kor[0]} gung={gung} />
            )) || <div className="loading">로딩 중 ...</div>}
      </ListContainer>
    </>
  );
}
export default Gung;

/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import GungListType from 'interface/list';
import SearchBar from 'component/search/search-bar';
import { getAllGungList } from '../hooks/api/get-open-api';

function Search() {
  // gung-list-data 가져오기
  const [allGungList, setAllGungList] = useState<Array<GungListType>>();
  useEffect(() => {
    getAllGungList((result: Array<GungListType>) => {
      setAllGungList(result);
    });
  }, []);

  const [search, setSearch] = useState<Array<GungListType>>();

  const navigate = useNavigate();

  // 상세페이지 연동
  // function moveDetail(e) {
  //   const dNum = e.target.dataset.s;
  //   if (e.target.dataset.s) e.target = navigate(`/listdetail/${dNum}`);
  // }

  // function gungNum(n) {
  //   const gung = dataM.gogung[n].gung_Name;
  //   return gung;
  // }

  return (
    <>
      {allGungList && <SearchBar allGungList={allGungList} />}
      {/* <div className="mwidth result">
        {search?.map((v, k) => {
          return (
            <div
              key={k}
              data-s={v.serial_number}
              className="result-content"
              onClick={moveDetail}
            >
              <p key={k} data-s={v.serial_number}>
                {v.serial_number}
              </p>
              <p key={k} data-s={v.serial_number}>
                {v.contents_kor}
              </p>
              <p key={k} data-s={v.serial_number}>
                ({gungNum(v.gung_number - 1)})
              </p>
            </div>
          );
        })}
      </div> */}
    </>
  );
}
export default Search;

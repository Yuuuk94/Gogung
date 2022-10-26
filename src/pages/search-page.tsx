/* eslint-disable react/jsx-no-bind */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import GungListType from 'interface/list';
import SearchBar from 'component/search/search-bar';
import SearchResult from 'component/search/search-result';
import { getAllGungList } from '../hooks/api/get-open-api';

function Search() {
  // gung-list-data 가져오기
  const [allGungList, setAllGungList] = useState<Array<GungListType>>();

  useEffect(() => {
    getAllGungList((result: Array<GungListType>) => {
      setAllGungList(result);
    });
  }, []);

  // 검색결과 가져오기
  const [search, setSearch] = useState<Array<GungListType>>();

  function getSearch(result: Array<GungListType>): void {
    setSearch(result);
  }

  return (
    <>
      {allGungList && (
        <SearchBar allGungList={allGungList} getSearch={getSearch} />
      )}
      {search && <SearchResult search={search} />}
    </>
  );
}

export default Search;

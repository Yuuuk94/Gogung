/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react';
import { GungListType } from 'interface/gung';
import SearchBar from 'component/search/search-bar';
import SearchResult from 'component/search/search-result';
import { useQueries, useQuery } from '@tanstack/react-query';
import Gogung from 'data/gogungCategory.json';
import { getGungList } from '../hooks/api/get-open-api';

function Search() {
  // const [allGungList, setAllGungList] = useState<GungListType[]>([]);

  // open data 가져오기
  // const result = useQueries({
  //   queries: Gogung.gogung.map((gung) => {
  //     return {
  //       queryKey: ['gungList', gung.key],
  //       queryFn: () => getGungList(gung.key),
  //     };
  //   }),
  // });

  // useEffect(() => {
  //   result.map((re) => {
  //     if (re.status === 'success' && re.data !== null) {
  //       setAllGungList(allGungList.concat(re.data));
  //     }
  //   });
  //   console.log(result);
  // }, [result[0].isSuccess]);
  const { data: gungList, isLoading: gungLoading } = useQuery<GungListType[]>(
    ['allGungList'],
    () => getGungList('0'),
  );

  // 검색결과 가져오기
  const [search, setSearch] = useState<Array<GungListType>>();

  function getSearch(result: Array<GungListType>): void {
    setSearch(result);
  }

  return (
    <>
      {gungList && <SearchBar allGungList={gungList} getSearch={getSearch} />}
      {gungLoading && <div className="loading">로딩 중 ...</div>}
      {search && <SearchResult search={search} />}
    </>
  );
}

export default Search;

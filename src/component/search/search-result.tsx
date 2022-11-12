import React from 'react';
import { GungListType } from 'interface/gung';
import SearchResultContent from './search-result-content';

type SearchResultProps = {
  search: Array<GungListType>;
};

function SearchResult({ search }: SearchResultProps) {
  // 검색 값 가져오기
  const searchData = search;

  return (
    <div className="mwidth result">
      {searchData?.map((data) => {
        return (
          <SearchResultContent
            key={data.contents_kor[0]}
            name={data.contents_kor[0]}
            serial={data.serial_number[0]}
            gungNm={data.gung_number[0]}
            detailCode={data.detail_code[0]}
          />
        );
      })}
    </div>
  );
}

export default SearchResult;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GungListType } from 'interface/gung';
import gungCategory from '../../data/gogungCategory.json';

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

type Props = {
  name: string;
  serial: string;
  gungNm: string;
  detailCode: string;
};

function SearchResultContent({ name, serial, gungNm, detailCode }: Props) {
  // 궁 이름으로 변환
  function gungNum(num: string): string {
    const gungNm = Number(num) - 1;
    const gung = gungCategory.gogung[gungNm].gung_Name;
    return gung;
  }
  // 상세 페이지 이동
  const navi = useNavigate();
  function goDetail() {
    navi(
      `/gungdetail?serial_number=${serial}&detail_code=${detailCode}&gung_number=${gungNm}`,
    );
  }
  return (
    <div className="result-content" onClick={goDetail} aria-hidden="true">
      <p>{serial}</p>
      <p>{name}</p>
      <p>({gungNum(gungNm)})</p>
    </div>
  );
}

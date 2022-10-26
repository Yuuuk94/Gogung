import React from 'react';
import { useNavigate } from 'react-router-dom';
import GungListType from 'interface/list';
import gungCategory from '../../data/gogungCategory.json';

type SearchResultProps = {
  search: Array<GungListType>;
};

function SearchResult({ search }: SearchResultProps) {
  const searchData = search;
  const navigate = useNavigate();

  // 상세페이지 연동
  function moveDetail(e: any) {
    const dNum = e.target.dataset.s;
    if (e.target.dataset.s) e.target = navigate(`/listdetail/${dNum}`);
  }

  // 궁 이름으로 변환
  function gungNum(num: string) {
    const gungNm = Number(num) - 1;
    const gung = gungCategory.gogung[gungNm].gung_Name;
    return gung;
  }

  return (
    <div className="mwidth result">
      {searchData?.map((v) => {
        return (
          <div
            key={v.serial_number[0]}
            data-s={v.serial_number}
            className="result-content"
            onClick={moveDetail}
            aria-hidden="true"
          >
            <p data-s={v.serial_number}>{v.serial_number}</p>
            <p data-s={v.serial_number}>{v.contents_kor}</p>
            <p data-s={v.serial_number}>({gungNum(v.gung_number[0])})</p>
          </div>
        );
      })}
    </div>
  );
}

export default SearchResult;

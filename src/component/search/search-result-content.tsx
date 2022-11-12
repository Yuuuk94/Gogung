import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getGungName } from 'hooks/gung-name';

type Props = {
  name: string;
  serial: string;
  gungNm: string;
  detailCode: string;
};

function SearchResultContent({ name, serial, gungNm, detailCode }: Props) {
  // 상세 페이지 이동
  const navi = useNavigate();
  function goDetail() {
    navi(
      `/gungdetail?serial_number=${serial}&detail_code=${detailCode}&gung_number=${gungNm}`,
    );
  }

  const gungName = getGungName(gungNm);
  return (
    <div className="result-content" onClick={goDetail} aria-hidden="true">
      <p>{serial}</p>
      <p>{name}</p>
      <p>{`(${gungName})`}</p>
    </div>
  );
}

export default SearchResultContent;

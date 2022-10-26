/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';

import GungListType from 'interface/list';
import search_white_24dp from '../../assets/images/search_white_24dp.svg';

type SearchBarProps = {
  allGungList: Array<GungListType>;
};

function SearchBar({ allGungList }: SearchBarProps) {
  const img = {
    searchWhite: search_white_24dp,
  };
  const [randomNm, setRandomNm] = useState<number>(0);
  let recommend = '';
  useEffect(() => {
    const nm = Math.floor(Math.random() * allGungList.length);
    setRandomNm(nm);
  }, []);

  // 랜덤 이미지+문구
  recommend = `오늘은 "${allGungList[randomNm].contents_kor[0]}"에 가볼까?`;

  const [search, setSearch] = useState<Array<GungListType>>();
  console.log(search);

  // 검색 기능
  function toSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    let result: Array<GungListType> = [];

    if (value) {
      result = allGungList.filter((data) => {
        return data.contents_kor[0].search(value) !== -1;
      });
    } else {
      setSearch([]);
    }

    if (result.length > 0) {
      setSearch(result);
    }
  }

  return (
    <div className="search">
      <p>
        <span />
        <img
          src={allGungList[randomNm].imgUrl[0]}
          alt={allGungList[randomNm].contents_kor[0]}
        />
      </p>
      <div className="mwidth search-bar">
        <span>
          <img src={img.searchWhite} alt="search" />
        </span>
        <input
          type="text"
          placeholder={recommend}
          onChange={(e) => toSearch(e)}
        />
      </div>
    </div>
  );
}

export default SearchBar;

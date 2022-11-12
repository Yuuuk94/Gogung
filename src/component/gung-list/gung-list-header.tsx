/* eslint-disable no-restricted-globals */
/* eslint-disable camelcase */
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { getGungQuery } from 'hooks/url';
import grid_view_black_24dp from '../../assets/images/grid_view_black_24dp.svg';
import view_list_black_24dp from '../../assets/images/view_list_black_24dp.svg';

type GungListHeaderProps = {
  gungName: string;
};

function GungListHeader({ gungName }: GungListHeaderProps) {
  const img = {
    graidView: grid_view_black_24dp,
    viewList: view_list_black_24dp,
  };

  // query 가져오기
  const query = getGungQuery();
  const view = query.get('view');
  const sort = query.get('sort');
  const [currentView, setView] = useState<number>(Number(view));
  const [currentSort, setSort] = useState<number>(Number(sort));

  const navi = useNavigate();
  useEffect(() => {
    navi({
      search: `?view=${currentView}&sort=${currentSort}`,
    });
  }, [currentView, currentSort]);

  return (
    <div className="mwidth gung-title">
      <h2>{gungName}</h2>
      <p className="list-view">
        <span
          onClick={() => {
            setView(0);
          }}
          aria-hidden="true"
        >
          <img src={img.graidView} alt="갤러리 보기" />
        </span>
        <span
          onClick={() => {
            setView(1);
          }}
          aria-hidden="true"
        >
          <img src={img.viewList} alt="리스트 보기" />
        </span>
        <select
          className="list-sort"
          defaultValue={currentSort}
          onChange={(e) => {
            const { value } = e.target;
            const result = Number(value);
            setSort(result);
          }}
        >
          <option value={0}>등록순</option>
          <option value={1}>오름차순</option>
          <option value={2}>내림차순</option>
          <option value={3}>인기순</option>
        </select>
      </p>
    </div>
  );
}

export default GungListHeader;

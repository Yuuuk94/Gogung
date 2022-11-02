/* eslint-disable no-restricted-globals */
/* eslint-disable camelcase */
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import grid_view_black_24dp from '../../assets/images/grid_view_black_24dp.svg';
import view_list_black_24dp from '../../assets/images/view_list_black_24dp.svg';

type GungListHeaderProps = {
  gungName: string;
  currentView: number;
  currentSort: number;
};

function GungListHeader({
  gungName,
  currentView,
  currentSort,
}: GungListHeaderProps) {
  const img = {
    graidView: grid_view_black_24dp,
    viewList: view_list_black_24dp,
  };

  const select = useRef<HTMLSelectElement>(null);
  const [view, setView] = useState<number>(currentView);
  const [sort, setSort] = useState<number>(currentSort);

  const navi = useNavigate();
  useEffect(() => {
    if (currentView === view || currentSort === sort) {
      navi({
        search: `?view=${view}&sort=${sort}`,
      });
    }
  }, [view, sort]);
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
          <img data-num="0" src={img.graidView} alt="갤러리 보기" />
        </span>
        <span
          onClick={() => {
            setView(1);
          }}
          aria-hidden="true"
        >
          <img data-num="1" src={img.viewList} alt="리스트 보기" />
        </span>
        <select
          ref={select}
          className="list-sort"
          value={sort}
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

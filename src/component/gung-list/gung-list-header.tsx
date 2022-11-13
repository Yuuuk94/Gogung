/* eslint-disable no-restricted-globals */
/* eslint-disable camelcase */
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, ChangeEventHandler } from 'react';
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

  const [view, setView] = useState<number>(currentView);
  const [sort, setSort] = useState<number>(currentSort);

  const navi = useNavigate();
  useEffect(() => {
    if (currentView !== view || currentSort !== sort) {
      navi(
        {
          search: `?view=${view}&sort=${sort}`,
        },
        // { replace: true },
      );
    }
  }, [view, sort]);

  function getSort(e: any) {
    const { value } = e.target;
    const result = Number(value);
    setSort(result);
  }

  function getView(num: number) {
    setView(num);
  }

  return (
    <div className="mwidth gung-title">
      <h2>{gungName}</h2>
      <p className="list-view">
        <span
          onClick={() => {
            getView(0);
          }}
          aria-hidden="true"
        >
          <img src={img.graidView} alt="갤러리 보기" />
        </span>
        <span
          onClick={() => {
            getView(1);
          }}
          aria-hidden="true"
        >
          <img src={img.viewList} alt="리스트 보기" />
        </span>
        <select className="list-sort" value={currentSort} onChange={getSort}>
          <option value={0}>등록순</option>
          <option value={1}>오름차순</option>
          <option value={2}>내림차순</option>
          <option value={3} hidden>
            인기순
          </option>
        </select>
      </p>
    </div>
  );
}

export default GungListHeader;

/* eslint-disable camelcase */
import { getGungQuery } from 'hooks/url';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import graidView from '../../assets/images/grid_view_black_24dp.svg';
import viewList from '../../assets/images/view_list_black_24dp.svg';

type GungListHeaderProps = {
  gungName: string;
};

function GungListHeader({ gungName }: GungListHeaderProps) {
  // query 가져오기
  const query = getGungQuery();
  const currentView = Number(query.get('view'));
  const currentSort = Number(query.get('sort'));

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

  function getSort(e: React.ChangeEvent<HTMLSelectElement>) {
    const { value } = e.target;
    setSort(Number(value));
  }

  function getView(e: React.MouseEvent<HTMLParagraphElement>) {
    const button = e.target as HTMLParagraphElement;
    const actionName = button.getAttribute('data-view');
    setView(Number(actionName));
  }

  return (
    <div className="mwidth gung-title">
      <h2>{gungName}</h2>
      <div className="list-view" onClick={getView} aria-hidden="true">
        <button type="button" data-view="graid">
          <img src={graidView} alt="갤러리 보기" data-view="0" />
        </button>
        <button type="button" data-view="list">
          <img src={viewList} alt="리스트 보기" data-view="1" />
        </button>
        <select className="list-sort" value={currentSort} onChange={getSort}>
          <option value={0}>등록순</option>
          <option value={1}>오름차순</option>
          <option value={2}>내림차순</option>
          <option value={3} hidden>
            인기순
          </option>
        </select>
      </div>
    </div>
  );
}

export default GungListHeader;

import { GungListType } from 'interface/gung';
import { useEffect, useState } from 'react';
import BlockView from './gung-block-view';
import ListView from './gung-list-view';

type ListContainerProps = {
  currentView: number;
  currentSort: number;
  gungList: GungListType[];
};

function ListContainer({
  currentView,
  currentSort,
  gungList,
}: ListContainerProps) {
  console.log(gungList, currentSort);

  return (
    <div
      className={
        currentView === 0
          ? 'mwidth block-contents-wrap'
          : 'mwidth list-contents-wrap'
      }
    >
      {gungList &&
        gungList.map((gung) =>
          currentView === 0 ? (
            <BlockView key={gung.contents_kor[0]} gung={gung} />
          ) : (
            <ListView key={gung.contents_kor[0]} gung={gung} />
          ),
        )}
    </div>
  );
}

export default ListContainer;

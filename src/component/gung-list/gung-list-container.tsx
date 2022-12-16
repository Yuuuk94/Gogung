import React from 'react';
import { GungListType } from 'interface/gung';
import { getGungQuery } from 'hooks/url';
import BlockView from './gung-block-view';
import ListView from './gung-list-view';

type ListContainerProps = {
  gungList: GungListType[];
};

function ListContainer({ gungList }: ListContainerProps) {
  // query 가져오기
  const query = getGungQuery();
  const currentView = Number(query.get('view'));
  return (
    <div
      className={
        currentView === 0
          ? 'mwidth block-contents-wrap'
          : 'mwidth list-contents-wrap'
      }
    >
      {gungList?.map((gung) =>
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

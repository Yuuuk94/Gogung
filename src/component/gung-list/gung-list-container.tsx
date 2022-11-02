import React, { useState } from 'react';

type ListContainerProps = {
  children: React.ReactNode;
  listType: number;
};

function ListContainer({ children, listType }: ListContainerProps) {
  return (
    <div
      className={
        listType === 0
          ? 'mwidth block-contents-wrap'
          : 'mwidth list-contents-wrap'
      }
    >
      {children}
    </div>
  );
}

export default ListContainer;

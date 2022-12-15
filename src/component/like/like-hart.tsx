/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import favorite_border_white_24dp from '../../assets/images/favorite_border_white_24dp.svg';
import favorite_red_24dp from '../../assets/images/favorite_red_24dp.svg';

type LikeHartProps = {
  clickHart: () => void;
  likeState: boolean;
};

function LikeHart({ likeState, clickHart }: LikeHartProps) {
  const img = {
    favoriteWhite: favorite_border_white_24dp,
    favoriteRed: favorite_red_24dp,
  };

  return (
    <span className="list-like" onClick={clickHart} aria-hidden="true">
      {!likeState ? (
        <img src={img.favoriteWhite} alt="빈하트" />
      ) : (
        <img src={img.favoriteRed} alt="좋아요" />
      )}
    </span>
  );
}

export default LikeHart;

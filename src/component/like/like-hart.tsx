/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import { useReducer } from 'react';
import favorite_border_white_24dp from '../../assets/images/favorite_border_white_24dp.svg';
import favorite_red_24dp from '../../assets/images/favorite_red_24dp.svg';

type LikeHartProps = {
  likeState: boolean;
};

function LikeHart({ likeState }: LikeHartProps) {
  const img = {
    favoriteWhite: favorite_border_white_24dp,
    favoriteRed: favorite_red_24dp,
  };

  const [like, setLike] = useState<boolean>(likeState);
  useEffect(() => {
    setLike(likeState);
  }, [likeState]);

  function clickHart() {
    setLike(!like);
  }

  return (
    <span className="list-like" onClick={clickHart} aria-hidden="true">
      {!like ? (
        <img src={img.favoriteWhite} alt="빈하트" />
      ) : (
        <img src={img.favoriteRed} alt="좋아요" />
      )}
    </span>
  );
}

export default LikeHart;

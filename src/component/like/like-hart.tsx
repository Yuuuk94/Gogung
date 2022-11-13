/* eslint-disable array-callback-return */
/* eslint-disable camelcase */
import { addLikeCookie, getLikeCookie } from 'hooks/cookies';
import { useEffect, useState } from 'react';
import favorite_border_white_24dp from '../../assets/images/favorite_border_white_24dp.svg';
import favorite_red_24dp from '../../assets/images/favorite_red_24dp.svg';

type LikeHartProps = {
  likeState: boolean;
  serialNum: string;
};

function LikeHart({ likeState, serialNum }: LikeHartProps) {
  const img = {
    favoriteWhite: favorite_border_white_24dp,
    favoriteRed: favorite_red_24dp,
  };

  const serial_number = serialNum;
  const [like, setLike] = useState<boolean>(likeState);

  // // 좋아요 쿠킹
  // const cookies = getLikeCookie();
  // if (cookies !== undefined) {
  //   cookies.filter((cookie) => {
  //     if (cookie === serial_number) {
  //       setLike(true);
  //     }
  //   });
  // }

  useEffect(() => {
    setLike(likeState);
  }, [likeState]);

  function clickHart() {
    // const result = [''];
    // if (likeState === false) {
    //   result.push(serial_number);
    // }else{

    // }
    setLike(!like);
    addLikeCookie([serial_number]);
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

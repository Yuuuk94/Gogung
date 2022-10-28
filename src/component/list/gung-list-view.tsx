/* eslint-disable react/no-danger */
/* eslint-disable camelcase */
import { useState } from 'react';
import { GungListType } from '../../interface/gung';
import favorite_border_white_24dp from '../assets/images/favorite_border_white_24dp.svg';
import favorite_red_24dp from '../assets/images/favorite_red_24dp.svg';

type ListViewProps = {
  gung: GungListType;
};

function ListView({ gung }: ListViewProps) {
  const img = {
    favoriteWhite: favorite_border_white_24dp,
    favoriteRed: favorite_red_24dp,
  };
  const [like, setLike] = useState<boolean>(false);
  return (
    <div className="mwidth list-contents-wrap">
      <div data-s={gung.serial_number[0]} className="list-contents-contain">
        <p>
          <img
            data-s={gung.serial_number[0]}
            src={gung.imgUrl[0]}
            alt="출처:문화재청"
          />
        </p>
        <span
          className="list-like"
          onClick={() => {
            setLike(!like);
          }}
          aria-hidden="true"
        >
          {like ? (
            <img src={img.favoriteRed} alt="빈하트" />
          ) : (
            <img src={img.favoriteWhite} alt="좋아요" />
          )}
        </span>
        <p data-s={gung.serial_number[0]} className="list-content-text">
          <span data-s={gung.serial_number[0]}>{gung.serial_number}</span>
          <span data-s={gung.serial_number[0]}>{gung.contents_kor}</span>
          <span
            data-s={gung.serial_number[0]}
            dangerouslySetInnerHTML={{ __html: gung.explanation_kor[0] }}
          />
        </p>
      </div>
    </div>
  );
}

export default ListView;

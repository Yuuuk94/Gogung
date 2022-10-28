import { useEffect, useState } from 'react';
import { getGungDetail } from 'hooks/api/get-detail-api';
import qs from 'qs';
import { Link } from 'react-router-dom';
import { GungDetailType } from '../interface/gung';

function Listdetail() {
  // router query 가져오기
  const query = qs.parse(window.location.search, {
    ignoreQueryPrefix: true,
  });

  // gung detail data 가져오기
  const [gung, setGung] = useState<GungDetailType>();

  useEffect(() => {
    getGungDetail(query, (result: GungDetailType) => {
      setGung(result);
    });
    console.log(gung);
  }, [gung]);

  return (
    <div className="mwidth detail-contain">
      {(gung && 'hi') || <Link to="/">자료를 찾을 수 없습니다...</Link>}
      {/* <div className="d-context">
        <h4 className="d-title">${v.contents_kor}</h4>
        <div className="d-text">
          <p>{v.serial_number}</p>
          <p>{gung(v.gung_number - 1)}</p>
          <p>{v.explanation_kor}</p>
        </div>
      </div>
      <p className="d-img">
        <img src={v.imgUrl} alt="출처:문화재청" />
      </p> */}
    </div>
  );
}

export default Listdetail;

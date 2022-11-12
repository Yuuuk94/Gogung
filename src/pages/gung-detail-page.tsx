/* eslint-disable react/no-danger */
import { useEffect, useState } from 'react';
import { getGungDetail } from 'hooks/api/get-detail-api';
import GungDetailContent from 'component/gung-detail/gung-detail-content';
import { GungDetailType } from '../interface/gung';
import { getQuery } from '../hooks/url';

function Gungdetail() {
  // router query 가져오기
  const query = getQuery();

  // gung detail data 가져오기
  const [gung, setGung] = useState<GungDetailType>();

  useEffect(() => {
    async function api() {
      await getGungDetail(query, (result: GungDetailType) => {
        setGung(result);
      });
    }
    api();
  }, []);

  return (
    <div className="mwidth detail-contain">
      {(gung && <GungDetailContent gung={gung} />) || (
        <div className="loading">로딩 중 ...</div>
      )}
    </div>
  );
}

export default Gungdetail;

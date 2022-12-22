import { getGungDetail } from 'hooks/api/get-detail-api';
import GungDetailContent from 'component/gung-detail/gung-detail-content';
import { useQuery } from '@tanstack/react-query';
import { GungDetailType } from '../interface/gung';
import { getQuery } from '../hooks/url';

function Gungdetail() {
  // router query 가져오기
  const query = getQuery();

  // gung detail data 가져오기
  const {
    data: gung,
    error: gungError,
    isLoading: gungLoading,
  } = useQuery<GungDetailType>(['gungDetail'], () => getGungDetail(query));

  return (
    <div className="mwidth detail-contain">
      {gung && <GungDetailContent gung={gung} />}
      {gungLoading && <div className="loading">로딩 중 ...</div>}
    </div>
  );
}

export default Gungdetail;

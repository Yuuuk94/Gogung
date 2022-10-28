import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import qs from 'qs';
import dataM from '../data/gogungCategory.json';
import { getGungList } from '../hooks/api/get-open-api';
import { GungListType } from '../interface/gung';
import GungListHeader from '../component/gung/gung-list-header';

function Gung() {
  // router query 가져오기
  const query = qs.parse(window.location.search, {
    ignoreQueryPrefix: true,
  });
  console.log(query);
  const currentView = Number(query.view);
  const currentSort = Number(query.sort);

  // gung-list-data 가져오기
  const { num } = useParams();
  const gogung = dataM.gogung[Number(num) - 1];

  const [gungList, setGungList] = useState<Array<GungListType>>();

  useEffect(() => {
    getGungList(num, (result: Array<GungListType>) => {
      setGungList(result);
    });
  }, []);

  return (
    <>
      <GungListHeader
        gungName={gogung.gung_Name}
        currentView={currentView}
        currentSort={currentSort}
      />
      <div className="list">{/* <List sort={select} /> */}</div>
    </>
  );
}
export default Gung;

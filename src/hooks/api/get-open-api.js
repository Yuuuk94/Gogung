import axios from 'axios';
import { parseXml } from '../parser';

// get Gogung List Data from OpenAPI
export async function getGungList(gungNm) {
  const client = axios.create({
    baseURL: 'https://www.heritage.go.kr/heri/gungDetail',
  });
  const result = await client
    .get(`/gogungListOpenApi.do?gung_number=${gungNm}`)
    .then((response) => {
      const dataSet = response.data;
      // xml 파싱
      const parsingData = parseXml(dataSet);
      return parsingData.result.list;
    })
    .catch((err) => console.error(err));
  return result;
}

export async function getAllGungList(callBack) {
  Promise.all([
    getGungList(1),
    getGungList(2),
    getGungList(3),
    getGungList(4),
    getGungList(5),
  ])
    .then((data) => {
      const result = [];
      // 각각 궁리스트 합치기
      data.forEach((list) => {
        list.forEach((v) => {
          result.concat(v);
        });
      });
      callBack(result);
    })
    .catch((err) => console.log(err));
}

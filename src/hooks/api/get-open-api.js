import axios from 'axios';
import { parseXml } from '../parser';

// get Gogung List Data from OpenAPI
export async function setGungList(gungNm) {
  const client = axios.create({
    baseURL: 'https://www.heritage.go.kr/heri/gungDetail',
  });
  const result = await client
    .get(`/gogungListOpenApi.do?gung_number=${gungNm}`)
    .then((response) => {
      const dataSet = response.data;
      const parsingData = parseXml(dataSet);
      return parsingData.result.list;
    })
    .catch((err) => console.error(err));

  return result;
}

export async function getAllGungList(callBack) {
  Promise.all([
    setGungList(1),
    setGungList(2),
    setGungList(3),
    setGungList(4),
    setGungList(5),
  ])
    .then((data) => {
      const result = [];
      // 각각 궁리스트 합치기
      data.forEach((list) => {
        list.forEach((v) => {
          result.push(v);
        });
      });
      callBack(result);
    })
    .catch((err) => console.log(err));
}

export function getGungList(gungNm, callBack) {
  try {
    const promise = setGungList(gungNm);
    promise
      .then((data) => {
        if (data.length > 0) {
          callBack(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
}

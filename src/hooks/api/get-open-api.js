import axios from 'axios';
import { parseXml } from '../common/parser';

// get Gogung List Data from OpenAPI
export async function setGungList(gungNm) {
  const API_URL = process.env.REACT_APP_API_URL;
  let result = {};

  await axios({
    method: 'get',
    url: `${API_URL}/heri/gungDetail/gogungListOpenApi.do?gung_number=${gungNm}`,
  })
    .then((response) => {
      const dataSet = response.data;
      const parsingData = parseXml(dataSet);
      result = parsingData.result;
    })
    .catch((err) => console.error(err));

  return result.list;
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

export async function getGungList(gungNm, callBack) {
  try {
    const promise = setGungList(gungNm);
    promise.then((data) => {
      if (data.length > 0) {
        callBack(data);
      }
    });
  } catch (err) {
    console.log(err);
  }
}

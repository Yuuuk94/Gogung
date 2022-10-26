import axios from 'axios';
import xml2js from 'xml2js';

// parsing xml to json
export function parseXml(dataSet) {
  let result = {};
  xml2js.parseString(dataSet, { trim: true }, (err, jsonData) => {
    if (err) {
      console.log(err);
    }
    result = jsonData;
  });
  return result;
}

// get Gogung List Data from OpenAPI
export async function getGungList(gungNm) {
  const API_URL = process.env.REACT_APP_API_URL;
  let result = {};

  await axios({
    method: 'get',
    url: `${API_URL}/heri/gungDetail/gogungListOpenApi.do?gung_number=${gungNm}`,
  })
    .then((response) => {
      const dataSet = response.data;
      const parsingData = parseXml(dataSet);
      result = parsingData;
    })
    .catch((err) => console.error(err));

  return result.result.list;
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
      data.forEach((v) => {
        v.forEach((v) => {
          result.push(v);
        });
      });
      callBack(result);
    })
    .catch((err) => console.log(err));
}

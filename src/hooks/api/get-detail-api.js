import axios from 'axios';
import { parseXml } from '../parser';

// get Gogung List Data from OpenAPI
export async function setGungDetail(query) {
  const client = axios.create({
    baseURL: 'https://www.heritage.go.kr/heri/gungDetail',
  });
  const result = await client
    .get(
      `/gogungDetailOpenApi.do?serial_number=${query.serial_number}&detail_code=${query.detail_code}&gung_number=${query.gung_number}`,
    )
    .then((response) => {
      const dataSet = response.data;
      const parsingData = parseXml(dataSet);
      return parsingData.result;
    })
    .catch((err) => console.error(err));

  return result;
}

export async function getGungDetail(query, callBack) {
  try {
    const promise = setGungDetail(query);
    promise.then((data) => {
      callBack(data);
    });
  } catch (err) {
    console.log(err);
  }
}

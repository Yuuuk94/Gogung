import xml2js from 'xml2js';

// parsing xml to json
export function parseXml(dataSet: any): object {
  let result = {};
  xml2js.parseString(dataSet, { trim: true }, (err, jsonData) => {
    if (err) {
      console.log(err);
    }
    result = jsonData;
  });
  return result;
}

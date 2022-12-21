import xml2js from 'xml2js';

type ParserResultType = {
  result: {
    list: unknown[];
    total: string[];
  };
};

// parsing xml to json
export function parseXml(dataSet: string) {
  let result: ParserResultType = {
    result: {
      list: [],
      total: [],
    },
  };
  xml2js.parseString(dataSet, { trim: true }, (err, jsonData) => {
    if (err) {
      console.log(err);
    } else {
      result = { ...jsonData };
    }
  });
  return result;
}

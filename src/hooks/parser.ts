import xml2js from 'xml2js';

type ParserResultType = {
  result: unknown;
};

// parsing xml to json
export function parseXml(dataSet: string) {
  let result: ParserResultType = {
    result: '',
  };
  xml2js.parseString(dataSet, { trim: true }, (err, jsonData) => {
    if (err) {
      console.log(err);
    }
    result = { ...jsonData };
  });
  return result;
}

type ParserResultListType = {
  result: {
    list: unknown[];
    total: string[];
  };
};

// parsing xml to json
export function parseXmlList(dataSet: string) {
  let result: ParserResultListType = {
    result: {
      list: [],
      total: [],
    },
  };
  xml2js.parseString(dataSet, { trim: true }, (err, jsonData) => {
    if (err) {
      console.log(err);
    }
    result = { ...jsonData };
  });
  return result;
}

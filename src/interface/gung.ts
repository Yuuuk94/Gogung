export type GogongCategoryType = {
  key: string;
  gung_Name: string;
  imgUrl: string;
};

export type GungListType = {
  contents_kor: Array<string>;
  detail_code: Array<string>;
  explanation_kor: Array<string>;
  gung_number: Array<string>;
  imgUrl: Array<string>;
  link: Array<string>;
  serial_number: Array<string>;
};

export type GungDetailType = {
  contents_chi: Array<string>;
  contents_eng: Array<string>;
  contents_jpa: Array<string>;
  contents_kor: Array<string>;
  detail_code: Array<string>;
  explanation_chi: Array<string>;
  explanation_eng: Array<string>;
  explanation_jpa: Array<string>;
  explanation_kor: Array<string>;
  gung_number: Array<string>;
  imageList: Array<Array<string>>;
  listImg: Array<Array<string>>;
  listMoving: Array<Array<string>>;
  mainImage: Array<Array<string>>;
  movieList: Array<Array<string>>;
  serial_number: Array<string>;
};

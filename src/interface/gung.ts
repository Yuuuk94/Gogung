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
  imageList: Array<GungImageInfo>;
  listImg: Array<GungImage>;
  listMoving: Array<GungMoving>;
  mainImage: Array<GungImgURL>;
  movieList: Array<GungMovieList>;
  serial_number: Array<string>;
};

export type GungImageInfo = {
  imageInfo: Array<GungInfo>;
};

export type GungInfo = {
  imageContentsChi: Array<string>;
  imageContentsEng: Array<string>;
  imageContentsJpa: Array<string>;
  imageContentsKor: Array<string>;
  imageExplanationChi: Array<string>;
  imageExplanationEng: Array<string>;
  imageExplanationJpa: Array<string>;
  imageExplanationKor: Array<string>;
  imageIndex: Array<string>;
  imageUrl: Array<string>;
};

export type GungImage = {
  image: Array<string>;
};

export type GungMoving = {
  moving: Array<string>;
};

export type GungImgURL = {
  imgUrl: Array<string>;
};

export type GungMovieList = {
  movieInfo: Array<string>;
};

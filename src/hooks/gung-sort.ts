import { GungListType } from '../interface/gung';
import { getSession } from './useLike';

// 등록순
export const registeredGung = (gungList: Array<GungListType>) => {
  const list = gungList?.sort(
    (a: GungListType, b: GungListType): 1 | 0 | -1 => {
      if (a.serial_number[0] > b.serial_number[0]) {
        return 1;
      }
      if (a.serial_number[0] < b.serial_number[0]) {
        return -1;
      }
      return 0;
    },
  );
  return list;
};

// 이름순 정렬
export const sortGung = (gungList: Array<GungListType>) => {
  const list = gungList?.sort(
    (a: GungListType, b: GungListType): 1 | 0 | -1 => {
      if (a.contents_kor[0] > b.contents_kor[0]) {
        return 1;
      }
      if (a.contents_kor[0] < b.contents_kor[0]) {
        return -1;
      }
      return 0;
    },
  );

  return list;
};

// 이름역순 정렬
export const reverseSortGung = (gungList: Array<GungListType>) => {
  const list = gungList?.sort(
    (a: GungListType, b: GungListType): 1 | 0 | -1 => {
      if (a.contents_kor[0] < b.contents_kor[0]) {
        return 1;
      }
      if (a.contents_kor[0] > b.contents_kor[0]) {
        return -1;
      }
      return 0;
    },
  );

  return list;
};

export const likeGung = (gungList: Array<GungListType>) => {
  const like = getSession();
  const list = gungList?.filter((gung) =>
    like.forEach((l) => l === gung.serial_number[0]),
  );
  console.log(list);
  return list;
};

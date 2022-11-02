import { GungListType } from '../interface/gung';

// type SortGungType = {
//   currentSort: number;
//   gungList: GungListType;
//   callBack: void;
// };
// export function sortGungData({
//   currentSort,
//   gungList,
//   callBack,
// }: SortGungType) {
//   if (currentSort === 0) {
//     gungList?.sort((a: GungListType, b: GungListType): 1 | 0 | -1 => {
//       if (a.serial_number[0] > b.serial_number[0]) {
//         return 1;
//       }
//       if (a.serial_number[0] < b.serial_number[0]) {
//         return -1;
//       }
//       return 0;
//     });
//     callBack(gungList);
//   }

//   if (currentSort === 1) {
//     gungList?.sort((a: GungListType, b: GungListType): 1 | 0 | -1 => {
//       if (a.contents_kor[0] > b.contents_kor[0]) {
//         return 1;
//       }
//       if (a.contents_kor[0] < b.contents_kor[0]) {
//         return -1;
//       }
//       return 0;
//     });
//     callBack(gungList);
//   }

//   if (currentSort === 2) {
//     gungList?.sort((a: GungListType, b: GungListType): 1 | 0 | -1 => {
//       if (a.contents_kor[0] < b.contents_kor[0]) {
//         return 1;
//       }
//       if (a.contents_kor[0] > b.contents_kor[0]) {
//         return -1;
//       }
//       return 0;
//     });
//     callBack(gungList);
//   }

//   if (currentSort === 3) {
//     console.log('좋아요!');
//   }
// }

export const registeredGung = (gungList: Array<GungListType>) => {
  gungList?.sort((a: GungListType, b: GungListType): 1 | 0 | -1 => {
    if (a.serial_number[0] > b.serial_number[0]) {
      return 1;
    }
    if (a.serial_number[0] < b.serial_number[0]) {
      return -1;
    }
    return 0;
  });

  return gungList;
};

export const sortGung = (gungList: Array<GungListType>) => {
  gungList?.sort((a: GungListType, b: GungListType): 1 | 0 | -1 => {
    if (a.contents_kor[0] > b.contents_kor[0]) {
      return 1;
    }
    if (a.contents_kor[0] < b.contents_kor[0]) {
      return -1;
    }
    return 0;
  });

  return gungList;
};

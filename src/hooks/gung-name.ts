import gungCategory from '../data/gogungCategory.json';

// 궁 이름으로 변환
export function getGungName(num: string): string {
  const gungNm = Number(num) - 1;
  const gungName = gungCategory.gogung[gungNm].gung_Name;
  return gungName;
}

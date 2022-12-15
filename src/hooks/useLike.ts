export function getSession() {
  const session = sessionStorage.getItem('likeGung');

  if (session !== null) {
    const likeList = session.split(',');
    return likeList;
  }
  return [];
}

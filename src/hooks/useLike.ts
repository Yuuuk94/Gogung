import { useEffect, useState } from 'react';

export function useLike(serialNumber: string) {
  const [likeState, setLikeState] = useState<boolean>(false);
  const [likeGungList, setLikeGungList] = useState<string[]>([]);

  useEffect(() => {
    const session = sessionStorage.getItem('likeGung');

    if (session !== null) {
      const likeList = session.split(',');
      setLikeGungList(likeList);

      if (likeList.includes(serialNumber)) {
        setLikeState(true);
      }
    }
  }, []);

  return { likeState, likeGungList };
}

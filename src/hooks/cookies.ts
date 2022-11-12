import { useEffect } from 'react';
import { getDomain } from './url';

export function getLikeCookie(callBack: any) {
  const { cookie } = document;

  if (cookie)
    useEffect(() => {
      if (cookie !== '' || cookie.split('=')[0] === 'like_gung') {
        const setCookie = cookie.split('=')[1].split(',');

        callBack(setCookie);
      } else {
        callBack([]);
      }
    }, [cookie]);
}

export function addLikeCookie(value: Array<string>) {
  const domain = getDomain();
  // encodeURIComponent()
  // decodeURIComponent()
  window.document.cookie = `like_gung=${value}; path=/; max-age=${
    60 * 60 * 12 // 12시간
  }; domain=${domain}`;
}

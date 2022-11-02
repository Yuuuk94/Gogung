/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
import { useEffect } from 'react';
import { getDomain } from './url';

export function getLikeCookie(callBack) {
  const { cookie } = document;

  useEffect(() => {
    if (cookie !== '' || cookie.split('=')[0] === 'like_gung') {
      const setCookie = cookie.split('=')[1].split(',');
      callBack(setCookie);
    } else {
      callBack([]);
    }
  }, [cookie]);
}

export function addLikeCookie(value) {
  const domain = getDomain();
  window.document.cookie = `like_gung=${value}; path=/; max-age=${
    60 * 60 * 12 // 24시간
  }; domain=${domain}`;
}

import { useState, useEffect } from 'react';
import { getDomain } from './url';

export function getLikeCookie() {
  const { cookie } = document;
  const [result, setResult] = useState<string[]>();

  useEffect(() => {
    if (cookie !== '' || cookie.split('=')[0] === 'like_gung') {
      setResult(cookie.split('=')[1].split(','));
    } else {
      setResult(['']);
    }
  }, [cookie]);

  return result;
}

export function addLikeCookie(value: Array<string>) {
  const domain = getDomain();

  window.document.cookie = `like_gung=${value}; path=/; max-age=${
    60 * 60 * 12 // 12시간
  }; domain=${domain}`;
}

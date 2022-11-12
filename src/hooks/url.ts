import qs from 'qs';
import { useLocation } from 'react-router-dom';

export function getQuery() {
  const query = qs.parse(window.location.search, {
    ignoreQueryPrefix: true,
  });

  return query;
}

export function getGungQuery() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  return query;
}

export function getURL(): string {
  let currentURL = '';
  if (window.location.origin === process.env.REACT_APP_PRODUCTION_URL) {
    currentURL = process.env.REACT_APP_PRODUCTION_URL;
  } else {
    currentURL = window.location.origin;
  }
  return currentURL;
}

export function getDomain(): string {
  let currentDomain = '';
  if (window.location.hostname === process.env.REACT_APP_PRODUCTION_DOMAIN) {
    currentDomain = process.env.REACT_APP_PRODUCTION_DOMAIN;
  } else {
    currentDomain = window.location.hostname;
  }
  return currentDomain;
}

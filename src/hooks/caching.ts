import { getURL } from './url';

const url = getURL();
console.log(window.caches);

// match cache
export function matchCache(cacheName: string): void {
  const name = cacheName;
  caches.open(name).then((cache) => {
    caches.match(url).then((settings) => {
      console.log(settings);
    });
  });
}

// add cache
export function addCache(cacheName: string): void {
  const name = cacheName;

  caches.open(name).then((cache) => {
    cache.add(url).then(() => {
      console.log('response');
    });
  });
}

// add cache
export function deleteCache(cacheName: string): void {
  const name = cacheName;

  caches.open(name).then((cache) => {
    cache.delete(url);
    console.log('response 111');
  });
}

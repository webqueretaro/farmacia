const CACHE = 'farmacia-v1';
const archivos = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './icon-519.png',
  './data/content.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(archivos))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});

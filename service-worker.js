self.addEventListener('install', (event) => {
    console.log('SW instalado');
    event.waitUntil(
      caches.open('farmacia-v1').then(cache => {
        return cache.addAll([
          '/farmacia/',
          '/farmacia/index.html',
          '/farmacia/manifest.json',
          '/farmacia/icon-519.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  
const CACHE = 'pdf-viewer-v24';
const SHARE_CACHE = 'pdf-viewer-share';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './pdf.min.js',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-192.png',
  './icon-maskable-512.png',
  './pdf.worker.min.js',
  './pdf-lib.min.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE && k !== SHARE_CACHE).map((k) => caches.delete(k)))
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  const url = new URL(req.url);

  // 다른 앱에서 PDF를 공유해 들어온 경우
  if (req.method === 'POST' && url.pathname.endsWith('/share')) {
    e.respondWith(
      (async () => {
        try {
          const form = await req.formData();
          const file = form.get('pdf');
          if (file && typeof file !== 'string') {
            const key = new URL('./shared-file', self.registration.scope).href;
            const cache = await caches.open(SHARE_CACHE);
            await cache.put(
              key,
              new Response(file, {
                headers: {
                  'content-type': file.type || 'application/pdf',
                  'x-filename': encodeURIComponent(file.name || 'shared.pdf')
                }
              })
            );
          }
        } catch (err) {
          // 공유 데이터를 읽지 못하면 그냥 앱만 열어 준다
        }
        return Response.redirect(new URL('./?shared=1', self.registration.scope).href, 303);
      })()
    );
    return;
  }

  if (req.method !== 'GET' || url.origin !== location.origin) return;

  e.respondWith(
    caches.match(req).then((hit) => {
      if (hit) return hit;
      return fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
        return res;
      });
    })
  );
});

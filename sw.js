// Kociłapki jako aplikacja: gra działa też bez internetu; przy sieci zawsze bierze najnowszą wersję (najpierw sieć, potem pamięć). Ranking (/api/) zawsze z sieci.
const PAMIEC = 'kocilapki-29';
const PLIKI = ['./', './index.html', './dzwieki/probki-kota.js?v=3', './manifest.webmanifest', './ikona-192.png', './ikona-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(PAMIEC).then(c => c.addAll(PLIKI.map(u => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting())); }); // zawsze świeże pliki z sieci, nie z pamięci przeglądarki
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(n => n !== PAMIEC).map(n => caches.delete(n)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url); if (e.request.method !== 'GET' || u.origin !== location.origin || u.pathname.includes('/api/')) return; // ranking i liczniki (także pod /kocilapki/api/) zawsze z sieci, bez zapisu w pamięci
  e.respondWith(fetch(e.request).then(r => { if (r.ok) { const kopia = r.clone(); caches.open(PAMIEC).then(c => c.put(e.request, kopia)); } return r; })
    .catch(() => caches.match(e.request, { ignoreSearch: e.request.mode === 'navigate' }).then(r => r || caches.match('./index.html'))));
});

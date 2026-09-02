// Простой Service Worker, необходимый для установки PWA
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Установлен');
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    console.log('[Service Worker] Активирован');
});

self.addEventListener('fetch', (e) => {
    // Приложение работает онлайн, поэтому просто пропускаем запросы
    e.respondWith(fetch(e.request));
});
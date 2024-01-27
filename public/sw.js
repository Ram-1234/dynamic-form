//console.warn("service worker from publick folder");

let cacheName = "pwaApp";
let cacheUrls = [
  "/static/js/bundle.js",
  "/favicon.ico",
  "/static/js/vendors-main.chunk.js",
  "/static/media/roadlight.1f17136611b2e3c6db94.png",
  "/logo192.png",
  "/static/js/main.chunk.js",
  "/static/js/0.chunk.js",
  "/index.html",
  "/contact",
  "/posts",
  "/users",
  "/home",
  "/manifest.json",
  "/static/media/user.8c80a7ed4426ea779b76.png",
  "/",
  "/ws",
];

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(cacheUrls);
    })
  );
});

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((result) => {
        if (result) return result;
        else {
          let furl = event.request.clone();
          fetch(furl);
        }
      })
    );
  }
});

/* Chariot Energy Snapshot — offline cache.
   Network-first so updates always win; cache serves when the connection drops. */
var C = "chariot-snapshot-v2";
var CORE = ["./", "./index.html", "./styles.css", "./app.js", "./i18n.js",
            "./manifest.webmanifest", "./chariot-logo.svg",
            "./chariot-logo-transparent.png", "./icon-192.png"];
self.addEventListener("install", function(e){
  e.waitUntil(caches.open(C).then(function(c){ return c.addAll(CORE); }).catch(function(){}));
  self.skipWaiting();
});
self.addEventListener("activate", function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.filter(function(k){ return k !== C; }).map(function(k){ return caches.delete(k); }));
  }));
  self.clients.claim();
});
self.addEventListener("fetch", function(e){
  if (e.request.method !== "GET") return;
  if (e.request.url.indexOf(self.location.origin) !== 0) return; /* never cache map tiles or CDN libs */
  e.respondWith(
    fetch(e.request).then(function(r){
      if (r && r.ok){
        var cl = r.clone();
        caches.open(C).then(function(c){ c.put(e.request, cl); }).catch(function(){});
      }
      return r;
    }).catch(function(){
      return caches.match(e.request).then(function(m){ return m || caches.match("./index.html"); });
    })
  );
});

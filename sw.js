/* Chariot Energy Snapshot — offline cache. Network-first so updates always win; cache serves when offline. */
var C = "chariot-snapshot-v1";
self.addEventListener("install", function(e){
  e.waitUntil(caches.open(C).then(function(c){ return c.addAll(["./", "./index.html", "./manifest.webmanifest", "./icon-192.png"]); }).catch(function(){}));
  self.skipWaiting();
});
self.addEventListener("activate", function(e){
  e.waitUntil(caches.keys().then(function(keys){ return Promise.all(keys.filter(function(k){ return k !== C; }).map(function(k){ return caches.delete(k); })); }));
  self.clients.claim();
});
self.addEventListener("fetch", function(e){
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then(function(r){
      if (r && r.ok && e.request.url.indexOf(self.location.origin) === 0){
        var cl = r.clone(); caches.open(C).then(function(c){ c.put(e.request, cl); }).catch(function(){});
      }
      return r;
    }).catch(function(){
      return caches.match(e.request).then(function(m){ return m || caches.match("./index.html"); });
    })
  );
});

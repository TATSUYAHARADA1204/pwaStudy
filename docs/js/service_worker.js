
var CACHE_NAME = 'pwa-sample-caches';
var urlsToCache = [
    '/tatsuyaharada1204.github.io/',
];

//インストール

self.addEventListener('install',function(event){
    event.waitUntill(
        caches
            .open(CACHE_NAME)
            .then(function(cache){
                return cache.addAll(urlsToCache);
            })
    );

});


//キャッシュロード処理
self.addEventListener('fetch',function(event){
    event.respondWith(
        caches
            .match(event.request)
            .then(function(response){
                return response ? response : fetch(event.request);
            })
    );
});
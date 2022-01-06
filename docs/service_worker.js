/*インストール時イベント登録？*/
self.addEventListener('install',function(event){
});

/*fetchイベント登録(インストール推奨バナー表示)*/
self.addEventListener('fetch',function(event){

});

/**キャッシュ処理 */
importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js')

workbox.precaching.precacheAndRoute([
    {
        url: '/index.html',
        revision: '12345'
    },
    {
        url: '/css/app.css',
        revision: '12345'
    },
    {
        url: '/js/app.js',
        revision: '12345'
    },
])





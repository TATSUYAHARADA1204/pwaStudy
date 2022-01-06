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
        url: '/pwaStudy/index.html',
        revision: '12345'
    },
    {
        url: '/pwaStudy/css/app.css',
        revision: '12345'
    },
    {
        url: '/pwaStudy/js/app.js',
        revision: '12345'
    },
])





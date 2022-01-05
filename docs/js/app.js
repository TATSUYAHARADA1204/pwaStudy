// service worker 
if('serviceWorker' in navigator){
    window.addEventListener('load',()=> {
        navigator.serviceWorker.register('service_worker.js')
            .then(reg=> {
              console.log('サービスワーカーの登録が以下のスコープで完了'.reg.scope)  
            })
            .catch(err => {
                return console.log('サービスワーカーの登録が失敗:',err);
            });
    });
//    navigator.serviceWorker.register('service_worker.js')
        //.then(function(registration){
            //console.log('ServiceWoeker registration successful with scope: ',registration.scope);
        //}).catch(function(err){
            //console.log('ServiceWoeker registration failed: ',err);
        //});
}

var num = 0;
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello vue!'+num
    },
    methods: {
        reverseMessage: function(){
        }
    }
});

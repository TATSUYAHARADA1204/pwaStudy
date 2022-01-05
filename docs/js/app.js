// service worker 
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('service_worker.js')
        .then(function(registration){
            console.log('ServiceWoeker registration successful with scope: ',registration.scope);
        }).catch(function(err){
            console.log('ServiceWoeker registration failed: ',err);
        });
}

var num = 0;
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello vue!:'+num + '回目'
    },
    methods: {
        reverseMessage: function(){
            num++;
        }
    }
});

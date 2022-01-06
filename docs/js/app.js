// service worker 
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('service_worker.js')
        .then(function(registration){
            console.log('ServiceWoeker registration successful with scope: ',registration.scope);
        }).catch(function(err){
            console.log('ServiceWoeker registration failed: ',err);
        });
}

var num = 1;
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello vue!'
    },
    methods: {
        reverseMessage: function(){
            this.message = ''
            this.message = 'Hello vue' + num + '回目'
            num++
        }
    }
});

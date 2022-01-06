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
            this.message = 'Hello vue' + num + '回目'
            num++
        }
    }
});

var timerStart = new Vue({
    name: 'timer',
    data: {
        min: 0,
        sec: 0,
        timerOn: false,
        timerObj: null,
    } ,
    methods: {
        count: function(){
            if(this.sec <59){
                this.sec++;
            }else{
                this.sec=0;
                this.min++;
            }

        },
        start: function(){
            let self = this;
            this.timerObj = setInterval(function(){ self.count()},1000)
            this.timerOn=true;
        },
        stop: function(){
            clearInterval(this.timerObj);
            this.timerOn=false;
        },
    }
})

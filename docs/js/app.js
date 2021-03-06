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
    el: '#timer',
    data: {
        min: 0,
        sec: 0,
        timerFmt: 'Startを押して下さい',
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
            this.timerFmt = this.min+'分' + this.sec + '秒'
        },
        start: function(){
            this.timerObj = setInterval(this.count,1000)
            this.timerOn=true;
        },
        stop: function(){
            clearInterval(this.timerObj);
            this.timerOn=false;
        },
    }
})

if (typeof window.localStorage !== 'undefined'){
  /// localStorageに対応済み
  console.log('localStorage対応済み！');
}
else{
  /// localStorageには未対応
  console.error('localStorage未対応！');
}
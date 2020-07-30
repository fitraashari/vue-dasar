var app = new Vue({
    el: '#app',
    data: {
      show: 'ready',
      message: 'Hello Vue!',
      message2: 'Helo Anjay!',
      int1: 1,
      int2: 2,
    },
    computed: {
        sum: function(){
          return this.int1 + this.int2;
        }
    }
  })
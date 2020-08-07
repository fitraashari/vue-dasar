Vue.component('blog-post', {
  props:['post'],
  template:`
  <div>
  <h3>{{post.title}}</h3>
  <div v-html="post.content"></div>
  </div>
  `
});
var app = new Vue({
    el: '#app',
    data:{
      posts:[
        {id:1,title:'My Journey with Vue',content:'coba <b>halo dunia</b>'},
        {id:2,title:'Blogging with Vue',content:'tes <b>halo dunia</b>'},
        {id:3,title:'Why Vue is so fun',content:'anjay <b>halo dunia</b>'},
      ]
    }
  })
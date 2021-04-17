// Vue.jsの機能を有効化
new Vue({
    el:'#app',
    data: {
        message:''
    },
    methods:{
        onclick: function(){
            this.message = new Date().toLocaleString();
        }
    }
});
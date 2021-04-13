// Vue.jsの機能を有効化
var app = new Vue({
    el:'#app',
    methods: {
        onclick: function(message) {
            console.log(message)
        }
    }
});
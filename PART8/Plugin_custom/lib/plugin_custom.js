var MyUtil = {
    install : function(Vue, options) {
        // 2.numberフィルターを定義
        Vue.filter('number', function(value, dec) {
            return value.toFixed(dec);
        });
    }
};

Vue.use(MyUtil);

new Vue({
    el:'#app'
}); 
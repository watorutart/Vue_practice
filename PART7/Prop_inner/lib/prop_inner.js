Vue.component('my-counter', {
    props: ['init'],
    template: '<div>現在値は{{ current }}です！' + '<input type="button" v-on:click="onclick" value="増加"/>',
    // 内部プロパティ
    data: function() {
        return {
            current: this.init
        };
    },
    methods: {
        // ボタンクリック時にcurrentプロパティをインクリメント
        onclick: function() {
            this.current++;
        }
    }
});

new Vue({
    el:'#app'
});

new Vue({
    el:'#app',
    data: {
        list: ['melon', 'orange', 'peach']
    },
    methods: {
        // ボタンクリック時に2番目の要素を変更
        onclick: function() {
            // 文字の変更方法①
            // Vue.set(this.list, 1, 'strawberry');

            // 文字の変更方法②
            this.list.splice(1, 1, 'strawberry');

            // 以下だと更新されない
            // list[1] = 'strawberry';
        }
    }
});
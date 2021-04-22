var MyHello = {
    template: '<div>こんにちは、コンポーネント！</div>'
};

new Vue({
    el:'#app',
    // コンポーネントをローカル登録
    components: {
        'my-hello': MyHello
    }
});
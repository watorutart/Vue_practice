Vue.component('my-hello', {
    props: ['yourName'],
    // 1.テンプレートに<slot>要素を埋め込む
    template: '<div>こんにちは、<slot>権兵衛</slot>さん！<div>'
})

new Vue({
    el:'#app'
});

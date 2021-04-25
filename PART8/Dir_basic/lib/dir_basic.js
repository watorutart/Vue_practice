// 1.ディレクティブを定義
Vue.directive('highlight', {
    bind:(el, binding, vnode, oldVnode) => {
        el.style.backgroundColor = binding.value;
    }
});

new Vue({
    el:'#app',
    data: {
        color: 'Yellow'
    }
}); 
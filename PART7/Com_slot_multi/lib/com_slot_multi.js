Vue.component('my-hello', {
    props: ['yourName'],
    template: '<div>' 
            + '<header><slot name="header"></slot></header>'
            + '<div><slot></slot></div>'
            + '</div>'
});

new Vue({
    el:'#app'
}); 

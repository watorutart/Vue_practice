Vue.component('my-hello', {
    props: {
        yourName: {
            type: String,
            required: true,
            validator: function(value) {
                return value.length <= 5;
            }
       }
    }, 
    template: '<div>こんにちは、{{ yourName }}さん！</div>'
})

new Vue({
    el:'#app',
    data: {
        type: Object,
        default: function() {
            return { value: 'Hoge' }
        }
    }
});

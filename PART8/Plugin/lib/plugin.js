import Vue from 'vue';
import VeeValidate from 'vee-Validate';

// 2. Vee-Validateを有効化
VeeValidate.Validator.localize('ja');
Vue.use(VeeValidate/*, {locale:'ja'} */);

new Vue({
    el:'#app'
}); 
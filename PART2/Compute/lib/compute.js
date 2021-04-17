new Vue({
    el:'#app',
    data:{
        email:'Yamada@example.com'
    },
    computed:{
        localEmail:function(){
            return this.email.split('@')[0].toLowerCase();
        }
    }
})
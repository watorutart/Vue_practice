new Vue({
    el:'#app',
    data: {
        books: [
            {
                isbn: '978-4-7981-5382-7',
                title: '独習 C# 新版',
                price: 3600
            },
            {
                isbn: '978-4-7981-5382-7',
                title: '独習 C 新版',
                price: 1000
            },
            {
                isbn: '978-4-7981-5382-7',
                title: '独習 Java 新版',
                price: 1500
            },
            {
                isbn: '978-4-7981-5382-7',
                title: '独習 Python 新版',
                price: 1800
            },
            {
                isbn: '978-4-7981-5382-6',
                title: '独習 C++ 新版',
                price: 3500
            }
        ]
    },

    // 2500円未満の書籍情報を取得する算出プロパティ
    computed: {
        cheapBooks: function(){
            return this.books.filter(function(b){
                return b.price < 2500;
            })
        }
    }
});
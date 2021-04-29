import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Article from '@/components/Article'
import Page from '@/components/Page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/articles/:id',
      component: Article,
      children: [
        {
          path: 'pages/:page_num',
          component: Page
        }
      ]
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

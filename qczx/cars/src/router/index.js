import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'//首页
import Hotcar from '../views/hotcar.vue'//热门排行
import Allcar from "../views/allcar.vue"//车型大全
import Owner from '../views/Owner.vue'//车主服务
import saleRanking from '../views/SalesRanking.vue'//销量排行榜
import infocar from '../views/infocar.vue'//车辆详细
import carcircle from '../views/carCircle.vue'//车友圈 
import article_content from '../views/article_content.vue'//文章详细
import carlogin from '../views/carlogin.vue'//车辆登记
import search from '../views/search.vue'//查询页面


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    // name: 'index',
    component: Index
  },{
    path:'/allcar',
    // name: 'allcar',
    component: Allcar
    
  },{
    path:'/hotcar',
    // name: 'hotcar',
    component: Hotcar
  },{
    path:'/owner',
    // name:'owner',
    component: Owner
  },{
    path:'/saleranking',
    // name:'saleranking',
    component:saleRanking
  },{
    path:'/infocar/:title',
    component:infocar
  },{
    path:'/carcircle',
    component:carcircle
  },{
    path:'/article_content/:id',
    component:article_content
  },{
    path:'/carlogin',
    component:carlogin
  },{
    path:'/search',
    component:search
  }

]

const router = new VueRouter({
  routes
})

export default router

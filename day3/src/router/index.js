import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      ej: '主页'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    children: [{
      path: '/zy',
      name: 'zy',
      
      meta: {
        title: '主页'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/zy.vue')
    },
    {
      path: '/productList',
      name: 'productList',
      meta: {
        title: '商品列表',
        ej: '商品管理'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/productList.vue')
    }, {
      path: '/productCategory',
      name: 'productCategory',
      meta: {
        title: '商品分类',
        ej: '商品管理'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/productCategory.vue')
    }, {
      path: '/productBrand',
      name: 'productBrand',
      meta: {
        title: '品牌管理',
        ej: '商品管理'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/productBrand.vue')
    }, {
      path: '/productDetail',
      name: 'productDetail',
      meta: {
        title: '商品编辑', ej: '商品管理'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/productDetail.vue')
    }, {
      path: '/addProductDetail',
      name: 'addProductDetail',
      meta: {
        title: '新增商品',
        ej: '商品管理'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/addProductDetail.vue')
    }, {
      path: '/orderList',
      name: 'orderList',
      meta: {
        title: '订单列表',
        ej: '订单管理'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/orderList.vue')
    }, {
      path: '/orderDetail',
      name: 'orderDetail',
      meta: {
        title: '订单详情',
        ej: '订单管理'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/orderDetail.vue')
    }, {
      path: '/orderBack',
      name: 'orderBack',
      meta: {
        title: '退单列表',
        ej: '订单管理'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/orderBack.vue')
    }, {
      path: '/orderBackDetail',
      name: 'orderBackDetail',
      meta: {
        title: '退单详情',
        ej: '订单管理'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/orderBackDetail.vue')
    }, {
      path: '/orderAddress',
      name: 'orderAddress',
      meta: {
        title: '地址管理',
        ej: '订单管理'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/orderAddress.vue')
    }, {
      path: '/userList',
      name: 'userList',
      meta: {
        title: '用户列表',
        ej: '注册用户管理'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/userList.vue')
    }, {
      path: '/marketList',
      name: 'marketList',
      meta: {
        title: '限时活动',
        ej: '营销管理'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/marketList.vue')
    }, {
      path: '/marketAdvertisement',
      name: 'marketAdvertisement',
      meta: {
        title: '广告列表',
        ej: '营销管理'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/marketAdvertisement.vue')
    }, {
      path: '/articleList',
      name: 'articleList',
      meta: {
        title: '文章列表',
        ej: '内容管理'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/articleList.vue')
    }, {
      path: '/addArticle',
      name: 'addArticle',
      meta: {
        title: '新增文章',
        ej: '内容管理'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/addArticle.vue')
    }, {
      path: '/editArticle',
      name: 'editArticle',
      meta: {
        title: '编辑文章',
        ej: '内容管理'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/editArticle.vue')
    }, {
      path: '/materialList',
      name: 'materialList',
      meta: {
        title: '素材列表',
        ej: '内容管理'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/materialList.vue')
    }, {
      path: '/personIndex',
      name: 'personIndex',
      meta: {
        title: '个人主页',
        ej: '个人中心'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/personIndex.vue')
    }, {
      path: '/personSetting',
      name: 'personSetting',
      meta: {
        title: '个人设置',
        ej: '个人中心'
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/personSetting.vue')
    },]
  }
]

const router = new VueRouter({
  routes
})

export default router

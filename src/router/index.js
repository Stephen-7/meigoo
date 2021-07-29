import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'tabBar',
      redirect: '/home',
      component: (resolve) => require(['@/views/tabBar/tabBar'], resolve),
      children: [
        {
          path: 'home',
          name: 'home',
          component: (resolve) => require(['@/pages/home'], resolve),
        },
        {
          path: 'classification',
          name: 'classification',
          component: (resolve) => require(['@/pages/classification'], resolve),
        },
        {
          path: 'income',
          name: 'income',
          component: (resolve) => require(['@/pages/income'], resolve),
        },
        {
          path: 'shareIt',
          name: 'shareIt',
          component: (resolve) => require(['@/pages/shareIt'], resolve),
        },
        {
          path: 'mine',
          name: 'mine',
          component: (resolve) => require(['@/pages/mine'], resolve),
        }
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: (resolve) => require(['@/views/login/login'], resolve),
    },
    {
      path: '/setUp',
      name: 'setUp',
      component: (resolve) => require(['@/views/setUp/setUp'], resolve),
    },
    {
      path: '/shippingAddress',
      name: 'shippingAddress',
      component: (resolve) => require(['@/views/setUp/shippingAddress'], resolve),
    },
    {
      path: '/addAndChangeAddress',
      name: 'addAndChangeAddress',
      component: (resolve) => require(['@/views/setUp/addAndChangeAddress'], resolve),
    },
    {
      path: '/commonProblem',
      name: 'commonProblem',
      component: (resolve) => require(['@/views/setUp/commonProblem'], resolve),
    },
    {
      path: '/personalInformation',
      name: 'personalInformation',
      component: (resolve) => require(['@/views/setUp/personalInformation'], resolve),
    },
    {
      path: '/search',
      name: 'search',
      component: (resolve) => require(['@/views/search/search'], resolve),
    },
    {
      path: '/searchResults',
      name: 'searchResults',
      component: (resolve) => require(['@/views/search/searchResults'], resolve),
    },
    {
      path: '/productDetails',
      name: 'productDetails',
      component: (resolve) => require(['@/views/details/productDetails'], resolve),
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: (resolve) => require(['@/views/shoppingCart/shoppingCart'], resolve),
    },
    {
      path: '/notice',
      name: 'notice',
      component: (resolve) => require(['@/views/message/notice'], resolve),
    },
    {
      path: '/eventNews',
      name: 'eventNews',
      component: (resolve) => require(['@/views/message/eventNews'], resolve),
    },
    {
      path: '/orderMessage',
      name: 'orderMessage',
      component: (resolve) => require(['@/views/message/orderMessage'], resolve),
    },
    {
      path: '/spike',
      name: 'spike',
      component: (resolve) => require(['@/views/spike/spike'], resolve),
    },
    {
      path: '/payment',
      name: 'payment',
      component: (resolve) => require(['@/views/payment/payment'], resolve),
    },
    {
      path: '/recharge',
      name: 'recharge',
      component: (resolve) => require(['@/views/payment/recharge'], resolve),
    },
    {
      path: '/productReviews',
      name: 'productReviews',
      component: (resolve) => require(['@/views/productReviews/productReviews'], resolve),
    },

    {
      path: '/browsingRecords',
      name: 'browsingRecords',
      component: (resolve) => require(['@/views/personalCenter/browsingRecords'], resolve),
    },
    {
      path: '/groupJoinRecord',
      name: 'groupJoinRecord',
      component: (resolve) => require(['@/views/personalCenter/groupJoinRecord'], resolve),
    },
    {
      path: '/myCollection',
      name: 'myCollection',
      component: (resolve) => require(['@/views/personalCenter/myCollection'], resolve),
    },
    {
      path: '/myTeam',
      name: 'myTeam',
      component: (resolve) => require(['@/views/personalCenter/myTeam'], resolve),
    },
    {
      path: '/groupRecord',
      name: 'groupRecord',
      component: (resolve) => require(['@/views/personalCenter/groupRecord'], resolve),
    },
    {
      path: '/applyForBranch',
      name: 'applyForBranch',
      component: (resolve) => require(['@/views/personalCenter/applyForBranch'], resolve),
    },

    {
      path: '/commodityOrder',
      name: 'commodityOrder',
      component: (resolve) => require(['@/views/commodityOrder/commodityOrder'], resolve),
    },
    {
      path: '/confirmOrder',
      name: 'confirmOrder',
      component: (resolve) => require(['@/views/commodityOrder/confirmOrder'], resolve),
    },
    {
      path: '/orderDetails',
      name: 'orderDetails',
      component: (resolve) => require(['@/views/commodityOrder/orderDetails'], resolve),
    },
    {
      path: '/takeTaxi',
      name: 'takeTaxi',
      component: (resolve) => require(['@/views/takeTaxi/takeTaxi'], resolve),
    },
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    sessionStorage.removeItem('token');
  }
  if (to.name === '') {
    next({path: 'Loading'})
  }
  let user = sessionStorage.getItem('token');
  if (!user && to.path !== '/login') {
    next({path: '/login'})
  } else {
    next()
  }
});

export default router;

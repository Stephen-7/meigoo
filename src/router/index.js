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
      path: '/details',
      name: 'details',
      component: (resolve) => require(['@/views/details/details'], resolve),
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: (resolve) => require(['@/views/shoppingCart/shoppingCart'], resolve),
    },
    {
      path: '/confirmOrder',
      name: 'confirmOrder',
      component: (resolve) => require(['@/views/confirmOrder/confirmOrder'], resolve),
    },
    {
      path: '/eventNews',
      name: 'eventNews',
      component: (resolve) => require(['@/views/message/eventNews'], resolve),
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

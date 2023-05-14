
const routes = [
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/mainLayout', component: () => import('pages/IndexPage.vue') },
      {
        path: '/doshboard',
        component: () => import('pages/doshboard.vue')
      },
      {
        path: '/ceo',
        component: () => import('pages/ceo.vue')
      },
      {
        path: '/markting',
        component: () => import('pages/markting.vue')
      },
      {
        path: '/myCourses',
        component: () => import('pages/MyCourses.vue')
      },
      {
        path: '/myTests',
        component: () => import('pages/MyTests.vue')
      },
      {
        path: '/testMbti',
        component: () => import('pages/TestMbti.vue')
      },
      {
        path: '/shop',
        component: () => import('pages/shop.vue')
      },
      {
        path: '/profileDocuments',
        component: () => import('pages/ProfileDocuments.vue')
      },
      {
        path: '/financialTransactions',
        component: () => import('pages/FinancialTransactions.vue')

      },
      {
        path: '/contactme',
        component: () => import('pages/ContactMe.vue')

      },
      {
        path: '/aboutMe',
        component: () => import('pages/AboutMe.vue')

      },
      {
        path: '/signOut',
        component: () => import('pages/SignOut.vue')

      },



    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },
  {
    path: '/',
    component: () => import('pages/Login.vue')
  },
  {
    path: '/signup',
    component: () => import('pages/Signup.vue')
  },
  {
    path: '/forgotPassword',
    component: () => import('pages/forgotPassword.vue')
  },

]

export default routes

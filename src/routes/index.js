import Login from '@/components/Login'
import Register from '@/components/Register'
import Main from '@/components/Main'
import App from '@/App'

export default [
  {
    path: '/',
    name: 'App',
    component: App,
    children: [
      {
        path: '/',
        name: 'Main',
        component: Main,
        children: [
          {
            path: '/',
            name: 'User',
            component: function (resolve) {
              require(['@/components/User.vue'], resolve)
            }
          },
          {
            path: '/beyigong',
            name: 'Beyigong',
            component: function (resolve) {
              require(['@/components/User/Beyigong.vue'], resolve)
            }
          },
          {
            path: '/profileinfo',
            name: 'Profileinfo',
            component: function (resolve) {
              require(['@/components/User/ProfileInfo.vue'], resolve)
            }
          }
        ]
      },
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/register',
        name: 'Register',
        component: Register
      }
    ]
  }
]

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
        component: Main
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

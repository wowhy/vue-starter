export const Home = {
  path: '/home',
  name: 'home',
  component: resolve => require(['./Home'], resolve)
}

export const Login = {
  path: '/login',
  name: 'login',
  component: resolve => require(['./Login'], resolve)
}

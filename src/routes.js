import Buttons from './views/Buttons'
import Home from './views/Home'
import NotFound from './components/page/NotFound'

export default [
  { name: 'Home', path: '/', component: Home },
  { name: 'NotFound', meta: { title: 'NotFound' }, path: '/404', component: NotFound },
  { name: 'Buttons', meta: { title: 'Buttons' }, path: '/buttons', component: Buttons },
  {
    path: '*',
    redirect: '/404'
  }
]

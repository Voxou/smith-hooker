import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue';
import Auth from '../views/Auth.vue';
import Register from '../views/Register.vue';
import newpublication from '../views/newpublication.vue';
import Artisan from '../views/Artisan.vue';
import Mybusiness from '../views/Mybusiness.vue';
import Pictures from '../views/Pictures.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      },
      {
        path: 'tab4',
        component: () => import('@/views/Tab4.vue')
      },
      {
        path: 'tab5',
        component: () => import('@/views/Tab5.vue')
      }
    ]
  },
  {
    path:'/auth/',
    component: Auth,
  },
  {
    path:'/register',
    component : Register
  },
  {
    path: '/NouvellePublication',
    component : newpublication
  }, 
  {
    path:'/artisan',
    component : Artisan
  } ,
  { 
    path: '/Moncommerce',
    component : Mybusiness
  },
  {
    path: '/Photos',
    component : Pictures
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

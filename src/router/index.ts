import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue';
import Auth from '../views/Auth.vue';
import Register from '../views/Register.vue';
import NewPost from '../views/NewPost.vue';
import Smith from '../views/Smith.vue';
import SmithBusiness from '../views/SmithBusiness.vue';
import Pictures from '../views/Pictures.vue';
import SmithPosts from '../views/SmithPosts.vue';
import Post from '../views/Post.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab3'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'tab3'
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
      },
      {
        path:'/smith',
        component : Smith
      },
      {
        path:'/smith/posts',
        component : SmithPosts
      },
      {
        path:'/smith/posts/post',
        component : Post
      },
      {
        path:'/smith/posts/newPost',
        component : NewPost
      },
      {
        path:'/smith/business',
        component : SmithBusiness
      },
      {
        path:'/smith/business/pictures',
        component : Pictures
      }
    ],
  }, 
  {
    path:'/auth',
    component: Auth,
  },
  {
    path:'/register',
    component : Register
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

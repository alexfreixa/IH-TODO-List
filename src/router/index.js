import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import EditView from '@/views/EditView.vue'
import SignInView from '@/views/SignInView.vue'
import SignUpView from '@/views/SignUpView.vue'
import ConfirmEmailView from '@/views/ConfirmEmailView.vue'

import { useUserStore } from '@/stores/userStore'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignInView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView
    },
    {
      path: '/confirm-email',
      name: 'confirm',
      component: ConfirmEmailView
    },
    {
      path: '/edit/:taskId',
      name: 'edit',
      component: EditView
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()

  if (userStore.user === undefined) {
    await userStore.fetchUser()
  }

  if (userStore.user === null && (to.name !== 'signup' && to.name !== 'signin' && to.name !== 'confirm')) {
    next({ name: 'signin' })
  } else if (userStore.user !== null && (to.name === 'SignUpView' || to.name === 'SignInView')) {
    next({ name: 'home' });
  } else {
    next()
  }

})

export default router

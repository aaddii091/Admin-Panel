import { createRouter, createWebHistory } from 'vue-router'

import SigninView from '@/components/Authentication/SigninView.vue'
import SignupView from '@/components/Authentication/SignupView.vue'
import ECommerceView from '@/views/Dashboard/ECommerceView.vue'
import ProfileView from '@/views/ProfileView.vue'
import QuestionnairesTopView from '@/views/Questionnaires/topView.vue'
import QuestionnairesFormView from '@/views/Questionnaires/formView.vue'
import QuestionnairesCompletedView from '@/views/Questionnaires/completedView.vue'
import ResultsView from '@/views/Results/resultsView.vue'
import TestsView from '@/views/TestsView.vue'
import LoginPage from '@/views/Authentication/LoginPage.vue'


const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: ECommerceView,
    meta: {
      title: 'Dashboard',
      requiresAuth: true
    }
  },
  {
    path: '/questionnaires/:id/:questionnaireId',
    name: 'questionnairesTop',
    component: QuestionnairesTopView,
    meta: {
      title: 'Test top',
      requiresAuth: true
    }
  },
  {
    path: '/questionnaires/form',
    name: 'questionnairesForm',
    component: QuestionnairesFormView,
    meta: {
      title: 'Test',
      requiresAuth: true
    }
  },
  {
    path: '/questionnaires/completed',
    name: 'questionnairesCompleted',
    component: QuestionnairesCompletedView,
    meta: {
      title: 'Test Completed',
      requiresAuth: true
    }
  },
  {
    path: '/results',
    name: 'results',
    component: ResultsView,
    meta: {
      title: 'Results',
      requiresAuth: true
    }
  },
  {
    path: '/tests',
    name: 'tests',
    component: TestsView,
    meta: {
      title: 'Tests',
      requiresAuth: true
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: {
      title: 'Profile',
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: {
      title: 'Login',
      requiresAuth: false
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView,
    meta: {
      title: 'Signup',
      requiresAuth: false
    }
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    meta: {
      title: '404',
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token') // Or however you track authentication
  
  if (to.meta.requiresAuth && !isAuthenticated) {
    // Redirect to login if trying to access protected route while not authenticated
    next({ name: 'login' })
  } else {
    document.title = `${to.meta.title} | ZenGarden User page`
    next()
  }
})

export default router

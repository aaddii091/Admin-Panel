import { createRouter, createWebHistory } from 'vue-router'

import SigninView from '@/components/Authentication/SigninView.vue'
import Error from '@/views/Pages/404PageView.vue'
import SignupView from '@/components/Authentication/SignupView.vue'
import Dashboard from '@/views/Dashboard/Dashboard.vue'
import ProfileView from '@/views/ProfileView.vue'
import QuestionnairesTopView from '@/views/Questionnaires/topView.vue'
import QuestionnairesFormView from '@/views/Questionnaires/formView.vue'
import QuestionnairesCompletedView from '@/views/Questionnaires/completedView.vue'
import ResetPasswordViewVue from '@/components/Authentication/ResetPasswordView.vue'
import MCQView from '@/components/Quiz/MCQQuiz.vue'
import ResultsView from '@/views/Results/resultsView.vue'
import TestsView from '@/views/TestsView.vue'
import LoginPage from '@/views/Authentication/LoginPage.vue'
import PF from '@/components/Quiz/16PFQuiz.vue'
import Support from '@/views/Dashboard/Support.vue'



const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
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
    path: '/mcq/:id',
    name: 'mcq',
    component: MCQView,
    meta: {
      title: 'MCQ',
      requiresAuth: true
    }
  },
  {
    path: '/poll-pf/:id',
    name: '16-pf',
    component: PF,
    meta: {
      title: '16-PF',
      requiresAuth: true
    }
  },
    {
    path: '/resetPassword',
    name: 'resetPassword',
    component: ResetPasswordViewVue,
    meta: {
      title: 'Reset Password',
      requiresAuth: false
    }
  },
  {
    path: '/pf',
    name: '16',
    component: PF,
    meta: {
      title: '404',
      requiresAuth: false
    }
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: Error,
    meta: {
      title: '404',
      requiresAuth: false
    }
  },
  {
    path: '/support',
    name: 'support',
    component: Support,
    meta: {
      title: 'Support',
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
    document.title = `${to.meta.title} | Zengarden User page`
    next()
  }
})

export default router

<script setup lang="ts">
import DefaultAuthCard from '@/components/Auths/DefaultAuthCard.vue'
import InputGroup from '@/components/Auths/InputGroup.vue'
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref('')
const loading = ref(false)

const handleSubmit = async (e: Event) => {
  e.preventDefault()

  // Validation
  if (password.value !== confirmPassword.value) {
    error.value = 'Passwords do not match'
    return
  }

  loading.value = true
  error.value = ''

  try {
    console.log('Submitting registration:', { name: name.value, email: email.value })

    const response = await axios.post(
      'https://node-mongo-auth-qthuyl9c4-chizzs-projects.vercel.app/api/v1/users/signup',
      {
        name: name.value,
        email: email.value,
        password: password.value,
        passwordConfirm: confirmPassword.value
      }
    )

    console.log('Registration successful:', response)

    // Store the token if provided
    // if (response.data.token) {
    //   localStorage.setItem('token', response.data.token)
    // }

    // Redirect to login or dashboard
    router.push('/login')
  } catch (err) {
    console.error('Registration error:', err)
    error.value = axios.isAxiosError(err)
      ? err.response?.data?.message || 'Registration failed'
      : 'An error occurred'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <DefaultAuthCard
    subtitle="Start for free"
    title="Sign Up to ZenGarden"
    class="mx-4 sm:mx-8 md:mx-12 lg:mx-18 mt-6 sm:mt-8 md:mt-10 lg:mt-12"
  >
    <form @submit="handleSubmit">
      <!-- Error display -->
      <div v-if="error" class="mb-4 p-4 bg-red-100 text-red-600 rounded-lg">
        {{ error }}
      </div>

      <InputGroup
        label="Name"
        type="text"
        placeholder="Enter your full name"
        v-model="name"
        required
      >
        <!-- svg content -->
      </InputGroup>

      <InputGroup
        label="Email"
        type="email"
        placeholder="Enter your email"
        v-model="email"
        required
      >
        <!-- svg content -->
      </InputGroup>

      <InputGroup
        label="Password"
        type="password"
        placeholder="Enter your password"
        v-model="password"
        required
      >
        <!-- svg content -->
      </InputGroup>

      <InputGroup
        label="Re-type Password"
        type="password"
        placeholder="Re-enter your password"
        v-model="confirmPassword"
        required
      >
        <!-- svg content -->
      </InputGroup>

      <div class="mb-5 mt-6">
        <button
          type="submit"
          :disabled="loading"
          class="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 font-medium text-white transition hover:bg-opacity-90 disabled:opacity-50"
        >
          {{ loading ? 'Creating account...' : 'Create account' }}
        </button>
      </div>

      <div class="mt-6 text-center">
        <p class="font-medium">
          Already have an account?
          <router-link to="/login" class="text-primary">Sign in</router-link>
        </p>
      </div>
    </form>
  </DefaultAuthCard>
</template>

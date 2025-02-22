<script setup lang="ts">
import InputGroup from '@/components/Auths/InputGroup.vue'
import SignUpAuthCard from '../Auths/SignUpAuthCard.vue'

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
  <SignUpAuthCard
    title="Register"
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
        placeholder="john.dowry@example.com"
        v-model="email"
        required
      >
        <!-- svg content -->
      </InputGroup>

      <InputGroup
        label="Password"
        type="password"
        placeholder=""
        v-model="password"
        required
      >
      <div class="icon-eye">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M12.2004 10.0003C12.2004 11.2158 11.2151 12.2011 9.99967 12.2011C8.78423 12.2011 7.79892 11.2158 7.79892 10.0003C7.79892 8.78488 8.78423 7.79957 9.99967 7.79957C11.2151 7.79957 12.2004 8.78488 12.2004 10.0003Z"
                  stroke="#737373"
                  stroke-width="1.67"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 10.0003C3.93479 7.02408 6.71528 4.86523 9.99999 4.86523C13.2847 4.86523 16.0652 7.02411 17 10.0003C16.0652 12.9766 13.2847 15.1354 10 15.1354C6.71527 15.1354 3.93477 12.9765 3 10.0003Z"
                  stroke="#737373"
                  stroke-width="1.67"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
        <!-- svg content -->
      </InputGroup>

      <InputGroup
        label="Confirm Password"
        type="password"
        placeholder=""
        v-model="confirmPassword"
        required
        >
        <div class="icon-eye">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M12.2004 10.0003C12.2004 11.2158 11.2151 12.2011 9.99967 12.2011C8.78423 12.2011 7.79892 11.2158 7.79892 10.0003C7.79892 8.78488 8.78423 7.79957 9.99967 7.79957C11.2151 7.79957 12.2004 8.78488 12.2004 10.0003Z"
                  stroke="#737373"
                  stroke-width="1.67"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 10.0003C3.93479 7.02408 6.71528 4.86523 9.99999 4.86523C13.2847 4.86523 16.0652 7.02411 17 10.0003C16.0652 12.9766 13.2847 15.1354 10 15.1354C6.71527 15.1354 3.93477 12.9765 3 10.0003Z"
                  stroke="#737373"
                  stroke-width="1.67"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
        <!-- svg content -->
      </InputGroup>

      <div class="remember-me mb-8">
        <label class="remember-me-box"><input type="checkbox" class="remember-me-checkbox">Remember me</label>
      </div>

      <div class="mb-5 mt-6">
        <button
          type="submit"
          :disabled="loading"
          class="w-full cursor-pointer rounded-full border border-primary bg-primary py-3 pl-4 p-4 font-medium text-white transition hover:bg-opacity-90 disabled:opacity-50"
        >
          {{ loading ? 'Creating account...' : 'Register' }}
        </button>
      </div>

      <div class="mt-6 text-center">
        <p class="font-medium">
          Already have an account?
          <router-link to="/login" class="text-primary">Sign in</router-link>
        </p>
      </div>
    </form>
  </SignUpAuthCard>
</template>
<style scoped>
.remember-me{
  width: 440px;
  height: 20px;
  stroke: "#D4D4D4"; 
  stroke-width:"1.5";
}

.remember-me-box {
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: stretch;
}

.remember-me-checkbox{
  width: 20px;
  height: 20px;
  stroke: #D4D4D4;
  stroke-width: 1.5px;
}
</style>
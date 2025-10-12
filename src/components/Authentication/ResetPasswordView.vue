<template>
  <ResetPasswordAuthCard
    title="Reset Password"
    class="mx-4 sm:mx-8 md:mx-12 lg:mx-18 mt-6 sm:mt-8 md:mt-10 lg:mt-12"
  >
    <div class="phaseOne" v-if="!authToken">
      <form @submit="handleSubmit">
        <!-- Show error message if exists -->
        <div v-if="error" class="mb-4 p-4 bg-red-100 text-red-600 rounded-lg">
          {{ error }}
        </div>

        <p class="mb-8 block font-medium text-black dark:text-white">
          Please enter your new password.
        </p>

        <InputGroup
          label="Type Your New Password"
          type="password"
          placeholder=""
          v-model="password"
          required
        >
        <template #right>
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
          </template>
        </InputGroup>

        <InputGroup
          label="Confirm Password"
          type="password"
          placeholder=""
          v-model="password"
          required
        >
        <template #right>
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
          </template>
        </InputGroup>

        <!--<InputGroup
        label="Password"
        type="password"
        placeholder="6+ Characters, 1 Capital letter"
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
      </InputGroup>

      <div class="mt-0 text-right">
        <router-link to="change-password" class="text-primary font-medium"
          >Forgot Password?</router-link
        >
      </div>
      <div class="mt-2 text-left remember-me-box">
        <input type="checkbox" class="remember-me mr-2" />Remember Me
      </div> -->

        <div class="mb-5 mt-10">
          <button
            type="submit"
            :disabled="loading"
            class="w-full cursor-pointer rounded-full border border-primary bg-primary py-3 pl-4 p-4 font-medium text-white transition hover:bg-opacity-90 disabled:opacity-50"
          >
            {{ loading ? 'Signing in...' : 'Reset' }}
          </button>
        </div>

        <!-- <div class="mt-6 text-center">
          <p class="font-medium">
            <router-link to="signup" class="text-primary">Resend Link</router-link>
          </p>
        </div> -->
      </form>
    </div>
    <div class="phaseTwo" v-else>
      <form @submit="handleSubmit">
        <!-- Show error message if exists -->
        <div v-if="error" class="mb-4 p-4 bg-red-100 text-red-600 rounded-lg">
          {{ error }}
        </div>

        <p class="mb-8 block font-medium text-black dark:text-white">
          Please submit your email address. We will send you a link to reset your Password.
        </p>

        <InputGroup
          label="Your Email Address"
          type="email"
          placeholder="john.dowry@example.com"
          v-model="email"
          required
        >
        <template #right>
          <svg
            class="fill-current"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="1">
              <path
                d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                fill="#737373"
              />
            </g>
          </svg>
        </template>
        </InputGroup>

        <div class="mb-5 mt-10">
          <button
            type="submit"
            :disabled="loading"
            class="w-full cursor-pointer rounded-full border border-primary bg-primary py-3 pl-4 p-4 font-medium text-white transition hover:bg-opacity-90 disabled:opacity-50"
          >
            {{ loading ? 'Signing in...' : 'Submit' }}
          </button>
        </div>

        <div class="mt-6 text-center">
          <p class="font-medium">
            <router-link to="signup" class="text-primary">Resend Link</router-link>
          </p>
        </div>
      </form>
    </div>
  </ResetPasswordAuthCard>
</template>
<script setup lang="ts">
import ResetPasswordAuthCard from '@/components/Auths/ResetPasswordAuthCard.vue'

import InputGroup from '@/components/Auths/InputGroup.vue'
import BreadcrumbDefault from '@/components/Breadcrumbs/BreadcrumbDefault.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import axios from 'axios'

const router = useRouter()
const authStore = useAuthStore()
const pageTitle = ref('Sign In')
const email = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)
const authToken = ref(false)

const handleSubmit = async (e: Event) => {
  e.preventDefault()
  loading.value = true
  error.value = ''

  try {
    const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}users/login`, {
      email: email.value,
      password: password.value
    })

    console.log('Response:', response)

    localStorage.setItem('token', response.data.token)
    localStorage.setItem('role', response.data.role)
    authStore.setAuth(response.data.token, response.data.role)
    router.push('/')
  } catch (err) {
    console.error('Error details:', err)
    error.value = axios.isAxiosError(err)
      ? err.response?.data?.message || 'Login failed'
      : 'An error occurred'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');

.remember-me {
  width: 20px;
  height: 20px;
  stroke: '#D4D4D4';
  stroke-width: '1.5';
}

.remember-me-box {
  display: flex;
  align-items: center;
}

.sign-in-box {
  display: flex;
  justify-content: center;
}
</style>

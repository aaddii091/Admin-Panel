import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const token = useStorage<string | null>('token', null)
  const role = useStorage<string | null>('role', null)

  const isAuthenticated = computed(() => !!token.value)
  const isAdmin = computed(() => role.value === 'admin')

  function setAuth(newToken: string, newRole: string) {
    token.value = newToken
    role.value = newRole
  }

  
  function logout() {
    token.value = null
    role.value = null
  }

  return { token, role, isAuthenticated, isAdmin, setAuth, logout }
})
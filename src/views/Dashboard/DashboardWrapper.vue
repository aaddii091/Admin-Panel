<script setup>
import { useAuthStore } from '@/stores/auth'
import AdminDashboard from '@/views/Dashboard/AdminDashboard.vue'
import UserDashboard from '@/views/Dashboard/Dashboard.vue'

const authStore = useAuthStore()
</script>

<template>
  <component :is="authStore.isAdmin ? AdminDashboard : UserDashboard" />
</template>

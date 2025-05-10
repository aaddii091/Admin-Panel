///
<reference path="path/types.d.ts" />
<script setup lang="ts">
import DarkModeSwitcher from './DarkModeSwitcher.vue'
import DropdownUser from './DropdownUser.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  data: {
    type: Object,
    default: () => ({
      alertFlg: false,
      alertMsg: ''
    })
  }
})
const DropdownUserData = {
  alertFlg: props.data.alertFlg,
  alertMsg: props.data.alertMsg
}

// Show comfirm alert
const getConfirmLeaveFlg = (): boolean => {
  if (!props.data.alertFlg) return false
  return confirm(props.data.alertMsg) ? false : true
}

// Navigate to the page
const goToPage = (url: string) => {
  if (getConfirmLeaveFlg()) return
  router.push({ path: url })
}
</script>

<template>
  <header
    class="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none"
  >
    <div class="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
      <div class="flex items-center gap-2 sm:gap-4">
        <!-- Hamburger Toggle BTN -->
        <button class="block flex-shrink-0" @click="goToPage('/')">
          <!-- <img src="@/assets/images/logo/logo-icon.svg" alt="Logo" /> -->
          <img
            class="hidden dark:block"
            src="../../assets/images/logo/Zengarden-dark.png"
            alt="Logo"
            width="180"
          />
          <img
            class="dark:hidden"
            src="../../assets/images/logo/Zengarden-light.png"
            alt="Logo"
            width="180"
          />
        </button>
      </div>

      <div class="flex items-center gap-3 2xsm:gap-7">
        <ul class="flex items-center gap-2 2xsm:gap-4">
          <li>
            <!-- Dark Mode Toggler -->
            <DarkModeSwitcher />
            <!-- Dark Mode Toggler -->
          </li>
        </ul>

        <!-- User Area -->
        <DropdownUser :data="DropdownUserData" />
        <!-- User Area -->
      </div>
    </div>
  </header>
</template>

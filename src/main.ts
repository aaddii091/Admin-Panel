import './assets/css/satoshi.css'
import './assets/css/style.css'
import 'jsvectormap/dist/css/jsvectormap.min.css'
import 'flatpickr/dist/flatpickr.min.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueApexCharts from 'vue3-apexcharts'

import App from './App.vue';
import router from './router'

import Swal from 'sweetalert2'

const iniApp = () => {
  const app = createApp(App)

  app.use(createPinia())
  app.use(router)
  app.use(VueApexCharts)

  app.config.globalProperties.$swal = Swal

  app.mount('#app')
}

if (import.meta.env.VITE_APP_ENV === 'local') {
  import('./axios-mock').then(iniApp);
  // import './axios-mock'; // Import the mock setup
} else {
  iniApp();
}

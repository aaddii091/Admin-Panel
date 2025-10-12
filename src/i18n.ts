
import { createI18n } from 'vue-i18n'
import en from '@/assets/locales/en.json'
import bsBA from '@/assets/locales/bs-BA.json'

const messages = {
  en,
  'bs-BA': bsBA
}

export const i18n = createI18n({
  legacy: false,         
  locale: 'en',          
  fallbackLocale: 'en',  
  messages
})

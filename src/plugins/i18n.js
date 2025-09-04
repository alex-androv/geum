import { createI18n } from 'vue-i18n'
import en from '@/locales/en'
import sr from '@/locales/sr'

const messages = {
  en,
  sr,
}

const i18n = createI18n({
  legacy: false, // для Composition API
  locale: 'en', // язык по умолчанию
  fallbackLocale: 'en', // резервный язык
  messages,
})

export default i18n

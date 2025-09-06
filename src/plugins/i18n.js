import { createI18n } from 'vue-i18n'
import en from '@/locales/en'
import sr from '@/locales/sr'

const messages = {
  en,
  sr,
}

// Функция для получения языка из localStorage или браузера
const getInitialLocale = () => {
  // Сначала пытаемся получить сохраненный язык
  try {
    const savedLocale = localStorage.getItem('preferred-locale')
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'sr')) {
      return savedLocale
    }
  } catch (error) {
    console.warn('Could not load locale from localStorage:', error)
  }

  // Если нет сохраненного языка, определяем по языку браузера
  const browserLang = navigator.language.split('-')[0]
  if (browserLang === 'sr') {
    return 'sr'
  }

  // По умолчанию английский
  return 'en'
}

const i18n = createI18n({
  legacy: false, // для Composition API
  locale: getInitialLocale(), // язык определяется автоматически
  fallbackLocale: 'en', // резервный язык
  messages,
})

export default i18n

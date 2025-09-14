<script setup>
import { useI18n } from 'vue-i18n'
import LogoIcon from '@/assets/icons/logo.svg'

const { t, locale } = useI18n()

const saveLocaleToStorage = (newLocale) => {
  try {
    localStorage.setItem('preferred-locale', newLocale)
  } catch (error) {
    console.warn('Could not save locale to localStorage:', error)
  }
}

const changeLocale = (newLocale) => {
  locale.value = newLocale
  saveLocaleToStorage(newLocale)
}
</script>

<template>
  <div class="bg-[#F0F0F0] px-2 xs:px-3 sm:px-5 lg:px-10 2xl:px-[224px] py-4">
    <div class="flex justify-between items-center mb-5 lg:mb-0">
      <RouterLink to="/"
        ><LogoIcon class="w-[103px] h-[44px] xs:w-[123px] h-[52px] lg:w-[161px] h-[68px]"
      /></RouterLink>
      <div class="hidden items-center justify-between gap-2 xs:gap-3 sm:gap-6 lg:flex">
        <RouterLink
          to="/menu"
          class="text-xl font-fliege font-medium text-[#2D2A28] ellipse-hover ellipse-hover-thin"
        >
          {{ t('nav.menu') }}
        </RouterLink>
        <div class="w-[84px] h-px bg-[#2D2A28]"></div>
        <a
          href="https://wa.me/381611128101"
          target="_blank"
          class="text-xl font-fliege font-medium text-[#2D2A28] ellipse-hover"
        >
          {{ t('nav.reservations') }}
        </a>
        <div class="w-[84px] h-px bg-[#2D2A28]"></div>
        <RouterLink
          to="/press"
          class="text-xl font-fliege font-medium text-[#2D2A28] ellipse-hover ellipse-hover-thin"
        >
          {{ t('nav.press') }}
        </RouterLink>
      </div>
      <div class="flex gap-4">
        <button
          @click="changeLocale('sr')"
          :class="[
            'font-fliege font-550 text-2xl leading-7 cursor-pointer transition-colors ellipse-lang',
            locale === 'sr' ? 'text-[#2D2A28] active' : 'text-[#919191]',
          ]"
        >
          SR
        </button>
        <button
          @click="changeLocale('en')"
          :class="[
            'font-fliege font-550 text-2xl leading-7 cursor-pointer transition-colors ellipse-lang',
            locale === 'en' ? 'text-[#2D2A28] active' : 'text-[#919191]',
          ]"
        >
          EN
        </button>
      </div>
    </div>
    <div class="flex items-center justify-between gap-2 xs:gap-3 sm:gap-6 lg:hidden">
      <RouterLink to="/menu" class="text-xl font-fliege font-medium text-[#2D2A28]">
        {{ t('nav.menu') }}
      </RouterLink>
      <div class="w-full h-px bg-[#2D2A28]"></div>
      <a
        href="https://wa.me/381611128101"
        target="_blank"
        class="text-xl font-fliege font-medium text-[#2D2A28]"
      >
        {{ t('nav.reservations') }}
      </a>
      <div class="w-full h-px bg-[#2D2A28]"></div>
      <RouterLink to="/press" class="text-xl font-fliege font-medium text-[#2D2A28]">
        {{ t('nav.press') }}
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.ellipse-hover {
  position: relative;
  transition: all 0.3s ease;
}

.ellipse-hover::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(100% + 44px);
  height: calc(100% + 6px);
  border: 1px solid transparent;
  border-radius: 309.7px / 77.5px;
  transform: translate(-50%, -50%) rotate(0deg);
  transition: all 0.3s ease;
  opacity: 0;
}

.ellipse-hover:hover::before {
  border-color: #1509c2;
  transform: translate(-50%, -50%) rotate(-5.91deg);
  opacity: 1;
}

.ellipse-hover:hover {
  color: #ff4f0a;
}

.ellipse-lang {
  position: relative;
  transition: all 0.3s ease;
}

.ellipse-lang::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(100% + 24px);
  height: 100%;
  border: 1px solid transparent;
  border-radius: 309.7px / 177.5px;
  transform: translate(-50%, -50%) rotate(0deg);
  transition: all 0.3s ease;
  opacity: 0;
}

.ellipse-lang:hover::before {
  border-color: #1509c2;
  transform: translate(-50%, -50%) rotate(-12.91deg);
  opacity: 1;
}
.ellipse-lang.active::before {
  border-color: #ff4f0a;
  transform: translate(-50%, -50%) rotate(-12.91deg);
  opacity: 1;
}

.ellipse-lang:hover {
  color: #ff4f0a;
}

.ellipse-hover-thin::before {
  width: calc(100% + 54px);
  height: 100%;
}
</style>

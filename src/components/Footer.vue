<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import InstagramIcon from '@/assets/icons/instagram-bold.svg'
import WhatsappIcon from '@/assets/icons/whatsapp-bold.svg'
import WoltIcon from '@/assets/icons/wolt-bold.svg'
import GoogleIcon from '@/assets/icons/google-bold.svg'

const route = useRoute()

const isNotHomePage = computed(() => route.name !== 'home')
</script>

<template>
  <div v-if="isNotHomePage" class="flex justify-center bg-[#F0F0F0] border-t border-[#919191]">
    <div class="grid grid-cols-2 xs:grid-cols-4 xs:grid-rows-2 gap-4 px-2 xs:px-10 pt-4 pb-6">
      <a
        href="https://www.instagram.com/geum.bistro/"
        target="_blank"
        class="flex flex-col items-center gap-1"
      >
        <InstagramIcon />
        <p class="font-fliege font-medium text-[20px] leading-[24px] text-[#2D2A28]">instagram</p>
      </a>

      <div class="hidden xs:block"></div>

      <a href="https://wa.me/381611128101" target="_blank" class="flex flex-col items-center gap-1">
        <WhatsappIcon />
        <p class="font-fliege font-medium text-[20px] leading-[24px] text-[#2D2A28]">whatsapp</p>
      </a>

      <div class="hidden xs:block"></div>

      <div class="hidden xs:block"></div>

      <a
        href="https://maps.app.goo.gl/uPy9nPYbt8Vdps8V6?g_st=com.google.maps.preview.copy"
        target="_blank"
        class="flex flex-col items-center gap-1 ml-8 xs:ml-0"
      >
        <GoogleIcon />
        <p class="font-fliege font-medium text-[20px] leading-[24px] text-[#2D2A28]">google</p>
      </a>

      <div class="hidden xs:block"></div>

      <a
        href="https://wolt.com/sr/srb/belgrade/restaurant/geum-bistro"
        target="_blank"
        class="flex flex-col items-center gap-1 ml-8 xs:ml-0"
      >
        <WoltIcon />
        <p class="font-fliege font-medium text-[20px] leading-[24px] text-[#2D2A28]">wolt</p>
      </a>
    </div>
  </div>

  <div class="bg-[#F0F0F0]">
    <div class="mx-2 xs:mx-3 sm:mx-5 lg:mx-10 2xl:mx-[224px] py-4 border-t border-[#C4C4C4]">
      <div class="flex flex-col sm:flex-row sm:justify-between gap-6 mb-6 items-center">
        <a
          href="https://maps.app.goo.gl/uPy9nPYbt8Vdps8V6?g_st=com.google.maps.preview.copy"
          target="_blank"
          class="font-fliege font-medium text-[#2D2A28] text-center text-[20px]"
          >Takovska 45a, Beograd 11060, Serbia</a
        >
        <a href="tel:+381611128101" class="font-fliege font-medium text-[#2D2A28] text-[20px]"
          >+381611128101</a
        >
      </div>
      <p class="font-fliege font-medium text-[#615F5C] text-center sm:text-left">
        © 2025 All rights reserved
      </p>
    </div>
  </div>
</template>

<style scoped></style>

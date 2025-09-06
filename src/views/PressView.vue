<script setup>
import QuotesIcon from '@/assets/icons/quotes.svg'
import ArrowIcon from '@/assets/icons/arrow-right-up.svg'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="bg-[#F0F0F0] px-2 xs:px-3 sm:px-5 lg:px-10 2xl:px-[224px] py-4">
    <div class="flex flex-col items-center">
      <QuotesIcon class="mb-5 w-[33px] h-6 sm:w-[50px] sm:h-[38px]" />
      <h1
        class="text-[28px] xs:text-[36px] sm:text-[52px] leading-[32px] xs:leading-[40px] sm:leading-[56px] tracking-[-8%] uppercase font-fliege font-extrabold text-[#FF4F0A] mb-10"
      >
        {{ t('press.about') }}
      </h1>
      <div class="mb-10 sm:mb-[60px] max-w-[640px]">
        <p
          class="font-fliege font-bold text-[#2D2A28] text-2xl sm:text-[32px] text-center lowercase leading-[28px] tracking-[2%] mb-[12px]"
        >
          {{ t('press.wannabe') }}
        </p>
        <div class="flex justify-center items-center gap-3">
          <p class="font-fliege font-medium uppercase text-[#FF4F0A]">WANNABE MAGAZINE</p>
          <a
            href="https://wannabemagazine.com/vikend-mapa-beograda-21-23-jun/?fbclid=PAQ0xDSwMikDZleHRuA2FlbQIxMQABp4TGqRkMKLPjq6oppbaIma8aiebOQMX-YkQg9py6jKuQGq7dQJ-uzKEmNUqa_aem_25sb1JsmsiDvhL8Ihc6pDA"
            target="_blank"
            class="flex items-center border pl-3 pr-[6px] py-1 border-[#FF4F0A] rounded-[80px] hover:bg-[#FF4F0A] text-[#FF4F0A] hover:text-[#F7F7F7] transition-colors duration-200"
            ><p class="font-fliege font-medium uppercase">{{ t('press.read') }}</p>
            <ArrowIcon
          /></a>
        </div>
      </div>
      <div class="mb-10 sm:mb-[60px] max-w-[640px]">
        <p
          class="font-fliege font-bold text-[#2D2A28] text-2xl sm:text-[32px] text-center lowercase leading-[28px] tracking-[2%] mb-[12px]"
        >
          {{ t('press.buro') }}
        </p>
        <div class="flex justify-center items-center gap-3">
          <p class="font-fliege font-medium uppercase text-[#FF4F0A]">BURO</p>
          <a
            href="https://buro247.rs/life/lista-novih-restorana-i-kafica-u-beogradu/?fbclid=PAQ0xDSwMikFhleHRuA2FlbQIxMQABp4GFX46Biik8yg4BLNSd6N1u0ZT5trBqpiNPLEqXF3fAB1TguBsJAemqVtYM_aem_ufpSNcXgg4Cc4RJfB9AmuA"
            target="_blank"
            class="flex items-center border pl-3 pr-[6px] py-1 border-[#FF4F0A] rounded-[80px] hover:bg-[#FF4F0A] text-[#FF4F0A] hover:text-[#F7F7F7] transition-colors duration-200"
            ><p class="font-fliege font-medium uppercase">{{ t('press.read') }}</p>
            <ArrowIcon
          /></a>
        </div>
      </div>
      <div class="mb-10 sm:mb-[60px] max-w-[640px]">
        <p
          class="font-fliege font-bold text-[#2D2A28] text-2xl sm:text-[32px] text-center lowercase leading-[28px] tracking-[2%] mb-[12px]"
        >
          {{ t('press.cafebar') }}
        </p>
        <div class="flex justify-center items-center gap-3">
          <p class="font-fliege font-medium uppercase text-[#FF4F0A]">CAFÉBAR & RESTORAN</p>
          <a
            href="https://cafebarrestoran.rs/restoran/geum-bistro-kod-botanicke-baste-otvorio-svoja-vrata/?fbclid=PAQ0xDSwMikH1leHRuA2FlbQIxMQABp18qbY35NmisynhZdfTeAkDcmZISqarSsuDqdEV1dxM3mUGsR2uEf78VTbyB_aem_x_rQsQoHPApiu7ZhgsMCwA"
            target="_blank"
            class="flex items-center border pl-3 pr-[6px] py-1 border-[#FF4F0A] rounded-[80px] hover:bg-[#FF4F0A] text-[#FF4F0A] hover:text-[#F7F7F7] transition-colors duration-200"
            ><p class="font-fliege font-medium uppercase">{{ t('press.read') }}</p>
            <ArrowIcon
          /></a>
        </div>
      </div>
      <div class="mb-10 sm:mb-[60px] max-w-[640px]">
        <p
          class="font-fliege font-bold text-[#2D2A28] text-2xl sm:text-[32px] text-center lowercase leading-[28px] tracking-[2%] mb-[12px]"
        >
          {{ t('press.mapamag') }}
        </p>
        <div class="flex justify-center items-center gap-3">
          <p class="font-fliege font-medium uppercase text-[#FF4F0A]">MAPAMAG.RS</p>
          <a
            href="https://mapamag.rs/geum-bistro-kod-botanicke-baste/"
            target="_blank"
            class="flex items-center border pl-3 pr-[6px] py-1 border-[#FF4F0A] rounded-[80px] hover:bg-[#FF4F0A] text-[#FF4F0A] hover:text-[#F7F7F7] transition-colors duration-200"
            ><p class="font-fliege font-medium uppercase">{{ t('press.read') }}</p>
            <ArrowIcon
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

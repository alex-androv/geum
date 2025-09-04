<script setup>
import LocationIcon from '@/assets/icons/location.svg'
import InstagramIcon from '@/assets/icons/instagram-bold.svg'
import WhatsappIcon from '@/assets/icons/whatsapp-bold.svg'
import WoltIcon from '@/assets/icons/wolt-bold.svg'
import GoogleIcon from '@/assets/icons/google-bold.svg'
const photos = [
  '/src/assets/images/slider/photo.png',
  '/src/assets/images/slider/photo-1.png',
  '/src/assets/images/slider/photo-2.png',
  '/src/assets/images/slider/photo-3.png',
  '/src/assets/images/slider/photo-4.png',
]
</script>

<template>
  <div class="bg-[#F0F0F0] px-2 xs:px-3 sm:px-5 lg:px-10 2xl:px-[224px] py-4">
    <div class="flex items-center mb-2">
      <LocationIcon class="w-9 h-9 xs:w-10 xs:h-10" />
      <a
        href="https://maps.app.goo.gl/uPy9nPYbt8Vdps8V6?g_st=com.google.maps.preview.copy"
        target="_blank"
        class="font-fliege font-semibold xs:font-medium leading-[18px] xs:leading-[20px] text-[#2D2A28] text-[14px] xs:text-[16px] ml-3"
        >Takovska 45a, Beograd 11060, Serbia</a
      >
    </div>
    <h1
      class="text-[28px] xs:text-[36px] sm:text-[52px] leading-[32px] xs:leading-[40px] sm:leading-[56px] tracking-[-8%] uppercase font-fliege font-extrabold text-[#FF4F0A] mb-5"
    >
      seasonal restaurant and bar in belgrade
    </h1>
    <div class="block sm:hidden overflow-hidden mb-5">
      <div class="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        <div v-for="(photo, index) in photos" :key="index" class="flex-none w-full snap-start mr-1">
          <img :src="photo" :alt="`Photo ${index + 1}`" class="w-full h-[334px] object-cover" />
        </div>
      </div>
    </div>
    <div class="hidden sm:grid grid-cols-4 grid-rows-2 gap-1 mb-5">
      <div class="col-span-1 row-span-2">
        <img src="/src/assets/images/desktop/photo.png" />
      </div>
      <div class="col-span-1 row-span-2">
        <img src="/src/assets/images/desktop/photo-1.png" />
      </div>
      <div class="col-span-2 row-span-1"><img src="/src/assets/images/desktop/photo-2.png" /></div>
      <div class="col-span-1 row-span-1">
        <img src="/src/assets/images/desktop/photo-3.png" />
      </div>
      <div class="col-span-1 row-span-1">
        <img src="/src/assets/images/desktop/photo-4.png" />
      </div>
    </div>
    <div class="lg:flex lg:items-center lg:gap-6 lg:mb-10 lg:justify-between lg:w-full">
      <div
        class="flex justify-between lg:grid lg:grid-cols-2 lg:gap-x-10 lg:ml-0 lg:gap-y-6 px-11 lg:px-0 py-3 mb-5 lg:mb-0 lg:min-w-[276px] xs:max-w-[340px] xs:mx-auto sm:max-w-[600px]"
      >
        <a
          href="https://www.instagram.com/geum.bistro/"
          target="_blank"
          class="group flex flex-col items-center gap-1"
        >
          <InstagramIcon
            class="w-6 h-6 text-[#2D2A28] group-hover:text-[#FF4F0A] transition-colors duration-300"
          />
          <p
            class="hidden sm:block font-fliege font-medium text-[20px] leading-[24px] text-[#2D2A28] ellipse-hover"
          >
            instagram
          </p>
        </a>

        <a
          href="https://wa.me/381611128101"
          target="_blank"
          class="group flex flex-col items-center gap-1"
        >
          <WhatsappIcon
            class="w-6 h-6 text-[#2D2A28] group-hover:text-[#FF4F0A] transition-colors duration-300"
          />
          <p
            class="hidden sm:block font-fliege font-medium text-[20px] leading-[24px] text-[#2D2A28] ellipse-hover"
          >
            whatsapp
          </p>
        </a>

        <a
          href="https://maps.app.goo.gl/uPy9nPYbt8Vdps8V6?g_st=com.google.maps.preview.copy"
          target="_blank"
          class="group flex flex-col items-center gap-1"
        >
          <GoogleIcon
            class="w-6 h-6 text-[#2D2A28] group-hover:text-[#FF4F0A] transition-colors duration-300"
          />
          <p
            class="hidden sm:block font-fliege font-medium text-[20px] leading-[24px] text-[#2D2A28] ellipse-hover"
          >
            google
          </p>
        </a>

        <a
          href="https://wolt.com/sr/srb/belgrade/restaurant/geum-bistro"
          target="_blank"
          class="group flex flex-col items-center gap-1"
        >
          <WoltIcon
            class="w-6 h-6 text-[#2D2A28] group-hover:text-[#FF4F0A] transition-colors duration-300"
          />
          <p
            class="hidden sm:block font-fliege font-medium text-[20px] leading-[24px] text-[#2D2A28] ellipse-hover"
          >
            wolt
          </p>
        </a>
      </div>
      <p
        class="lg:hidden mb-20 lg:mb-0 text-center text-[#2D2A28] font-fliege font-semibold sm:text-[20px leading-[20px] sm:leading-[24px] lg:text-left lg:line-clamp-5 lg:leading-6"
      >
        We are a neobistro located near the Botanical Garden in Belgrade. Led by chef Ivan
        Ankudinov, we focus on cooking with seasonal ingredients and frequently refresh our menu. We
        collaborate with local wineries, craft beer brewers, and coffee roasters. We believe that
        cooking tasty everyday meals is fun.
      </p>
      <p
        class="hidden lg:block mb-20 lg:mb-0 text-center text-[#2D2A28] font-fliege font-semibold sm:text-[20px leading-[20px] sm:leading-[24px] lg:text-left lg:line-clamp-5 lg:leading-6"
      >
        We are a neobistro located near the Botanical Garden in Belgrade. <br />Led by chef Ivan
        Ankudinov, we focus on cooking with seasonal ingredients and frequently refresh our menu.
        <br />
        We collaborate with local wineries, craft beer brewers, and coffee roasters. <br />
        We believe that cooking tasty everyday meals is fun.
      </p>
    </div>
  </div>
</template>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.ellipse-hover {
  position: relative;
  transition: all 0.3s ease;
}

.ellipse-hover::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(100% + 74px);
  height: calc(100% + 6px);
  border: 1px solid transparent;
  border-radius: 209.7px / 77.5px;
  transform: translate(-50%, -50%) rotate(0deg);
  transition: all 0.3s ease;
  opacity: 0;
}

.ellipse-hover:hover::before {
  border-color: #1509c2;
  transform: translate(-50%, -50%) rotate(-2.91deg);
  opacity: 1;
}

.ellipse-hover:hover {
  color: #ff4f0a;
}
</style>

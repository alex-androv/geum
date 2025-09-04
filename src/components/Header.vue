<script setup>
import LogoIcon from '@/assets/icons/logo.svg'
</script>

<template>
  <div class="bg-[#F0F0F0] px-2 xs:px-3 sm:px-5 lg:px-10 2xl:px-[224px] py-4">
    <div class="flex justify-between items-center mb-5 lg:mb-0">
      <RouterLink to="/"
        ><LogoIcon class="w-[103px] h-[44px] xs:w-[123px] h-[52px] lg:w-[161px] h-[68px]"
      /></RouterLink>
      <div class="hidden items-center justify-between gap-2 xs:gap-3 sm:gap-6 lg:flex">
        <RouterLink to="/menu" class="text-xl font-fliege font-medium text-[#2D2A28] ellipse-hover"
          >MENU</RouterLink
        >
        <div class="w-[84px] h-px bg-[#2D2A28]"></div>
        <a
          href="https://wa.me/381611128101"
          target="_blank"
          class="text-xl font-fliege font-medium text-[#2D2A28] ellipse-hover"
          >RESERVATIONS</a
        >
        <div class="w-[84px] h-px bg-[#2D2A28]"></div>
        <RouterLink to="/press" class="text-xl font-fliege font-medium text-[#2D2A28] ellipse-hover"
          >PRESS</RouterLink
        >
      </div>
      <div class="flex gap-2">
        <div class="text-[#919191] font-fliege font-550 text-2xl leading-7">SR</div>
        <div class="text-[#2D2A28] font-fliege font-550 text-2xl leading-7">EN</div>
      </div>
    </div>
    <div class="flex items-center justify-between gap-2 xs:gap-3 sm:gap-6 lg:hidden">
      <RouterLink to="/menu" class="text-xl font-fliege font-medium text-[#2D2A28]"
        >MENU</RouterLink
      >
      <div class="w-full h-px bg-[#2D2A28]"></div>
      <a
        href="https://wa.me/381611128101"
        target="_blank"
        class="text-xl font-fliege font-medium text-[#2D2A28]"
        >RESERVATIONS</a
      >
      <div class="w-full h-px bg-[#2D2A28]"></div>
      <RouterLink to="/press" class="text-xl font-fliege font-medium text-[#2D2A28]"
        >PRESS</RouterLink
      >
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

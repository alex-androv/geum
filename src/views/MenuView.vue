<script setup>
import DotIcon from '@/assets/icons/dot.svg'
</script>

<template>
  <div class="bg-white p-3 xs:py-4 sm:py-5 lg:py-10 2xl:px-[224px]">
    <div
      class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:[grid-template-areas:'b1_b2''b4_b3''._b5']"
    >
      <!-- Блок 1 -->
      <div class="lg:[grid-area:b1]">
        <h2 class="font-fliege font-extrabold text-right text-[64px] leading-[68px] text-[#2D2A28]">
          menu
        </h2>
        <p class="font-rockwell text-right leading-[20px] text-[#2D2A28]">Morning 10:00 — 14:00</p>
        <div class="pt-10">
          <h3
            class="font-rockwell font-bold text-[28px] leading-[32px] text-[#2D2A28] uppercase mb-2"
          >
            Sandwiches
          </h3>
          <div>
            <div class="flex justify-between items-center">
              <div class="relative">
                <DotIcon class="absolute top-[7px]" />
                <p class="font-rockwell text-[#2D2A28] leading-[20px] max-w-[233px] pl-2">
                  Bacon sandwich
                </p>
              </div>
              <p class="font-rockwell text-[#2D2A28] leading-[20px]">690</p>
            </div>
            <div class="flex justify-between items-center">
              <div class="relative">
                <DotIcon class="absolute top-[7px]" />
                <p class="font-rockwell text-[#2D2A28] leading-[20px] max-w-[233px] pl-2">
                  Ramiro pepper sandwich with smoked feta
                </p>
              </div>
              <p class="font-rockwell text-[#2D2A28] leading-[20px]">690</p>
            </div>
            <div class="flex justify-between items-center">
              <div class="relative">
                <DotIcon class="absolute top-[7px]" />
                <p class="font-rockwell text-[#2D2A28] leading-[20px] max-w-[233px] pl-2">
                  Chicken sandwich
                </p>
              </div>
              <p class="font-rockwell text-[#2D2A28] leading-[20px]">690</p>
            </div>
          </div>
        </div>

        <div class="pt-10">
          <h3
            class="font-rockwell font-bold text-[28px] leading-[32px] text-[#2D2A28] uppercase mb-2"
          >
            Sandwiches
          </h3>
          <div>
            <div class="flex justify-between items-center">
              <div class="relative">
                <DotIcon class="absolute top-[7px]" />
                <p class="font-rockwell text-[#2D2A28] leading-[20px] max-w-[233px] pl-2">
                  Bacon sandwich
                </p>
              </div>
              <p class="font-rockwell text-[#2D2A28] leading-[20px]">690</p>
            </div>
            <div class="flex justify-between items-center">
              <div class="relative">
                <DotIcon class="absolute top-[7px]" />
                <p class="font-rockwell text-[#2D2A28] leading-[20px] max-w-[233px] pl-2">
                  Ramiro pepper sandwich with smoked feta
                </p>
              </div>
              <p class="font-rockwell text-[#2D2A28] leading-[20px]">690</p>
            </div>
            <div class="flex justify-between items-center">
              <div class="relative">
                <DotIcon class="absolute top-[7px]" />
                <p class="font-rockwell text-[#2D2A28] leading-[20px] max-w-[233px] pl-2">
                  Chicken sandwich
                </p>
              </div>
              <p class="font-rockwell text-[#2D2A28] leading-[20px]">690</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Блок 2 -->
      <div class="lg:[grid-area:b2]">Блок 2</div>

      <!-- Блок 3 -->
      <div class="lg:[grid-area:b3] b">Блок 3</div>

      <!-- Блок 4 -->
      <div class="lg:[grid-area:b4] bg">Блок 4</div>

      <!-- Блок 5 -->
      <div class="lg:[grid-area:b5] bg">Блок 5</div>
    </div>
  </div>
</template>

<style scoped></style>

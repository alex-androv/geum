<script setup>
const photos = [
  '/src/assets/images/slider/photo.png',
  '/src/assets/images/slider/photo-1.png',
  '/src/assets/images/slider/photo-2.png',
  '/src/assets/images/slider/photo-3.png',
  '/src/assets/images/slider/photo-4.png',
]
</script>

<template>
  <div class="">
    <div class="block md:hidden overflow-hidden">
      <div class="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
        <div v-for="(photo, index) in photos" :key="index" class="flex-none w-full snap-start mr-1">
          <img :src="photo" :alt="`Photo ${index + 1}`" class="w-full h-[334px] object-cover" />
        </div>
      </div>
    </div>
    <div class=""></div>
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
</style>

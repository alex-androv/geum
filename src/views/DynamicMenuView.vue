<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useMenu } from '@/composables/useMenu'
import DotIcon from '@/assets/icons/dot.svg'

const { locale } = useI18n()
const { menuItems, loading, error, getItemsByCategory, getItemsBySubcategory } = useMenu()

// Получение десертов и напитков
const desserts = computed(() => getItemsByCategory('desserts'))
const drinks = computed(() => getItemsByCategory('drinks'))

// Группировка напитков по подкатегориям
const drinksBySubcategory = computed(() => {
  const subcategories = [
    'lemonades',
    'kombucha',
    'cocktails',
    'softs',
    'on_tap',
    'bottle_beer',
    'bottle_cider',
  ]
  return subcategories.reduce((acc, subcategory) => {
    const items = getItemsBySubcategory('drinks', subcategory)
    if (items.length > 0) {
      acc[subcategory] = items
    }
    return acc
  }, {})
})

// Маппинг названий подкатегорий для отображения
const subcategoryNames = {
  lemonades: { en: 'Lemonades', sr: 'Лимонаде' },
  kombucha: { en: 'Kombucha', sr: 'Комбуча' },
  cocktails: { en: 'Cocktails', sr: 'Коктели' },
  softs: { en: 'Softs', sr: 'Безалкохолни' },
  on_tap: { en: 'On Tap', sr: 'На чешму' },
  bottle_beer: { en: 'Bottle Beer', sr: 'Флашано пиво' },
  bottle_cider: { en: 'Bottle Cider', sr: 'Флашан сидер' },
  cakes: { en: 'Cakes', sr: 'Торте' },
  other: { en: 'Other', sr: 'Остало' },
}

// Функция для получения названия на текущем языке
const getDisplayName = (item) => {
  return locale.value === 'en' ? item.name.en : item.name.sr
}

const getSubcategoryName = (subcategory) => {
  return subcategoryNames[subcategory]?.[locale.value] || subcategory
}
</script>

<template>
  <div class="bg-white p-3 xs:py-4 sm:py-5 lg:py-10 2xl:px-[224px]">
    <!-- Loading состояние -->
    <div v-if="loading" class="flex justify-center items-center py-20">
      <p class="font-rockwell text-[#2D2A28]">Loading menu...</p>
    </div>

    <!-- Ошибка -->
    <div v-else-if="error" class="flex justify-center items-center py-20">
      <p class="font-rockwell text-red-600">Error loading menu: {{ error }}</p>
    </div>

    <!-- Основной контент -->
    <div v-else class="flex flex-col gap-4 lg:flex-row lg:gap-[60px] 2xl:gap-[120px] mb-10">
      <!-- Левый блок - Десерты -->
      <div class="left-block w-full lg:w-1/2">
        <div class="mb-10">
          <h2
            class="font-fliege font-extrabold text-right text-[64px] leading-[68px] text-[#2D2A28]"
          >
            desserts
          </h2>

          <!-- Десерты по подкатегориям -->
          <div v-for="subcategory in ['cakes', 'other']" :key="subcategory" class="pt-10">
            <template v-if="getItemsBySubcategory('desserts', subcategory).length > 0">
              <h3
                class="font-rockwell font-bold text-[28px] leading-[32px] text-[#2D2A28] uppercase mb-2"
              >
                {{ getSubcategoryName(subcategory) }}
              </h3>
              <div>
                <div
                  v-for="item in getItemsBySubcategory('desserts', subcategory)"
                  :key="item._id"
                  class="flex justify-between items-center"
                >
                  <div class="relative">
                    <DotIcon class="absolute top-[7px] md:top-[10px]" />
                    <p
                      class="font-rockwell text-[#2D2A28] leading-[20px] md:text-[20px] md:leading-[24px] max-w-[233px] pl-2"
                    >
                      {{ getDisplayName(item) }}
                    </p>
                  </div>
                  <p
                    class="font-rockwell text-[#2D2A28] leading-[20px] md:text-[20px] md:leading-[24px]"
                  >
                    {{ item.price }}
                  </p>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>

      <!-- Правый блок - Напитки -->
      <div class="right-block w-full lg:w-1/2">
        <div class="mb-10">
          <h2
            class="font-fliege font-extrabold text-right text-[64px] leading-[68px] text-[#2D2A28]"
          >
            drinks
          </h2>

          <!-- Напитки по подкатегориям -->
          <div v-for="(items, subcategory) in drinksBySubcategory" :key="subcategory" class="pt-10">
            <div class="flex justify-between items-center">
              <h3
                class="font-rockwell font-bold text-[28px] leading-[32px] text-[#2D2A28] uppercase mb-2"
              >
                {{ getSubcategoryName(subcategory) }}
              </h3>
              <!-- Здесь можно добавить объем, если нужно -->
              <p
                v-if="subcategory === 'lemonades'"
                class="font-rockwell text-[#2D2A28] leading-[20px]"
              >
                400ml
              </p>
              <p
                v-if="subcategory === 'kombucha'"
                class="font-rockwell text-[#2D2A28] leading-[20px]"
              >
                220ml
              </p>
            </div>
            <div>
              <div v-for="item in items" :key="item._id" class="flex justify-between items-center">
                <div class="relative">
                  <DotIcon class="absolute top-[7px] md:top-[10px]" />
                  <p
                    class="font-rockwell text-[#2D2A28] leading-[20px] md:text-[20px] md:leading-[24px] max-w-[233px] pl-2"
                  >
                    {{ getDisplayName(item) }}
                  </p>
                </div>
                <p
                  class="font-rockwell text-[#2D2A28] leading-[20px] md:text-[20px] md:leading-[24px]"
                >
                  {{ item.price }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

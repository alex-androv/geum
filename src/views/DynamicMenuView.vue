<script setup>
import { computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useMenu } from '@/composables/useMenu'
import DotIcon from '@/assets/icons/dot.svg'

const { locale } = useI18n()
const {
  menuItems,
  loading,
  error,
  fetchMenuItems,
  getItemsByCategory,
  getItemsBySubcategory,
  getItemsBySubSubcategory,
} = useMenu()

// Загружаем данные при монтировании компонента
onMounted(() => {
  fetchMenuItems()
})

// Получение данных по категориям
const menuMorning = computed(() => getItemsByCategory('menu_morning'))
const menuEvening = computed(() => getItemsByCategory('menu_evening'))
const drinks = computed(() => getItemsByCategory('drinks'))
const bar = computed(() => getItemsByCategory('bar'))
const wines = computed(() => getItemsByCategory('wines'))

// Группировка menu_morning по подкатегориям
const menuMorningBySubcategory = computed(() => {
  const subcategories = ['sandwiches', 'breakfast', 'bread', 'buns', 'desserts_morning']
  return subcategories.reduce((acc, subcategory) => {
    const items = getItemsBySubcategory('menu_morning', subcategory)
    if (items.length > 0) {
      acc[subcategory] = items
    }
    return acc
  }, {})
})

// Группировка menu_evening по подкатегориям
const menuEveningBySubcategory = computed(() => {
  const subcategories = ['snacks', 'starters', 'salad', 'main dishes', 'desserts_evening']
  return subcategories.reduce((acc, subcategory) => {
    const items = getItemsBySubcategory('menu_evening', subcategory)
    if (items.length > 0) {
      acc[subcategory] = items
    }
    return acc
  }, {})
})

// Группировка drinks по подкатегориям
const drinksBySubcategory = computed(() => {
  const subcategories = ['lemonades', 'kombucha', 'cocktails', 'softs', 'coffee', 'tea']
  return subcategories.reduce((acc, subcategory) => {
    const items = getItemsBySubcategory('drinks', subcategory)
    if (items.length > 0) {
      acc[subcategory] = items
    }
    return acc
  }, {})
})

// Группировка bar по подкатегориям
const barBySubcategory = computed(() => {
  const subcategories = ['on_tap', 'bottle']
  return subcategories.reduce((acc, subcategory) => {
    if (subcategory === 'bottle') {
      // Для bottle группируем по subsubcategory
      const bottleItems = getItemsBySubcategory('bar', 'bottle')
      const subsubcategories = ['beer', 'cider', 'vodka', 'rakija']

      const bottleSubcategories = subsubcategories.reduce((subAcc, subsubcat) => {
        const items = bottleItems.filter((item) => item.subsubcategory === subsubcat)
        if (items.length > 0) {
          subAcc[subsubcat] = items
        }
        return subAcc
      }, {})

      // Добавляем bottle только если есть хотя бы одна подподкатегория
      if (Object.keys(bottleSubcategories).length > 0) {
        acc[subcategory] = bottleSubcategories
      }
    } else {
      const items = getItemsBySubcategory('bar', subcategory)
      if (items.length > 0) {
        acc[subcategory] = items
      }
    }
    return acc
  }, {})
})

// Группировка wines по подкатегориям
const winesBySubcategory = computed(() => {
  const subcategories = ['sparkling', 'white', 'rose', 'red', 'orange']
  return subcategories.reduce((acc, subcategory) => {
    const items = getItemsBySubcategory('wines', subcategory)
    if (items.length > 0) {
      acc[subcategory] = items
    }
    return acc
  }, {})
})

// Маппинг названий для отображения
const subcategoryNames = {
  // Menu categories
  sandwiches: { en: 'Sandwiches', sr: 'Сендвичи' },
  breakfast: { en: 'Breakfast', sr: 'Доручак' },
  bread: { en: 'Bread', sr: 'Хлеб' },
  buns: { en: 'Buns', sr: 'Земичке' },
  desserts_morning: { en: 'Desserts', sr: 'Десерти' },
  snacks: { en: 'Snacks', sr: 'Грицкалице' },
  starters: { en: 'Starters', sr: 'Предјела' },
  salad: { en: 'Salad', sr: 'Салата' },
  'main dishes': { en: 'Main Dishes', sr: 'Главна јела' },
  desserts_evening: { en: 'Desserts', sr: 'Десерти' },

  // Drinks categories
  lemonades: { en: 'Lemonades', sr: 'Лимонаде' },
  kombucha: { en: 'Kombucha', sr: 'Комбуча' },
  cocktails: { en: 'Cocktails', sr: 'Коктели' },
  softs: { en: 'Softs', sr: 'Безалкохолни' },
  coffee: { en: 'Coffee', sr: 'Кафа' },
  tea: { en: 'Tea', sr: 'Чај' },

  // Bar categories
  on_tap: { en: 'On Tap', sr: 'На чешму' },
  bottle: { en: 'Bottle', sr: 'Флаша' },
  beer: { en: 'Beer', sr: 'Пиво' },
  cider: { en: 'Cider', sr: 'Сидер' },
  vodka: { en: 'Vodka', sr: 'Водка' },
  rakija: { en: 'Rakija', sr: 'Ракија' },

  // Wine categories
  sparkling: { en: 'Sparkling', sr: 'Пенушаво' },
  white: { en: 'White', sr: 'Бело' },
  rose: { en: 'Rosé', sr: 'Розе' },
  red: { en: 'red', sr: 'црвена' },
  orange: { en: 'Orange', sr: 'Наранџасто' },
}

// Функции для получения названий
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
      <!-- Левый блок -->
      <div class="left-block w-full lg:w-1/2">
        <!-- Menu Morning -->
        <div v-if="menuMorning.length > 0" class="mb-10">
          <h2
            class="font-fliege font-extrabold text-right text-[64px] leading-[68px] text-[#2D2A28]"
          >
            menu
          </h2>
          <p class="font-rockwell text-right leading-[20px] text-[#2D2A28]">
            Morning 10:00 - 14:00
          </p>

          <div
            v-for="(items, subcategory) in menuMorningBySubcategory"
            :key="subcategory"
            class="pt-10"
          >
            <h3
              class="font-rockwell font-bold text-[28px] leading-[32px] text-[#2D2A28] uppercase mb-2"
            >
              {{ getSubcategoryName(subcategory) }}
            </h3>
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

            <!-- Блок Extras после подкатегории breakfast -->
            <div v-if="subcategory === 'breakfast'">
              <p
                class="font-rockwell italic text-[#2D2A28] leading-[20px] md:text-[20px] md:leading-[24px] py-3 max-w-[90%]"
              >
                *Extras: egg 100 / bacon 170 / sun-dried tomatoes 100 / smoked feta 140 / eggplant
                appetizer 130 / olives 120
              </p>
            </div>
          </div>
          <p
            class="font-rockwell text-[#2D2A28] leading-[20px] md:text-[20px] md:leading-[24px] mt-3"
          >
            Let us know, if you have any food allergies
          </p>
        </div>

        <!-- Menu Evening -->
        <div v-if="menuEvening.length > 0" class="mb-10">
          <h2
            class="font-fliege font-extrabold text-right text-[64px] leading-[68px] text-[#2D2A28]"
          >
            menu
          </h2>
          <p class="font-rockwell text-right leading-[20px] text-[#2D2A28]">
            Evening 14:00 - 22:00
          </p>

          <div
            v-for="(items, subcategory) in menuEveningBySubcategory"
            :key="subcategory"
            class="pt-10"
          >
            <h3
              class="font-rockwell font-bold text-[28px] leading-[32px] text-[#2D2A28] uppercase mb-2"
            >
              {{ getSubcategoryName(subcategory) }}
            </h3>
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
          <p
            class="font-rockwell text-[#2D2A28] leading-[20px] md:text-[20px] md:leading-[24px] mt-3"
          >
            Let us know, if you have any food allergies
          </p>
        </div>
      </div>

      <!-- Правый блок -->
      <div class="right-block w-full lg:w-1/2">
        <!-- Drinks -->
        <div v-if="drinks.length > 0" class="mb-10">
          <h2
            class="font-fliege font-extrabold text-right text-[64px] leading-[68px] text-[#2D2A28]"
          >
            drinks
          </h2>

          <div v-for="(items, subcategory) in drinksBySubcategory" :key="subcategory" class="pt-10">
            <div class="flex justify-between items-center">
              <h3
                class="font-rockwell font-bold text-[28px] leading-[32px] text-[#2D2A28] uppercase mb-2"
              >
                {{ getSubcategoryName(subcategory) }}
              </h3>
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
              <p v-if="subcategory === 'tea'" class="font-rockwell text-[#2D2A28] leading-[20px]">
                750ml
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
              <div v-if="subcategory === 'coffee'">
                <p
                  class="font-rockwell italic text-[#2D2A28] leading-[20px] md:text-[20px] md:leading-[24px] py-3 max-w-[90%]"
                >
                  * milk + 50 din<br>* soy milk + 80 din</br>
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Bar -->
        <div v-if="bar.length > 0" class="mb-10">
          <h2
            class="font-fliege font-extrabold text-right text-[64px] leading-[68px] text-[#2D2A28]"
          >
            bar
          </h2>

          <!-- On Tap -->
          <div v-if="barBySubcategory.on_tap" class="pt-10">
            <h3
              class="font-rockwell font-bold text-[28px] leading-[32px] text-[#2D2A28] uppercase mb-2"
            >
              {{ getSubcategoryName('on_tap') }}
            </h3>
            <div>
              <div
                v-for="item in barBySubcategory.on_tap"
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
          </div>

          <!-- Bottle с подподкатегориями -->
          <div v-if="barBySubcategory.bottle" class="pt-10">
            <h3
              class="font-rockwell font-bold text-[28px] leading-[32px] text-[#2D2A28] uppercase mb-2"
            >
              {{ getSubcategoryName('bottle') }}
            </h3>

            <!-- Beer -->
            <div v-if="barBySubcategory.bottle.beer" class="pt-5">
              <h4 class="font-rockwell font-bold text-[20px] leading-[24px] text-[#2D2A28] mb-2">
                {{ getSubcategoryName('beer') }}
              </h4>
              <div>
                <div
                  v-for="item in barBySubcategory.bottle.beer"
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
            </div>

            <!-- Cider -->
            <div v-if="barBySubcategory.bottle.cider" class="pt-5">
              <h4
                class="font-rockwell font-semibold text-[20px] leading-[24px] text-[#2D2A28] mb-1"
              >
                {{ getSubcategoryName('cider') }}
              </h4>
              <div>
                <div
                  v-for="item in barBySubcategory.bottle.cider"
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
            </div>

            <!-- Vodka -->
            <div v-if="barBySubcategory.bottle.vodka" class="pt-5">
              <div class="flex justify-between items-center">
                <h4
                  class="font-rockwell font-semibold text-[20px] leading-[24px] text-[#2D2A28] mb-1"
                >
                  {{ getSubcategoryName('vodka') }}
                </h4>
                <p class="font-rockwell text-[#2D2A28] leading-[20px]">40ml</p>
              </div>
              <div>
                <div
                  v-for="item in barBySubcategory.bottle.vodka"
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
            </div>

            <!-- Rakija -->
            <div v-if="barBySubcategory.bottle.rakija" class="pt-5">
              <div class="flex justify-between items-center">
                <h4
                  class="font-rockwell font-semibold text-[20px] leading-[24px] text-[#2D2A28] mb-1"
                >
                  {{ getSubcategoryName('rakija') }}
                </h4>
                <p class="font-rockwell text-[#2D2A28] leading-[20px]">40ml</p>
              </div>
              <div>
                <div
                  v-for="item in barBySubcategory.bottle.rakija"
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
            </div>
          </div>
        </div>

        <!-- Wines -->
        <div v-if="wines.length > 0" class="mb-10">
          <h2
            class="font-fliege font-extrabold text-right text-[64px] leading-[68px] text-[#2D2A28]"
          >
            wines
          </h2>

          <div v-for="(items, subcategory) in winesBySubcategory" :key="subcategory" class="pt-10">
            <h3
              class="font-rockwell font-bold text-[28px] leading-[32px] text-[#2D2A28] uppercase mb-2"
            >
              {{ getSubcategoryName(subcategory) }}
            </h3>
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

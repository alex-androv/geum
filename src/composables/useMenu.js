import { ref } from 'vue'
import { sanityClient } from '@/lib/sanity'

export function useMenu() {
  const menuItems = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchMenuItems = async () => {
    loading.value = true
    error.value = null

    try {
      const query = `*[_type == "menuItem"] | order(category asc, subcategory asc, order asc) {
        _id,
        name,
        price,
        category,
        subcategory,
        subsubcategory,
        order
      }`

      const items = await sanityClient.fetch(query)
      menuItems.value = items
    } catch (err) {
      error.value = err.message
      console.error('Error fetching menu items:', err)
    } finally {
      loading.value = false
    }
  }

  const getItemsByCategory = (category) => {
    return menuItems.value.filter((item) => item.category === category)
  }

  const getItemsBySubcategory = (category, subcategory) => {
    return menuItems.value.filter(
      (item) => item.category === category && item.subcategory === subcategory,
    )
  }

  const getItemsBySubSubcategory = (category, subcategory, subsubcategory) => {
    return menuItems.value.filter(
      (item) =>
        item.category === category &&
        item.subcategory === subcategory &&
        item.subsubcategory === subsubcategory,
    )
  }

  return {
    menuItems,
    loading,
    error,
    fetchMenuItems,
    getItemsByCategory,
    getItemsBySubcategory,
    getItemsBySubSubcategory,
  }
}

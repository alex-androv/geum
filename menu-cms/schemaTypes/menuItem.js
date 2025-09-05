export default {
  name: 'menuItem',
  title: 'Menu Item / Ставка менија',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name / Име',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'sr',
          title: 'Српски',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'price',
      title: 'Price / Цена',
      type: 'string',
      description: 'Например: "300" или "0.5 / 380"',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category / Категорија',
      type: 'string',
      options: {
        list: [
          {title: 'Desserts', value: 'desserts'},
          {title: 'Drinks', value: 'drinks'},
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subcategory',
      title: 'Subcategory / Поткатегорија',
      type: 'string',
      options: {
        list: [
          // Drinks subcategories
          {title: 'On Tap', value: 'on_tap'},
          {title: 'Bottle - Beer', value: 'bottle_beer'},
          {title: 'Bottle - Cider', value: 'bottle_cider'},
          {title: 'Lemonades', value: 'lemonades'},
          {title: 'Kombucha', value: 'kombucha'},
          {title: 'Cocktails', value: 'cocktails'},
          {title: 'Softs', value: 'softs'},
          // Desserts subcategories
          {title: 'Cakes', value: 'cakes'},
          {title: 'Other', value: 'other'},
        ],
      },
    },
  ],
  preview: {
    select: {
      nameEn: 'name.en',
      nameSr: 'name.sr',
      price: 'price',
      category: 'category',
    },
    prepare({nameEn, nameSr, price, category}) {
      return {
        title: `${nameEn} / ${nameSr}`,
        subtitle: `${price} RSD - ${category}`,
      }
    },
  },
}

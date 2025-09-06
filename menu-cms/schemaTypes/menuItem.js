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
          {title: 'menu_morning', value: 'menu_morning'},
          {title: 'menu_evening', value: 'menu_evening'},
          {title: 'bar', value: 'bar'},
          {title: 'drinks', value: 'drinks'},
          {title: 'wines', value: 'wines'},
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
          // Menu morning categories
          {title: 'sandwiches', value: 'sandwiches'},
          {title: 'breakfast', value: 'breakfast'},
          {title: 'bread', value: 'bread'},
          {title: 'buns', value: 'buns'},
          {title: 'desserts_morning', value: 'desserts_morning'},
          // Menu evening categories
          {title: 'snacks', value: 'snacks'},
          {title: 'starters', value: 'starters'},
          {title: 'salad', value: 'salad'},
          {title: 'main dishes', value: 'main dishes'},
          {title: 'desserts_evening', value: 'desserts_evening'},
          // Bar subcategories
          {title: 'On Tap', value: 'on_tap'},
          {title: 'Bottle', value: 'bottle'},
          // Drinks subcategories
          {title: 'Lemonades', value: 'lemonades'},
          {title: 'Kombucha', value: 'kombucha'},
          {title: 'Cocktails', value: 'cocktails'},
          {title: 'Softs', value: 'softs'},
          {title: 'Coffee', value: 'coffee'},
          {title: 'Tea', value: 'tea'},
          // Wines subcategories
          {title: 'sparkling', value: 'sparkling'},
          {title: 'white', value: 'white'},
          {title: 'rose', value: 'rose'},
          {title: 'red', value: 'red'},
          {title: 'orange', value: 'orange'},
        ],
      },
    },
    {
      name: 'subsubcategory',
      title: 'Sub-subcategory / Под-поткатегорија',
      type: 'string',
      options: {
        list: [
          {title: 'Beer', value: 'beer'},
          {title: 'Cider', value: 'cider'},
          {title: 'Vodka', value: 'vodka'},
          {title: 'Rakija', value: 'rakija'},
        ],
      },
    },
    {
      name: 'order',
      title: 'Order / Редослед',
      type: 'number',
      description: 'Порядок отображения (1, 2, 3...). Меньшие числа отображаются выше.',
      validation: (Rule) => Rule.min(1).integer(),
    },
  ],
  preview: {
    select: {
      nameEn: 'name.en',
      nameSr: 'name.sr',
      price: 'price',
      category: 'category',
      order: 'order',
    },
    prepare({nameEn, nameSr, price, category, order}) {
      return {
        title: `${nameEn} / ${nameSr}`,
        subtitle: `${price} RSD - ${category} (${order || 'no order'})`,
      }
    },
  },
}

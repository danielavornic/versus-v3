import { defineType } from 'sanity'

export default defineType({
  name: 'productVariant',
  title: 'Product Variant',
  type: 'object',
  fields: [
    {
      name: 'color',
      title: 'Color',
      type: 'string',
      options: {
        list: [
          { title: 'Negru', value: 'black' },
          { title: 'Verde', value: 'green' },
          { title: 'Alb', value: 'white' },
          { title: 'Roz', value: 'pink' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'product',
      title: 'Product',
      type: 'reference',
      to: [{ type: 'product' }],
    },
    // {
    //   name: 'stock',
    //   title: 'Stock',
    //   type: 'number',
    //   validation: (Rule) => Rule.required(),
    // },
  ],
})

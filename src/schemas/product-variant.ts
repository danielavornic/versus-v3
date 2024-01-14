import { defineType } from 'sanity'

export default defineType({
  name: 'productVariant',
  title: 'Product Variant',
  type: 'object',
  fields: [
    {
      name: 'size',
      title: 'Size',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: 'small' },
          { title: 'Medium', value: 'medium' },
          { title: 'Large', value: 'large' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
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
      name: 'stock',
      title: 'Stock',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
  ],
})

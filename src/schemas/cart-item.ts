// schema for cart item
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'cartItem',
  title: 'Cart Item',
  type: 'document',
  fields: [
    defineField({
      name: 'product',
      title: 'Product',
      type: 'reference',
      to: [{ type: 'product' }],
    }),
    defineField({
      name: 'quantity',
      title: 'Quantity',
      type: 'number',
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
    }),
  ],
})

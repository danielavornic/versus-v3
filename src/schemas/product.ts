import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'artist',
      title: 'Artist',
      type: 'string',
      options: {
        list: [
          { title: 'Satoshi', value: 'satoshi' },
          { title: 'Dara', value: 'dara' },
          { title: "Carla's Dreams", value: 'csd' },
          { title: 'Magnat & Feoctist', value: 'magnat-feoctist' },
        ],
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'backImage',
      title: 'Back image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'T-Shirt', value: 'T-shirt' },
          { title: 'Hoodie', value: 'Hoodie' },
          { title: 'Long sleeve', value: 'Long sleeve' },
          { title: 'Album CD', value: 'Album CD' },
          { title: 'Carnet', value: 'Carnet' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'inStock',
      title: 'In stock',
      type: 'boolean',
      hidden: ({ document }) =>
        !['Album CD', 'Carnet'].includes(document.category as string),
    }),
    defineField({
      name: 'inStockXS',
      title: 'In stock (XS)',
      type: 'boolean',
      hidden: ({ document }) =>
        ['Album CD', 'Carnet'].includes(document.category as string) ||
        document.artist !== 'magnat-feoctist',
    }),
    defineField({
      name: 'inStockS',
      title: 'In stock (S)',
      type: 'boolean',
      hidden: ({ document }) =>
        ['Album CD', 'Carnet'].includes(document.category as string),
    }),
    defineField({
      name: 'inStockM',
      title: 'In stock (M)',
      type: 'boolean',
      hidden: ({ document }) =>
        ['Album CD', 'Carnet'].includes(document.category as string),
    }),
    defineField({
      name: 'inStockL',
      title: 'In stock (L)',
      type: 'boolean',
      hidden: ({ document }) =>
        ['Album CD', 'Carnet'].includes(document.category as string),
    }),
    defineField({
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
      hidden: ({ document }) =>
        ['Album CD', 'Carnet'].includes(document.category as string),
      // validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'variants',
      title: 'Variants',
      type: 'array',
      of: [{ type: 'productVariant' }],
      hidden: ({ document }) =>
        ['Album CD', 'Carnet'].includes(document.category as string),
    }),
    defineField({
      name: 'relatedProducts',
      title: 'Related products',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})

import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'release',
  title: 'Release',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Song Name',
      type: 'string',
    }),
    defineField({
      name: 'artist',
      title: 'Artist',
      type: 'string',
    }),
    defineField({
      name: 'coverImg',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'date',
      title: 'Release Date',
      type: 'date',
    }),
    defineField({
      name: 'spotify',
      title: 'Spotify',
      type: 'string',
    }),
    defineField({
      name: 'appleMusic',
      title: 'Apple Music',
      type: 'string',
    }),
    defineField({
      name: 'deezer',
      title: 'Deezer',
      type: 'string',
    }),
    defineField({
      name: 'isPublished',
      title: 'Is Published',
      type: 'boolean',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})

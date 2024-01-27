import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'artist',
  title: 'Artist',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'promoVideo',
      title: 'Promo Video',
      type: 'url',
    }),
    defineField({
      name: 'tiktok',
      title: 'TikTok',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'string',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'string',
    }),
    defineField({
      name: 'youtube',
      title: 'Youtube',
      type: 'string',
    }),
    defineField({
      name: 'tiktok2',
      title: 'TikTok 2',
      type: 'string',
    }),
    defineField({
      name: 'instagram1',
      title: 'Instagram 2',
      type: 'string',
    }),
    defineField({
      name: 'facebook2',
      title: 'Facebook 2',
      type: 'string',
    }),
    defineField({
      name: 'youtube2',
      title: 'Youtube 2',
      type: 'string',
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
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})

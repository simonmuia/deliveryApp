import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Menu Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Category name',
      type: 'string',
      validation: (Rule)=> Rule.required()
    }),
    defineField({
      name: 'images',
      title: 'Image of Category',
      type: 'image',
    }),
  ],
})
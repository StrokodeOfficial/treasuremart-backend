// category.ts
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({ 
        name: 'title',
        type: 'string',
        validation: r => r.required() 
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: r => r.required(),
    }),
    defineField({
       name: 'cover',
       type: 'image',
    }),
    defineField({
        name: 'description',
        type: 'text',
    }),
    defineField({
      name: 'parent',
      type: 'reference',
      to: [{ type: 'category' }],
    }),
  ],
  preview: {
    select: { title: 'title', parent: 'parent.title' },
    prepare: ({ title, parent }) => ({
      title,
      subtitle: parent ? `Child of ${parent}` : 'Top-level',
    }),
  },
});
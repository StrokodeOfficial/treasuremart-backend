import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'tags',
    title: 'Tags',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            validation: (r) => r.required(),
            description: 'Name of the tag'
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            validation: (r) => r.required(),
            description: "Auto generate if you don't know what is this"
        }),
        defineField({
            name: 'parent',
            type: 'reference',
            to: [{ type: 'category' }]
        })
    ],
    preview: {
        select: { title: 'title', parent: 'parent.title' },
        prepare: ({ title, parent }) => ({
            title,
            subtitle: parent ? `Child of ${parent}` : 'Top-level'
        })
    }
})
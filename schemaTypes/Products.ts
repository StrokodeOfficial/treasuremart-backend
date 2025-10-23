import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            validation: (r) => r.required(),
            description: 'Name of the Product'
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            validation: (r) => r.required(),
            description: "Auto generate if you don't know what is this"
        }),
        defineField({
            name: 'mrp',
            type: 'number',
            description: 'Market price of the product',
        }),
        defineField({
            name: 'price',
            type: 'number',
            validation: (r) => r.required(),
            description: 'selling price of the product',
        }),
        defineField({
            name: 'images',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
            validation: (r) => r.min(1),
            description: 'images of the product'
        }),
        defineField({
            name: 'categories',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'category'}] }],
            description: "Categories related to this product"
        }),
        defineField({
            name: 'tags',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'tags'}] }],
            description: "Categories related to this product"
        })
    ],
    preview: {
        select: {
            title: 'title',
            medida: 'images.0'
        }
    }
})
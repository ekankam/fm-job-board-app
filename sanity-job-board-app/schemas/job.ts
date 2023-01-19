import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'job',
  title: 'Job',
  type: 'document',
  fields: [
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string'
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'string'
    }),
    defineField({
      name: 'logoBackgroundColor',
      title: 'Logo Background Color',
      type: 'string'
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'string'
    }),
    defineField({
      name: 'postedAt',
      title: 'Posted At',
      type: 'string'
    }),
    defineField({
      name: 'contract',
      title: 'Contract',
      type: 'string'
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string'
    }),
    defineField({
      name: 'websiteLink',
      title: 'Website Link',
      type: 'url'
    }),
    defineField({
      name: 'applicationLink',
      title: 'Application Link',
      type: 'url'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
    defineField({
      name: 'requirements',
      title: 'Requirements',
      type: 'object',
      fields: [
        {
          name: 'content',
          title: 'Content',
          type: 'text',
        },
        {
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [{ type: 'string' }]
        }
      ]
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'object',
      fields: [
        {
          name: 'content',
          title: 'Content',
          type: 'text',
        },
        {
          name: 'items',
          title: 'Items',
          type: 'array',
          of: [{ type: 'string' }]
        }
      ]
    }),
  ],
})

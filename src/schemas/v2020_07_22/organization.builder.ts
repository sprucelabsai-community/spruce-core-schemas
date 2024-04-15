import { buildSchema } from '@sprucelabs/schema'

export default buildSchema({
    id: 'organization',
    name: 'Organization',
    description: 'A company or team. Comprises of many people and locations.',
    fields: {
        id: {
            label: 'Id',
            type: 'id',
            isRequired: true,
        },
        name: {
            label: 'Name',
            type: 'text',
            isRequired: true,
        },
        address: {
            label: 'Address',
            type: 'address',
        },
        slug: {
            label: 'Slug',
            type: 'text',
            isRequired: true,
        },
        isPublic: {
            label: 'Public',
            type: 'boolean',
            hint: 'Is this organization viewable by guests?',
            defaultValue: false,
        },
        dateCreated: {
            type: 'dateTime',
            isRequired: true,
        },
        dateDeleted: {
            type: 'dateTime',
        },
    },
})

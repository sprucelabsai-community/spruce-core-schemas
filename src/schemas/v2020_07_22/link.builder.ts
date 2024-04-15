import { buildSchema } from '@sprucelabs/schema'

export default buildSchema({
    id: 'link',
    name: 'Link',
    fields: {
        label: {
            type: 'text',
            isRequired: true,
        },
        uri: {
            type: 'text',
            isRequired: true,
        },
    },
})

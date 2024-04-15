import { buildSchema } from '@sprucelabs/schema'

export default buildSchema({
    id: 'choice',
    fields: {
        value: {
            type: 'text',
            isRequired: true,
        },
        label: {
            type: 'text',
            isRequired: true,
        },
    },
})

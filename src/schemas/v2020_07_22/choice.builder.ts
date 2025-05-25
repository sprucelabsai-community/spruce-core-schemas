import { buildSchema } from '@sprucelabs/schema'

export default buildSchema({
    id: 'choice',
    fields: {
        value: {
            type: 'raw',
            isRequired: true,
            options: {
                valueType: `string | number`,
            },
        },
        label: {
            type: 'text',
            isRequired: true,
        },
    },
})

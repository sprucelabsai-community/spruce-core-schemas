import { buildSchema } from '@sprucelabs/schema'

export default buildSchema({
    id: 'agent',
    name: 'Agent',
    fields: {
        id: {
            type: 'id',
            isRequired: true,
        },
        name: {
            type: 'text',
            isRequired: true,
        },
        systemPrompt: {
            type: 'text',
            isRequired: true,
        },
        source: {
            type: 'schema',
            isPrivate: true,
            options: {
                schema: buildSchema({
                    id: 'agentSource',
                    fields: {
                        personId: {
                            type: 'id',
                        },
                        skillId: {
                            type: 'id',
                        },
                    },
                }),
            },
        },
    },
})

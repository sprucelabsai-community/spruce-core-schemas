import { buildSchema } from '@sprucelabs/schema'
import choiceBuilder from './choice.builder'
import linkBuilder from './link.builder'

const eventTargetFields = {
    locationId: {
        type: 'id',
    },
    personId: {
        type: 'id',
    },
    organizationId: {
        type: 'id',
    },
    skillId: {
        type: 'id',
    },
    roleId: {
        type: 'id',
    },
} as const

export const messageTargetSchema = buildSchema({
    id: 'messageTarget',
    fields: {
        ...eventTargetFields,
        phone: {
            type: 'phone',
        },
        email: {
            type: 'email',
        },
    },
})

export const messageSourceSchema = buildSchema({
    id: 'messageSource',
    fields: {
        ...eventTargetFields,
        isCore: {
            type: 'boolean',
        },
    },
})

export default buildSchema({
    id: 'message',
    description:
        'A discrete communication between two humans or a human and a machine.',
    fields: {
        id: {
            type: 'id',
            isRequired: true,
        },
        trackingId: {
            type: 'id',
            hint: 'An arbitrary id that can be used to track this message when being sent and not yet assigned an Id.',
        },
        inReplyToMessageId: {
            type: 'id',
            hint: 'If this message is a reply to another message, this is the id of that original message.',
        },
        dateCreated: {
            type: 'number',
            isRequired: true,
        },
        dateSent: {
            type: 'number',
        },
        target: {
            type: 'schema',
            isRequired: true,
            options: {
                schema: messageTargetSchema,
            },
        },
        source: {
            type: 'schema',
            isRequired: true,
            options: {
                schema: messageSourceSchema,
            },
        },
        errors: {
            type: 'text',
            isArray: true,
            isPrivate: true,
        },
        classification: {
            type: 'select',
            isRequired: true,
            options: {
                choices: [
                    {
                        value: 'auth',
                        label: 'Auth',
                    } as const,
                    {
                        value: 'transactional',
                        label: 'transactional',
                    } as const,
                    {
                        value: 'promotional',
                        label: 'Promotional',
                    } as const,
                    {
                        value: 'incoming',
                        label: 'incoming',
                    } as const,
                ],
            },
        },
        status: {
            type: 'select',
            defaultValue: 'pending',
            isPrivate: true,
            options: {
                choices: [
                    {
                        value: 'pending',
                        label: 'Pending',
                    } as const,
                    {
                        value: 'processing',
                        label: 'Processing',
                    } as const,
                    {
                        value: 'sent',
                        label: 'Sent',
                    } as const,
                    {
                        value: 'failed',
                        label: 'Failed',
                    } as const,
                    {
                        value: 'ignored',
                        label: 'Ignored',
                    } as const,
                    {
                        value: 'processed-internally',
                        label: 'Processed Internally',
                    } as const,
                ],
            },
        },
        subject: {
            type: 'text',
        },
        body: {
            type: 'text',
            isRequired: true,
        },
        context: {
            type: 'raw',
            options: {
                valueType: 'Record<string, any>',
            },
            isPrivate: true,
        },
        topicId: {
            type: 'id',
        },
        links: {
            type: 'schema',
            isArray: true,
            minArrayLength: 0,
            options: {
                schema: linkBuilder,
            },
        },
        choices: {
            type: 'schema',
            isArray: true,
            options: {
                schema: choiceBuilder,
            },
        },
        log: {
            type: 'text',
            hint: 'An arbitrary log associated with the message. Is used for debugging purposes.',
        },
    },
})

import { buildSchema } from '@sprucelabs/schema'

export default buildSchema({
    id: 'skill',
    name: 'Skill',
    description: 'An ability Sprucebot has learned.',
    fields: {
        id: {
            label: 'Id',
            type: 'id',
            isRequired: true,
        },
        apiKey: {
            label: 'Id',
            isPrivate: true,
            type: 'id',
            isRequired: true,
        },
        name: {
            label: 'Name',
            type: 'text',
            isRequired: true,
        },
        description: {
            label: 'Description',
            type: 'text',
            isRequired: false,
        },
        slug: {
            label: 'Namespace',
            type: 'text',
            isRequired: true,
        },
        isPublished: {
            type: 'boolean',
            label: 'Published',
            hint: 'Does this skill show up in the marketplace and can other devs use it as a dependency?',
        },
        canBeInstalled: {
            type: 'boolean',
            label: 'Global',
            hint: 'Does this skill require needing to be installed anywhere.',
            defaultValue: true,
        },
        creators: {
            label: 'Creators',
            type: 'schema',
            hint: 'The people or skills who created and own this skill.',
            isRequired: true,
            isArray: true,
            isPrivate: true,
            options: {
                schema: {
                    id: 'skillCreator',
                    name: 'Skill creator',
                    fields: {
                        skillId: {
                            type: 'text',
                        },
                        personId: {
                            type: 'text',
                        },
                    },
                },
            },
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

import { buildSchema } from '@sprucelabs/schema'

export default buildSchema({
    id: 'personOrganization',
    name: 'Person <-> organization relationship',
    fields: {
        id: {
            label: 'Id',
            type: 'id',
            isRequired: true,
        },
        organizationId: {
            label: 'Organization id',
            type: 'id',
            isRequired: true,
        },
        personId: {
            label: 'Person id',
            type: 'id',
            isRequired: true,
        },
        dateCreated: {
            label: 'Date created',
            type: 'dateTime',
            isRequired: true,
        },
        dateDeleted: {
            label: 'Date deleted',
            type: 'dateTime',
        },
    },
})

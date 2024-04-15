import { buildSchema } from '@sprucelabs/schema'

export default buildSchema({
    id: 'personLocation',
    name: 'Person <-> location relationship',
    fields: {
        id: {
            label: 'Id',
            type: 'id',
            isRequired: true,
        },
        locationId: {
            label: 'Location id',
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

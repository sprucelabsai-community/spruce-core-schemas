import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../core.schemas.types'

const personLocationSchema: SpruceSchemas.Spruce.v2020_07_22.PersonLocationSchema =
    {
        id: 'personLocation',
        version: 'v2020_07_22',
        namespace: 'Spruce',
        name: 'Person <-> location relationship',
        moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
        fields: {
            /** Id. */
            id: {
                label: 'Id',
                type: 'id',
                isRequired: true,
                options: undefined,
            },
            /** Location id. */
            locationId: {
                label: 'Location id',
                type: 'id',
                isRequired: true,
                options: undefined,
            },
            /** Person id. */
            personId: {
                label: 'Person id',
                type: 'id',
                isRequired: true,
                options: undefined,
            },
            /** Date created. */
            dateCreated: {
                label: 'Date created',
                type: 'dateTime',
                isRequired: true,
                options: undefined,
            },
            /** Date deleted. */
            dateDeleted: {
                label: 'Date deleted',
                type: 'dateTime',
                options: undefined,
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(personLocationSchema)

export default personLocationSchema

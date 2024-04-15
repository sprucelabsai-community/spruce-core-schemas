import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../core.schemas.types'

const messageTargetSchema: SpruceSchemas.Spruce.v2020_07_22.MessageTargetSchema =
    {
        id: 'messageTarget',
        version: 'v2020_07_22',
        namespace: 'Spruce',
        name: '',
        moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
        fields: {
            /** . */
            locationId: {
                type: 'id',
                options: undefined,
            },
            /** . */
            personId: {
                type: 'id',
                options: undefined,
            },
            /** . */
            organizationId: {
                type: 'id',
                options: undefined,
            },
            /** . */
            skillId: {
                type: 'id',
                options: undefined,
            },
            /** . */
            roleId: {
                type: 'id',
                options: undefined,
            },
            /** . */
            phone: {
                type: 'phone',
                options: undefined,
            },
        },
    }

SchemaRegistry.getInstance().trackSchema(messageTargetSchema)

export default messageTargetSchema

import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../core.schemas.types'



const choicesSchema: SpruceSchemas.Spruce.v2020_07_22.ChoicesSchema  = {
	id: 'choices',
	version: 'v2020_07_22',
	namespace: 'Spruce',
	name: '',}

SchemaRegistry.getInstance().trackSchema(choicesSchema)

export default choicesSchema

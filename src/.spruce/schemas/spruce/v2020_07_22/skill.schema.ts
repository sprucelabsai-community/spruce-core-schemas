import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../core.schemas.types'

import skillCreatorSchema_v2020_07_22 from '#spruce/schemas/spruce/v2020_07_22/skillCreator.schema'

const skillSchema: SpruceSchemas.Spruce.v2020_07_22.SkillSchema  = {
	id: 'skill',
	version: 'v2020_07_22',
	namespace: 'Spruce',
	name: 'Skill',
	moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
	description: 'An ability Sprucebot has learned.',
	    fields: {
	            /** Id. */
	            'id': {
	                label: 'Id',
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** Id. */
	            'apiKey': {
	                label: 'Id',
	                type: 'id',
	                isPrivate: true,
	                isRequired: true,
	                options: undefined
	            },
	            /** Name. */
	            'name': {
	                label: 'Name',
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** Description. */
	            'description': {
	                label: 'Description',
	                type: 'text',
	                options: undefined
	            },
	            /** Namespace. */
	            'slug': {
	                label: 'Namespace',
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** Published. Does this skill show up in the marketplace and can other devs use it as a dependency? */
	            'isPublished': {
	                label: 'Published',
	                type: 'boolean',
	                hint: 'Does this skill show up in the marketplace and can other devs use it as a dependency?',
	                options: undefined
	            },
	            /** Global. Does this skill require needing to be installed anywhere. */
	            'canBeInstalled': {
	                label: 'Global',
	                type: 'boolean',
	                hint: 'Does this skill require needing to be installed anywhere.',
	                defaultValue: true,
	                options: undefined
	            },
	            /** Creators. The people or skills who created and own this skill. */
	            'creators': {
	                label: 'Creators',
	                type: 'schema',
	                isPrivate: true,
	                isRequired: true,
	                hint: 'The people or skills who created and own this skill.',
	                isArray: true,
	                options: {schema: skillCreatorSchema_v2020_07_22,}
	            },
	            /** . */
	            'dateCreated': {
	                type: 'dateTime',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'dateDeleted': {
	                type: 'dateTime',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(skillSchema)

export default skillSchema

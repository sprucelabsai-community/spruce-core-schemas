import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../core.schemas.types'



const locationSchema: SpruceSchemas.Spruce.v2020_07_22.LocationSchema  = {
	id: 'location',
	version: 'v2020_07_22',
	namespace: 'Spruce',
	name: 'Location',
	moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
	description: 'A physical location where people meet. An organization has at least one of them.',
	    fields: {
	            /** Id. */
	            'id': {
	                label: 'Id',
	                type: 'id',
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
	            /** Location number. You can use other symbols, like # or dashes. #123 or 32-US-5 */
	            'num': {
	                label: 'Location number',
	                type: 'text',
	                hint: 'You can use other symbols, like # or dashes. #123 or 32-US-5',
	                options: undefined
	            },
	            /** Slug. */
	            'slug': {
	                label: 'Slug',
	                type: 'text',
	                isRequired: true,
	                options: undefined
	            },
	            /** Public. Is this location viewable by guests? */
	            'isPublic': {
	                label: 'Public',
	                type: 'boolean',
	                hint: 'Is this location viewable by guests?',
	                defaultValue: false,
	                options: undefined
	            },
	            /** Main Phone. */
	            'phone': {
	                label: 'Main Phone',
	                type: 'phone',
	                options: undefined
	            },
	            /** Timezone. */
	            'timezone': {
	                label: 'Timezone',
	                type: 'select',
	                options: {choices: [{"value":"UTC","label":"UTC"},{"value":"Pacific/Honolulu","label":"Hawaii Time"},{"value":"America/Anchorage","label":"Alaska Time"},{"value":"America/Los_Angeles","label":"Pacific Time"},{"value":"America/Denver","label":"Mountain Time"},{"value":"America/Phoenix","label":"Phoenix Time (No DST)"},{"value":"America/Chicago","label":"Central Time"},{"value":"America/Guatemala","label":"Central Standard Time (No DST)"},{"value":"America/New_York","label":"Eastern Time"},{"value":"America/Panama","label":"Eastern Standard Time (No DST)"},{"value":"America/Sao_Paulo","label":"Brasília Time"},{"value":"America/Argentina/Buenos_Aires","label":"Argentina Time (No DST)"},{"value":"Europe/London","label":"UK Time"},{"value":"Europe/Berlin","label":"Central Europe Time"},{"value":"Europe/Athens","label":"Eastern Europe Time"},{"value":"Europe/Moscow","label":"Moscow Time"},{"value":"Africa/Lagos","label":"West Africa Time"},{"value":"Africa/Cairo","label":"Eastern Africa Time"},{"value":"Africa/Johannesburg","label":"South Africa Time"},{"value":"Asia/Dubai","label":"Gulf Standard Time"},{"value":"Asia/Karachi","label":"Pakistan Time"},{"value":"Asia/Kolkata","label":"India Time"},{"value":"Asia/Shanghai","label":"China Time"},{"value":"Asia/Tokyo","label":"Japan Time"},{"value":"Asia/Seoul","label":"Korea Time"},{"value":"Australia/Perth","label":"Western Australia Time"},{"value":"Australia/Adelaide","label":"Central Australia Time"},{"value":"Australia/Sydney","label":"Eastern Australia Time"},{"value":"Pacific/Auckland","label":"New Zealand Time"},{"value":"Pacific/Port_Moresby","label":"Papua New Guinea Time (No DST)"}],}
	            },
	            /** Address. */
	            'address': {
	                label: 'Address',
	                type: 'address',
	                options: undefined
	            },
	            /** Virtual. Is this a virtual location? */
	            'isVirtual': {
	                label: 'Virtual',
	                type: 'boolean',
	                hint: 'Is this a virtual location?',
	                options: undefined
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
	            /** . */
	            'dateUpdated': {
	                type: 'dateTime',
	                options: undefined
	            },
	            /** . */
	            'organizationId': {
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(locationSchema)

export default locationSchema

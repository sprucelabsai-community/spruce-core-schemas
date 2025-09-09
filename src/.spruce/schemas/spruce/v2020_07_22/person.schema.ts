import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../core.schemas.types'



const personSchema: SpruceSchemas.Spruce.v2020_07_22.PersonSchema  = {
	id: 'person',
	version: 'v2020_07_22',
	namespace: 'Spruce',
	name: 'Person',
	moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
	description: 'A human being.',
	    fields: {
	            /** Id. */
	            'id': {
	                label: 'Id',
	                type: 'id',
	                isRequired: true,
	                options: undefined
	            },
	            /** First name. */
	            'firstName': {
	                label: 'First name',
	                type: 'text',
	                isPrivate: true,
	                options: undefined
	            },
	            /** Last name. */
	            'lastName': {
	                label: 'Last name',
	                type: 'text',
	                isPrivate: true,
	                options: undefined
	            },
	            /** Casual name. The name you can use when talking to this person. */
	            'casualName': {
	                label: 'Casual name',
	                type: 'text',
	                isRequired: true,
	                hint: 'The name you can use when talking to this person.',
	                options: undefined
	            },
	            /** Timezone. */
	            'timezone': {
	                label: 'Timezone',
	                type: 'select',
	                options: {choices: [{"value":"UTC","label":"UTC"},{"value":"Pacific/Honolulu","label":"Hawaii Time"},{"value":"America/Anchorage","label":"Alaska Time"},{"value":"America/Los_Angeles","label":"Pacific Time"},{"value":"America/Denver","label":"Mountain Time"},{"value":"America/Phoenix","label":"Phoenix Time (No DST)"},{"value":"America/Chicago","label":"Central Time"},{"value":"America/Guatemala","label":"Central Standard Time (No DST)"},{"value":"America/New_York","label":"Eastern Time"},{"value":"America/Panama","label":"Eastern Standard Time (No DST)"},{"value":"America/Sao_Paulo","label":"Brasília Time"},{"value":"America/Argentina/Buenos_Aires","label":"Argentina Time (No DST)"},{"value":"Europe/London","label":"UK Time"},{"value":"Europe/Berlin","label":"Central Europe Time"},{"value":"Europe/Athens","label":"Eastern Europe Time"},{"value":"Europe/Moscow","label":"Moscow Time"},{"value":"Africa/Lagos","label":"West Africa Time"},{"value":"Africa/Cairo","label":"Eastern Africa Time"},{"value":"Africa/Johannesburg","label":"South Africa Time"},{"value":"Asia/Dubai","label":"Gulf Standard Time"},{"value":"Asia/Karachi","label":"Pakistan Time"},{"value":"Asia/Kolkata","label":"India Time"},{"value":"Asia/Shanghai","label":"China Time"},{"value":"Asia/Tokyo","label":"Japan Time"},{"value":"Asia/Seoul","label":"Korea Time"},{"value":"Australia/Perth","label":"Western Australia Time"},{"value":"Australia/Adelaide","label":"Central Australia Time"},{"value":"Australia/Sydney","label":"Eastern Australia Time"},{"value":"Pacific/Auckland","label":"New Zealand Time"},{"value":"Pacific/Port_Moresby","label":"Papua New Guinea Time (No DST)"}],}
	            },
	            /** Phone. A number that can be texted */
	            'phone': {
	                label: 'Phone',
	                type: 'phone',
	                isPrivate: true,
	                hint: 'A number that can be texted',
	                options: undefined
	            },
	            /** Username. An optional username if the person does not want to login using their phone */
	            'username': {
	                label: 'Username',
	                type: 'text',
	                isPrivate: true,
	                hint: 'An optional username if the person does not want to login using their phone',
	                options: undefined
	            },
	            /** Email. An optional email if the person does not want to login using their phone */
	            'email': {
	                label: 'Email',
	                type: 'email',
	                isPrivate: true,
	                hint: 'An optional email if the person does not want to login using their phone',
	                options: undefined
	            },
	            /** Avatar src. */
	            'avatar': {
	                label: 'Avatar src',
	                type: 'image',
	                options: {requiredSizes: ["*"],}
	            },
	            /** . */
	            'dateCreated': {
	                type: 'dateTime',
	                isRequired: true,
	                options: undefined
	            },
	            /** . */
	            'dateUpdated': {
	                type: 'dateTime',
	                options: undefined
	            },
	            /** . */
	            'dateScrambled': {
	                type: 'dateTime',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(personSchema)

export default personSchema

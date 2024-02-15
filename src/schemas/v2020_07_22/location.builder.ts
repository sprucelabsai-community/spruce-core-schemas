import { buildSchema } from '@sprucelabs/schema'
import { timezoneChoices } from '../../timezoneChoices'

export default buildSchema({
	id: 'location',
	name: 'Location',
	description:
		'A physical location where people meet. An organization has at least one of them.',
	fields: {
		id: {
			label: 'Id',
			type: 'id',
			isRequired: true
		},
		name: {
			label: 'Name',
			type: 'text',
			isRequired: true,
		},
		num: {
			label: 'Location number',
			type: 'text',
			hint: 'You can use other symbols, like # or dashes. #123 or 32-US-5',
		},
		slug: {
			label: 'Slug',
			type: 'text',
			isRequired: true,
		},
		isPublic: {
			label: 'Public',
			type: 'boolean',
			hint: 'Is this location viewable by guests?',
			defaultValue: false,
		},
		phone: {
			label: 'Main Phone',
			type: 'phone',
		},
		timezone: {
			label: 'Timezone',
			type: 'select',
			options: {
				choices: timezoneChoices as any,
			},
		},
		address: {
			label: 'Address',
			type: 'address',
			isRequired: true,
		},
		dateCreated: {
			type: 'dateTime',
			isRequired: true,
		},
		dateDeleted: {
			type: 'dateTime',
		},
		organizationId: {
			type: 'id',
			isRequired: true,
		},
	},
})

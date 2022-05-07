import { buildSchema } from '@sprucelabs/schema'

export default buildSchema({
	id: 'person',
	name: 'Person',
	description: 'A human being.',
	fields: {
		id: {
			label: 'Id',
			type: 'id',
			isRequired: true,
		},
		firstName: {
			label: 'First name',
			type: 'text',
			isPrivate: true,
		},
		lastName: {
			label: 'Last name',
			type: 'text',
			isPrivate: true,
		},
		casualName: {
			label: 'Casual name',
			type: 'text',
			hint: 'The name you can use when talking to this person.',
			isRequired: true,
		},
		phone: {
			label: 'Phone',
			type: 'phone',
			hint: 'A number that can be texted',
			isPrivate: true,
		},
		avatar: {
			label: 'Avatar src',
			type: 'image',
			options: {
				requiredSizes: ['*'],
			},
		},
		dateCreated: {
			type: 'dateTime',
			isRequired: true,
		},
		dateScrambled: {
			type: 'dateTime',
		},
	},
})

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
		roleIds: {
			label: 'Name',
			type: 'id',
			isRequired: true,
			isArray: true,
		},
		organizationId: {
			label: 'Organization',
			type: 'id',
			isRequired: true,
		},
		personId: {
			label: 'Person',
			type: 'id',
			isRequired: true,
		},
		dateCreated: {
			type: 'number',
			isRequired: true,
		},
		dateDeleted: {
			type: 'number',
		},
	},
})

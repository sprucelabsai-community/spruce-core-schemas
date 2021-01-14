import { buildSchema, dropFields } from '@sprucelabs/schema'
import messageBuilder from './message.builder'

export default buildSchema({
	id: 'createMessage',
	fields: {
		...dropFields(messageBuilder.fields, ['id', 'dateCreated']),
	},
})

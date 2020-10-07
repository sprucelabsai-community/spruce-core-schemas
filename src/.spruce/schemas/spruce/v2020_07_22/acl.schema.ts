
import { SpruceSchemas } from '../../core.schemas.types'



const aclSchema: SpruceSchemas.Spruce.v2020_07_22.IAclSchema  = {
	id: 'acl',
	version: 'v2020_07_22',
	namespace: 'Spruce',
	name: 'Access control list',
	dynamicFieldSignature: { 
	    label: 'Permissions grouped by slug',
	    type: 'text',
	    keyName: 'slug',
	    isArray: true,
	    options: undefined
	}}



export default aclSchema

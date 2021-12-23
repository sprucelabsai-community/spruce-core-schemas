/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-redeclare */

import { default as SchemaEntity } from '@sprucelabs/schema'
import * as SpruceSchema from '@sprucelabs/schema'





export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	
	export interface SkillCreator {
		
			
			'skillId'?: string| undefined | null
			
			'personId'?: string| undefined | null
	}

	export interface SkillCreatorSchema extends SpruceSchema.Schema {
		id: 'skillCreator',
		version: 'v2020_07_22',
		namespace: 'Spruce',
		name: 'Skill creator',
		moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
		    fields: {
		            /** . */
		            'skillId': {
		                type: 'text',
		                options: undefined
		            },
		            /** . */
		            'personId': {
		                type: 'text',
		                options: undefined
		            },
		    }
	}

	export type SkillCreatorEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.SkillCreatorSchema>

}



export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	/** An ability Sprucebot has learned. */
	export interface Skill {
		
			/** Id. */
			'id': string
			/** Id. */
			'apiKey': string
			/** Name. */
			'name': string
			/** Description. */
			'description'?: string| undefined | null
			/** Namespace. */
			'slug': string
			/** Creators. The people or skills who created and own this skill. */
			'creators': SpruceSchemas.Spruce.v2020_07_22.SkillCreator[]
			
			'dateCreated': number
			
			'dateDeleted'?: number| undefined | null
	}

	export interface SkillSchema extends SpruceSchema.Schema {
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
		            /** Creators. The people or skills who created and own this skill. */
		            'creators': {
		                label: 'Creators',
		                type: 'schema',
		                isPrivate: true,
		                isRequired: true,
		                hint: 'The people or skills who created and own this skill.',
		                isArray: true,
		                options: {schema: SpruceSchemas.Spruce.v2020_07_22.SkillCreatorSchema,}
		            },
		            /** . */
		            'dateCreated': {
		                type: 'number',
		                isRequired: true,
		                options: undefined
		            },
		            /** . */
		            'dateDeleted': {
		                type: 'number',
		                options: undefined
		            },
		    }
	}

	export type SkillEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.SkillSchema>

}



export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	
	export interface SendMessage {
		
			
			'dateSent'?: number| undefined | null
			
			'target': SpruceSchemas.Spruce.v2020_07_22.MessageTarget
			
			'errors'?: string[]| undefined | null
			
			'classification': ("auth" | "transactional" | "promotional" | "incoming")
			
			'status'?: ("pending" | "processing" | "sent" | "failed" | "ignored")| undefined | null
			
			'body': string
			
			'context'?: (Record<string, any>)| undefined | null
			
			'topicId'?: string| undefined | null
			
			'links'?: string[]| undefined | null
			
			'choices'?: SpruceSchemas.Spruce.v2020_07_22.FullMessageChoices[]| undefined | null
	}

	export interface SendMessageSchema extends SpruceSchema.Schema {
		id: 'sendMessage',
		version: 'v2020_07_22',
		namespace: 'Spruce',
		name: '',
		moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
		    fields: {
		            /** . */
		            'dateSent': {
		                type: 'number',
		                options: undefined
		            },
		            /** . */
		            'target': {
		                type: 'schema',
		                isRequired: true,
		                options: {schema: SpruceSchemas.Spruce.v2020_07_22.MessageTargetSchema,}
		            },
		            /** . */
		            'errors': {
		                type: 'text',
		                isPrivate: true,
		                isArray: true,
		                options: undefined
		            },
		            /** . */
		            'classification': {
		                type: 'select',
		                isRequired: true,
		                options: {choices: [{"value":"auth","label":"Auth"},{"value":"transactional","label":"transactional"},{"value":"promotional","label":"Promotional"},{"value":"incoming","label":"incoming"}],}
		            },
		            /** . */
		            'status': {
		                type: 'select',
		                isPrivate: true,
		                defaultValue: "pending",
		                options: {choices: [{"value":"pending","label":"Pending"},{"value":"processing","label":"Processing"},{"value":"sent","label":"Sent"},{"value":"failed","label":"Failed"},{"value":"ignored","label":"Ignored"}],}
		            },
		            /** . */
		            'body': {
		                type: 'text',
		                isRequired: true,
		                options: undefined
		            },
		            /** . */
		            'context': {
		                type: 'raw',
		                isPrivate: true,
		                options: {valueType: `Record<string, any>`,}
		            },
		            /** . */
		            'topicId': {
		                type: 'id',
		                options: undefined
		            },
		            /** . */
		            'links': {
		                type: 'text',
		                isArray: true,
		                options: undefined
		            },
		            /** . */
		            'choices': {
		                type: 'schema',
		                isArray: true,
		                options: {schema: SpruceSchemas.Spruce.v2020_07_22.FullMessageChoicesSchema,}
		            },
		    }
	}

	export type SendMessageEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.SendMessageSchema>

}



export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	/** Every role in Spruce inherits from 5 bases. Anon, Logged in (person not associated with any org), Org Owner, Group Manager, Manager, Teammate, and Guest. */
	export interface Role {
		
			/** Id. */
			'id': string
			/** Name. */
			'name': string
			/** Base. Used to determine the default permissions when this role is created and the fallback for when a permission is not set on this role. */
			'base'?: ("owner" | "groupManager" | "manager" | "teammate" | "guest" | "anonymous" | "loggedIn")| undefined | null
			/** Description. */
			'description'?: string| undefined | null
			
			'dateCreated': number
			
			'dateDeleted'?: number| undefined | null
			
			'organizationId'?: string| undefined | null
			/** Public. Should I let people that are not part of this organization this role? */
			'isPublic'?: boolean| undefined | null
	}

	export interface RoleSchema extends SpruceSchema.Schema {
		id: 'role',
		version: 'v2020_07_22',
		namespace: 'Spruce',
		name: 'Role',
		moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
		description: 'Every role in Spruce inherits from 5 bases. Anon, Logged in (person not associated with any org), Org Owner, Group Manager, Manager, Teammate, and Guest.',
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
		            /** Base. Used to determine the default permissions when this role is created and the fallback for when a permission is not set on this role. */
		            'base': {
		                label: 'Base',
		                type: 'select',
		                hint: 'Used to determine the default permissions when this role is created and the fallback for when a permission is not set on this role.',
		                options: {choices: [{"label":"Owner","value":"owner"},{"label":"Group manager","value":"groupManager"},{"label":"Manager","value":"manager"},{"label":"Teammate","value":"teammate"},{"label":"Guest","value":"guest"},{"label":"Anonymous","value":"anonymous"},{"label":"Logged in","value":"loggedIn"}],}
		            },
		            /** Description. */
		            'description': {
		                label: 'Description',
		                type: 'text',
		                options: undefined
		            },
		            /** . */
		            'dateCreated': {
		                type: 'number',
		                isRequired: true,
		                options: undefined
		            },
		            /** . */
		            'dateDeleted': {
		                type: 'number',
		                options: undefined
		            },
		            /** . */
		            'organizationId': {
		                type: 'id',
		                options: undefined
		            },
		            /** Public. Should I let people that are not part of this organization this role? */
		            'isPublic': {
		                label: 'Public',
		                type: 'boolean',
		                hint: 'Should I let people that are not part of this organization this role?',
		                options: undefined
		            },
		    }
	}

	export type RoleEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.RoleSchema>

}



export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	
	export interface PersonOrganization {
		
			/** Id. */
			'id': string
			/** Organization id. */
			'organizationId': string
			/** Person id. */
			'personId': string
			/** Date created. */
			'dateCreated': number
			/** Date deleted. */
			'dateDeleted'?: number| undefined | null
	}

	export interface PersonOrganizationSchema extends SpruceSchema.Schema {
		id: 'personOrganization',
		version: 'v2020_07_22',
		namespace: 'Spruce',
		name: 'Person <-> organization relationship',
		moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
		    fields: {
		            /** Id. */
		            'id': {
		                label: 'Id',
		                type: 'id',
		                isRequired: true,
		                options: undefined
		            },
		            /** Organization id. */
		            'organizationId': {
		                label: 'Organization id',
		                type: 'id',
		                isRequired: true,
		                options: undefined
		            },
		            /** Person id. */
		            'personId': {
		                label: 'Person id',
		                type: 'id',
		                isRequired: true,
		                options: undefined
		            },
		            /** Date created. */
		            'dateCreated': {
		                label: 'Date created',
		                type: 'number',
		                isRequired: true,
		                options: undefined
		            },
		            /** Date deleted. */
		            'dateDeleted': {
		                label: 'Date deleted',
		                type: 'number',
		                options: undefined
		            },
		    }
	}

	export type PersonOrganizationEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.PersonOrganizationSchema>

}



export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	
	export interface PersonLocation {
		
			/** Id. */
			'id': string
			/** Location id. */
			'locationId': string
			/** Person id. */
			'personId': string
			/** Date created. */
			'dateCreated': number
			/** Date deleted. */
			'dateDeleted'?: number| undefined | null
	}

	export interface PersonLocationSchema extends SpruceSchema.Schema {
		id: 'personLocation',
		version: 'v2020_07_22',
		namespace: 'Spruce',
		name: 'Person <-> location relationship',
		moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
		    fields: {
		            /** Id. */
		            'id': {
		                label: 'Id',
		                type: 'id',
		                isRequired: true,
		                options: undefined
		            },
		            /** Location id. */
		            'locationId': {
		                label: 'Location id',
		                type: 'id',
		                isRequired: true,
		                options: undefined
		            },
		            /** Person id. */
		            'personId': {
		                label: 'Person id',
		                type: 'id',
		                isRequired: true,
		                options: undefined
		            },
		            /** Date created. */
		            'dateCreated': {
		                label: 'Date created',
		                type: 'number',
		                isRequired: true,
		                options: undefined
		            },
		            /** Date deleted. */
		            'dateDeleted': {
		                label: 'Date deleted',
		                type: 'number',
		                options: undefined
		            },
		    }
	}

	export type PersonLocationEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.PersonLocationSchema>

}



export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	/** Various sizes that a profile image comes in. */
	export interface ProfileImage {
		
			/** 60x60. */
			'profile60': string
			/** 150x150. */
			'profile150': string
			/** 60x60. */
			'profile60@2x': string
			/** 150x150. */
			'profile150@2x': string
	}

	export interface ProfileImageSchema extends SpruceSchema.Schema {
		id: 'profileImage',
		version: 'v2020_07_22',
		namespace: 'Spruce',
		name: 'Profile Image Sizes',
		moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
		description: 'Various sizes that a profile image comes in.',
		    fields: {
		            /** 60x60. */
		            'profile60': {
		                label: '60x60',
		                type: 'text',
		                isRequired: true,
		                options: undefined
		            },
		            /** 150x150. */
		            'profile150': {
		                label: '150x150',
		                type: 'text',
		                isRequired: true,
		                options: undefined
		            },
		            /** 60x60. */
		            'profile60@2x': {
		                label: '60x60',
		                type: 'text',
		                isRequired: true,
		                options: undefined
		            },
		            /** 150x150. */
		            'profile150@2x': {
		                label: '150x150',
		                type: 'text',
		                isRequired: true,
		                options: undefined
		            },
		    }
	}

	export type ProfileImageEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.ProfileImageSchema>

}



export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	/** A human being. */
	export interface Person {
		
			/** Id. */
			'id': string
			/** First name. */
			'firstName'?: string| undefined | null
			/** Last name. */
			'lastName'?: string| undefined | null
			/** Casual name. The name you can use when talking to this person. */
			'casualName': string
			/** Phone. A number that can be texted */
			'phone'?: string| undefined | null
			/** Profile photos. */
			'profileImages'?: SpruceSchemas.Spruce.v2020_07_22.ProfileImage| undefined | null
			
			'dateCreated': number
			
			'dateScrambled'?: number| undefined | null
	}

	export interface PersonSchema extends SpruceSchema.Schema {
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
		            /** Phone. A number that can be texted */
		            'phone': {
		                label: 'Phone',
		                type: 'phone',
		                isPrivate: true,
		                hint: 'A number that can be texted',
		                options: undefined
		            },
		            /** Profile photos. */
		            'profileImages': {
		                label: 'Profile photos',
		                type: 'schema',
		                options: {schema: SpruceSchemas.Spruce.v2020_07_22.ProfileImageSchema,}
		            },
		            /** . */
		            'dateCreated': {
		                type: 'number',
		                isRequired: true,
		                options: undefined
		            },
		            /** . */
		            'dateScrambled': {
		                type: 'number',
		                options: undefined
		            },
		    }
	}

	export type PersonEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.PersonSchema>

}



export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	/** A company or team. Comprises of many people and locations. */
	export interface Organization {
		
			/** Id. */
			'id': string
			/** Name. */
			'name': string
			/** Address. */
			'address'?: SpruceSchema.AddressFieldValue| undefined | null
			/** Slug. */
			'slug': string
			
			'dateCreated': number
			
			'dateDeleted'?: number| undefined | null
	}

	export interface OrganizationSchema extends SpruceSchema.Schema {
		id: 'organization',
		version: 'v2020_07_22',
		namespace: 'Spruce',
		name: 'Organization',
		moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
		description: 'A company or team. Comprises of many people and locations.',
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
		            /** Address. */
		            'address': {
		                label: 'Address',
		                type: 'address',
		                options: undefined
		            },
		            /** Slug. */
		            'slug': {
		                label: 'Slug',
		                type: 'text',
		                isRequired: true,
		                options: undefined
		            },
		            /** . */
		            'dateCreated': {
		                type: 'number',
		                isRequired: true,
		                options: undefined
		            },
		            /** . */
		            'dateDeleted': {
		                type: 'number',
		                options: undefined
		            },
		    }
	}

	export type OrganizationEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.OrganizationSchema>

}



export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	
	export interface FullMessageChoices {
		
			
			'value': string
			
			'label': string
	}

	export interface FullMessageChoicesSchema extends SpruceSchema.Schema {
		id: 'fullMessageChoices',
		version: 'v2020_07_22',
		namespace: 'Spruce',
		name: '',
		moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
		    fields: {
		            /** . */
		            'value': {
		                type: 'text',
		                isRequired: true,
		                options: undefined
		            },
		            /** . */
		            'label': {
		                type: 'text',
		                isRequired: true,
		                options: undefined
		            },
		    }
	}

	export type FullMessageChoicesEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.FullMessageChoicesSchema>

}



export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	
	export interface MessageSource {
		
			
			'locationId'?: string| undefined | null
			
			'personId'?: string| undefined | null
			
			'organizationId'?: string| undefined | null
			
			'skillId'?: string| undefined | null
			
			'roleId'?: string| undefined | null
			
			'isCore'?: boolean| undefined | null
	}

	export interface MessageSourceSchema extends SpruceSchema.Schema {
		id: 'messageSource',
		version: 'v2020_07_22',
		namespace: 'Spruce',
		name: '',
		moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
		    fields: {
		            /** . */
		            'locationId': {
		                type: 'id',
		                options: undefined
		            },
		            /** . */
		            'personId': {
		                type: 'id',
		                options: undefined
		            },
		            /** . */
		            'organizationId': {
		                type: 'id',
		                options: undefined
		            },
		            /** . */
		            'skillId': {
		                type: 'id',
		                options: undefined
		            },
		            /** . */
		            'roleId': {
		                type: 'id',
		                options: undefined
		            },
		            /** . */
		            'isCore': {
		                type: 'boolean',
		                options: undefined
		            },
		    }
	}

	export type MessageSourceEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.MessageSourceSchema>

}



export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	
	export interface MessageTarget {
		
			
			'locationId'?: string| undefined | null
			
			'personId'?: string| undefined | null
			
			'organizationId'?: string| undefined | null
			
			'skillId'?: string| undefined | null
			
			'roleId'?: string| undefined | null
			
			'phone'?: string| undefined | null
	}

	export interface MessageTargetSchema extends SpruceSchema.Schema {
		id: 'messageTarget',
		version: 'v2020_07_22',
		namespace: 'Spruce',
		name: '',
		moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
		    fields: {
		            /** . */
		            'locationId': {
		                type: 'id',
		                options: undefined
		            },
		            /** . */
		            'personId': {
		                type: 'id',
		                options: undefined
		            },
		            /** . */
		            'organizationId': {
		                type: 'id',
		                options: undefined
		            },
		            /** . */
		            'skillId': {
		                type: 'id',
		                options: undefined
		            },
		            /** . */
		            'roleId': {
		                type: 'id',
		                options: undefined
		            },
		            /** . */
		            'phone': {
		                type: 'phone',
		                options: undefined
		            },
		    }
	}

	export type MessageTargetEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.MessageTargetSchema>

}



export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	/** A discrete communication between two humans or a human and a machine. */
	export interface Message {
		
			
			'id': string
			
			'dateCreated': number
			
			'dateSent'?: number| undefined | null
			
			'target': SpruceSchemas.Spruce.v2020_07_22.MessageTarget
			
			'source': SpruceSchemas.Spruce.v2020_07_22.MessageSource
			
			'errors'?: string[]| undefined | null
			
			'classification': ("auth" | "transactional" | "promotional" | "incoming")
			
			'status'?: ("pending" | "processing" | "sent" | "failed" | "ignored")| undefined | null
			
			'body': string
			
			'context'?: (Record<string, any>)| undefined | null
			
			'topicId'?: string| undefined | null
			
			'links'?: string[]| undefined | null
			
			'choices'?: SpruceSchemas.Spruce.v2020_07_22.FullMessageChoices[]| undefined | null
	}

	export interface MessageSchema extends SpruceSchema.Schema {
		id: 'message',
		version: 'v2020_07_22',
		namespace: 'Spruce',
		name: '',
		moduleToImportFromWhenRemote: '@sprucelabs/spruce-core-schemas',
		description: 'A discrete communication between two humans or a human and a machine.',
		    fields: {
		            /** . */
		            'id': {
		                type: 'id',
		                isRequired: true,
		                options: undefined
		            },
		            /** . */
		            'dateCreated': {
		                type: 'number',
		                isRequired: true,
		                options: undefined
		            },
		            /** . */
		            'dateSent': {
		                type: 'number',
		                options: undefined
		            },
		            /** . */
		            'target': {
		                type: 'schema',
		                isRequired: true,
		                options: {schema: SpruceSchemas.Spruce.v2020_07_22.MessageTargetSchema,}
		            },
		            /** . */
		            'source': {
		                type: 'schema',
		                isRequired: true,
		                options: {schema: SpruceSchemas.Spruce.v2020_07_22.MessageSourceSchema,}
		            },
		            /** . */
		            'errors': {
		                type: 'text',
		                isPrivate: true,
		                isArray: true,
		                options: undefined
		            },
		            /** . */
		            'classification': {
		                type: 'select',
		                isRequired: true,
		                options: {choices: [{"value":"auth","label":"Auth"},{"value":"transactional","label":"transactional"},{"value":"promotional","label":"Promotional"},{"value":"incoming","label":"incoming"}],}
		            },
		            /** . */
		            'status': {
		                type: 'select',
		                isPrivate: true,
		                defaultValue: "pending",
		                options: {choices: [{"value":"pending","label":"Pending"},{"value":"processing","label":"Processing"},{"value":"sent","label":"Sent"},{"value":"failed","label":"Failed"},{"value":"ignored","label":"Ignored"}],}
		            },
		            /** . */
		            'body': {
		                type: 'text',
		                isRequired: true,
		                options: undefined
		            },
		            /** . */
		            'context': {
		                type: 'raw',
		                isPrivate: true,
		                options: {valueType: `Record<string, any>`,}
		            },
		            /** . */
		            'topicId': {
		                type: 'id',
		                options: undefined
		            },
		            /** . */
		            'links': {
		                type: 'text',
		                isArray: true,
		                options: undefined
		            },
		            /** . */
		            'choices': {
		                type: 'schema',
		                isArray: true,
		                options: {schema: SpruceSchemas.Spruce.v2020_07_22.FullMessageChoicesSchema,}
		            },
		    }
	}

	export type MessageEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.MessageSchema>

}



export declare namespace SpruceSchemas.Spruce.v2020_07_22 {

	/** A physical location where people meet. An organization has at least one of them. */
	export interface Location {
		
			/** Id. */
			'id': string
			/** Name. */
			'name': string
			/** Store number. You can use other symbols, like # or dashes. #123 or 32-US-5 */
			'num'?: string| undefined | null
			/** Slug. */
			'slug': string
			/** Public. Is this location viewable by guests? */
			'isPublic'?: boolean| undefined | null
			/** Main Phone. */
			'phone'?: string| undefined | null
			/** Timezone. */
			'timezone'?: ("etc/gmt+12" | "pacific/midway" | "pacific/honolulu" | "us/alaska" | "america/los_Angeles" | "america/tijuana" | "us/arizona" | "america/chihuahua" | "us/mountain" | "america/managua" | "us/central" | "america/mexico_City" | "Canada/Saskatchewan" | "america/bogota" | "us/eastern" | "us/east-indiana" | "Canada/atlantic" | "america/caracas" | "america/manaus" | "america/Santiago" | "Canada/Newfoundland" | "america/Sao_Paulo" | "america/argentina/buenos_Aires" | "america/godthab" | "america/montevideo" | "america/Noronha" | "atlantic/cape_Verde" | "atlantic/azores" | "africa/casablanca" | "etc/gmt" | "europe/amsterdam" | "europe/belgrade" | "europe/brussels" | "europe/Sarajevo" | "africa/lagos" | "asia/amman" | "europe/athens" | "asia/beirut" | "africa/cairo" | "africa/Harare" | "europe/Helsinki" | "asia/Jerusalem" | "europe/minsk" | "africa/Windhoek" | "asia/Kuwait" | "europe/moscow" | "africa/Nairobi" | "asia/tbilisi" | "asia/tehran" | "asia/muscat" | "asia/baku" | "asia/Yerevan" | "asia/Kabul" | "asia/Yekaterinburg" | "asia/Karachi" | "asia/calcutta" | "asia/calcutta" | "asia/Katmandu" | "asia/almaty" | "asia/Dhaka" | "asia/Rangoon" | "asia/bangkok" | "asia/Krasnoyarsk" | "asia/Hong_Kong" | "asia/Kuala_Lumpur" | "asia/Irkutsk" | "Australia/Perth" | "asia/taipei" | "asia/tokyo" | "asia/Seoul" | "asia/Yakutsk" | "Australia/adelaide" | "Australia/Darwin" | "Australia/brisbane" | "Australia/canberra" | "Australia/Hobart" | "pacific/guam" | "asia/Vladivostok" | "asia/magadan" | "pacific/auckland" | "pacific/Fiji" | "pacific/tongatapu")| undefined | null
			/** Address. */
			'address': SpruceSchema.AddressFieldValue
			
			'dateCreated': number
			
			'dateDeleted'?: number| undefined | null
			
			'organizationId': string
	}

	export interface LocationSchema extends SpruceSchema.Schema {
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
		            /** Store number. You can use other symbols, like # or dashes. #123 or 32-US-5 */
		            'num': {
		                label: 'Store number',
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
		                options: {choices: [{"value":"etc/gmt+12","label":"International Date Line West"},{"value":"pacific/midway","label":"Midway Island, Samoa"},{"value":"pacific/honolulu","label":"Hawaii"},{"value":"us/alaska","label":"Alaska"},{"value":"america/los_Angeles","label":"Pacific Time (US & Canada)"},{"value":"america/tijuana","label":"Tijuana, Baja California"},{"value":"us/arizona","label":"Arizona"},{"value":"america/chihuahua","label":"Chihuahua, La Paz, Mazatlan"},{"value":"us/mountain","label":"Mountain Time (US & Canada)"},{"value":"america/managua","label":"Central America"},{"value":"us/central","label":"Central Time (US & Canada)"},{"value":"america/mexico_City","label":"Guadalajara, Mexico City, Monterrey"},{"value":"Canada/Saskatchewan","label":"Saskatchewan"},{"value":"america/bogota","label":"Bogota, Lima, Quito, Rio Branco"},{"value":"us/eastern","label":"Eastern Time (US & Canada)"},{"value":"us/east-indiana","label":"Indiana (East)"},{"value":"Canada/atlantic","label":"Atlantic Time (Canada)"},{"value":"america/caracas","label":"Caracas, La Paz"},{"value":"america/manaus","label":"Manaus"},{"value":"america/Santiago","label":"Santiago"},{"value":"Canada/Newfoundland","label":"Newfoundland"},{"value":"america/Sao_Paulo","label":"Brasilia"},{"value":"america/argentina/buenos_Aires","label":"Buenos Aires, Georgetown"},{"value":"america/godthab","label":"Greenland"},{"value":"america/montevideo","label":"Montevideo"},{"value":"america/Noronha","label":"Mid-Atlantic"},{"value":"atlantic/cape_Verde","label":"Cape Verde Is."},{"value":"atlantic/azores","label":"Azores"},{"value":"africa/casablanca","label":"Casablanca, Monrovia, Reykjavik"},{"value":"etc/gmt","label":"Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London"},{"value":"europe/amsterdam","label":"Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"},{"value":"europe/belgrade","label":"Belgrade, Bratislava, Budapest, Ljubljana, Prague"},{"value":"europe/brussels","label":"Brussels, Copenhagen, Madrid, Paris"},{"value":"europe/Sarajevo","label":"Sarajevo, Skopje, Warsaw, Zagreb"},{"value":"africa/lagos","label":"West Central Africa"},{"value":"asia/amman","label":"Amman"},{"value":"europe/athens","label":"Athens, Bucharest, Istanbul"},{"value":"asia/beirut","label":"Beirut"},{"value":"africa/cairo","label":"Cairo"},{"value":"africa/Harare","label":"Harare, Pretoria"},{"value":"europe/Helsinki","label":"Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius"},{"value":"asia/Jerusalem","label":"Jerusalem"},{"value":"europe/minsk","label":"Minsk"},{"value":"africa/Windhoek","label":"Windhoek"},{"value":"asia/Kuwait","label":"Kuwait, Riyadh, Baghdad"},{"value":"europe/moscow","label":"Moscow, St. Petersburg, Volgograd"},{"value":"africa/Nairobi","label":"Nairobi"},{"value":"asia/tbilisi","label":"Tbilisi"},{"value":"asia/tehran","label":"Tehran"},{"value":"asia/muscat","label":"Abu Dhabi, Muscat"},{"value":"asia/baku","label":"Baku"},{"value":"asia/Yerevan","label":"Yerevan"},{"value":"asia/Kabul","label":"Kabul"},{"value":"asia/Yekaterinburg","label":"Yekaterinburg"},{"value":"asia/Karachi","label":"Islamabad, Karachi, Tashkent"},{"value":"asia/calcutta","label":"Chennai, Kolkata, Mumbai, New Delhi"},{"value":"asia/calcutta","label":"Sri Jayawardenapura"},{"value":"asia/Katmandu","label":"Kathmandu"},{"value":"asia/almaty","label":"Almaty, Novosibirsk"},{"value":"asia/Dhaka","label":"Astana, Dhaka"},{"value":"asia/Rangoon","label":"Yangon (Rangoon)"},{"value":"asia/bangkok","label":"Bangkok, Hanoi, Jakarta"},{"value":"asia/Krasnoyarsk","label":"Krasnoyarsk"},{"value":"asia/Hong_Kong","label":"Beijing, Chongqing, Hong Kong, Urumqi"},{"value":"asia/Kuala_Lumpur","label":"Kuala Lumpur, Singapore"},{"value":"asia/Irkutsk","label":"Irkutsk, Ulaan Bataar"},{"value":"Australia/Perth","label":"Perth"},{"value":"asia/taipei","label":"Taipei"},{"value":"asia/tokyo","label":"Osaka, Sapporo, Tokyo"},{"value":"asia/Seoul","label":"Seoul"},{"value":"asia/Yakutsk","label":"Yakutsk"},{"value":"Australia/adelaide","label":"Adelaide"},{"value":"Australia/Darwin","label":"Darwin"},{"value":"Australia/brisbane","label":"Brisbane"},{"value":"Australia/canberra","label":"Canberra, Melbourne, Sydney"},{"value":"Australia/Hobart","label":"Hobart"},{"value":"pacific/guam","label":"Guam, Port Moresby"},{"value":"asia/Vladivostok","label":"Vladivostok"},{"value":"asia/magadan","label":"Magadan, Solomon Is., New Caledonia"},{"value":"pacific/auckland","label":"Auckland, Wellington"},{"value":"pacific/Fiji","label":"Fiji, Kamchatka, Marshall Is."},{"value":"pacific/tongatapu","label":"Nuku'alofa"}],}
		            },
		            /** Address. */
		            'address': {
		                label: 'Address',
		                type: 'address',
		                isRequired: true,
		                options: undefined
		            },
		            /** . */
		            'dateCreated': {
		                type: 'number',
		                isRequired: true,
		                options: undefined
		            },
		            /** . */
		            'dateDeleted': {
		                type: 'number',
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

	export type LocationEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.LocationSchema>

}





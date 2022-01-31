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
			
			'dateCreated': SpruceSchema.DateTimeFieldValue
			
			'dateDeleted'?: SpruceSchema.DateTimeFieldValue| undefined | null
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
			'dateCreated': SpruceSchema.DateTimeFieldValue
			/** Date deleted. */
			'dateDeleted'?: SpruceSchema.DateTimeFieldValue| undefined | null
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
		                type: 'dateTime',
		                isRequired: true,
		                options: undefined
		            },
		            /** Date deleted. */
		            'dateDeleted': {
		                label: 'Date deleted',
		                type: 'dateTime',
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
			'dateCreated': SpruceSchema.DateTimeFieldValue
			/** Date deleted. */
			'dateDeleted'?: SpruceSchema.DateTimeFieldValue| undefined | null
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
		                type: 'dateTime',
		                isRequired: true,
		                options: undefined
		            },
		            /** Date deleted. */
		            'dateDeleted': {
		                label: 'Date deleted',
		                type: 'dateTime',
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
			
			'dateCreated': SpruceSchema.DateTimeFieldValue
			
			'dateScrambled'?: SpruceSchema.DateTimeFieldValue| undefined | null
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
		                type: 'dateTime',
		                isRequired: true,
		                options: undefined
		            },
		            /** . */
		            'dateScrambled': {
		                type: 'dateTime',
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
			/** Public. Is this organization viewable by guests? */
			'isPublic'?: boolean| undefined | null
			
			'dateCreated': SpruceSchema.DateTimeFieldValue
			
			'dateDeleted'?: SpruceSchema.DateTimeFieldValue| undefined | null
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
		            /** Public. Is this organization viewable by guests? */
		            'isPublic': {
		                label: 'Public',
		                type: 'boolean',
		                hint: 'Is this organization viewable by guests?',
		                defaultValue: false,
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
			'timezone'?: ("-12" | "-11" | "-10" | "9:50" | "9" | "8" | "7" | "6" | "5" | "4:50" | "4" | "3:50" | "3" | "2" | "1" | "0" | "1" | "2" | "3" | "3:50" | "4" | "4:50" | "5" | "5:50" | "5:75" | "6" | "6:50" | "7" | "8" | "8:75" | "9" | "9:50" | "+10" | "+10:50" | "+11" | "+11:50" | "+12" | "+12:75" | "+13" | "+14")| undefined | null
			/** Address. */
			'address': SpruceSchema.AddressFieldValue
			
			'dateCreated': SpruceSchema.DateTimeFieldValue
			
			'dateDeleted'?: SpruceSchema.DateTimeFieldValue| undefined | null
			
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
		                options: {choices: [{"label":"(GMT -12) Eniwetok, Kwajalein","value":"-12"},{"label":"(GMT -11) Midway Island, Samoa","value":"-11"},{"label":"(GMT -10) Hawaii","value":"-10"},{"label":"(GMT -9:30) Taiohae","value":"9:50"},{"label":"(GMT -9) Alaska","value":"9"},{"label":"(GMT -8) Pacific Time (US &amp; Canada)","value":"8"},{"label":"(GMT -7) Mountain Time (US &amp; Canada)","value":"7"},{"label":"(GMT -6) Central Time (US &amp; Canada), Mexico City","value":"6"},{"label":"(GMT -5) Eastern Time (US &amp; Canada), Bogota, Lima","value":"5"},{"label":"(GMT -4:30) Caracas","value":"4:50"},{"label":"(GMT -4) Atlantic Time (Canada), Caracas, La Paz","value":"4"},{"label":"(GMT -3:30) Newfoundland","value":"3:50"},{"label":"(GMT -3) Brazil, Buenos Aires, Georgetown","value":"3"},{"label":"(GMT -2) Mid-Atlantic","value":"2"},{"label":"(GMT -1) Azores, Cape Verde Islands","value":"1"},{"label":"(GMT) Western Europe Time, London, Lisbon, Casablanca","value":"0"},{"label":"(GMT +1) Brussels, Copenhagen, Madrid, Paris","value":"1"},{"label":"(GMT +2) Kaliningrad, South Africa","value":"2"},{"label":"(GMT +3) Baghdad, Riyadh, Moscow, St. Petersburg","value":"3"},{"label":"(GMT +3:30) Tehran","value":"3:50"},{"label":"(GMT +4) Abu Dhabi, Muscat, Baku, Tbilisi","value":"4"},{"label":"(GMT +4:30) Kabul","value":"4:50"},{"label":"(GMT +5) Ekaterinburg, Islamabad, Karachi, Tashkent","value":"5"},{"label":"(GMT +5:30) Bombay, Calcutta, Madras, New Delhi","value":"5:50"},{"label":"(GMT +5:45) Kathmandu, Pokhara","value":"5:75"},{"label":"(GMT +6) Almaty, Dhaka, Colombo","value":"6"},{"label":"(GMT +6:30) Yangon, Mandalay","value":"6:50"},{"label":"(GMT +7) Bangkok, Hanoi, Jakarta","value":"7"},{"label":"(GMT +8) Beijing, Perth, Singapore, Hong Kong","value":"8"},{"label":"(GMT +8:45) Eucla","value":"8:75"},{"label":"(GMT +9) Tokyo, Seoul, Osaka, Sapporo, Yakutsk","value":"9"},{"label":"(GMT +9:30) Adelaide, Darwin","value":"9:50"},{"label":"(GMT +10) Eastern Australia, Guam, Vladivostok","value":"+10"},{"label":"(GMT +10:30) Lord Howe Island","value":"+10:50"},{"label":"(GMT +11) Magadan, Solomon Islands, New Caledonia","value":"+11"},{"label":"(GMT +11:30) Norfolk Island","value":"+11:50"},{"label":"(GMT +12) Auckland, Wellington, Fiji, Kamchatka","value":"+12"},{"label":"(GMT +12:45) Chatham Islands","value":"+12:75"},{"label":"(GMT +13) Apia, Nukualofa","value":"+13"},{"label":"(GMT +14) Line Islands, Tokelau","value":"+14"}],}
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
		            'organizationId': {
		                type: 'id',
		                isRequired: true,
		                options: undefined
		            },
		    }
	}

	export type LocationEntity = SchemaEntity<SpruceSchemas.Spruce.v2020_07_22.LocationSchema>

}





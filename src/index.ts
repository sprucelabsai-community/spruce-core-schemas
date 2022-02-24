export * from '#spruce/schemas/core.schemas.types'
import fullMessageChoicesSchema from '#spruce/schemas/spruce/v2020_07_22/fullMessageChoices.schema'
import locationSchema from '#spruce/schemas/spruce/v2020_07_22/location.schema'
import messageSchema from '#spruce/schemas/spruce/v2020_07_22/message.schema'
import messageSourceSchema from '#spruce/schemas/spruce/v2020_07_22/messageSource.schema'
import messageTargetSchema from '#spruce/schemas/spruce/v2020_07_22/messageTarget.schema'
import organizationSchema from '#spruce/schemas/spruce/v2020_07_22/organization.schema'
import personSchema from '#spruce/schemas/spruce/v2020_07_22/person.schema'
import personLocationSchema from '#spruce/schemas/spruce/v2020_07_22/personLocation.schema'
import personOrganizationSchema from '#spruce/schemas/spruce/v2020_07_22/personOrganization.schema'
import profileImageSchema from '#spruce/schemas/spruce/v2020_07_22/profileImage.schema'
import roleSchema from '#spruce/schemas/spruce/v2020_07_22/role.schema'
import sendMessageSchema from '#spruce/schemas/spruce/v2020_07_22/sendMessage.schema'
import skillSchema from '#spruce/schemas/spruce/v2020_07_22/skill.schema'
import skillCreatorSchema from '#spruce/schemas/spruce/v2020_07_22/skillCreator.schema'

export const schemas = {
	fullMessageChoicesSchema,
	locationSchema,
	messageSchema,
	messageSourceSchema,
	messageTargetSchema,
	organizationSchema,
	personSchema,
	personLocationSchema,
	personOrganizationSchema,
	profileImageSchema,
	roleSchema,
	sendMessageSchema,
	skillSchema,
	skillCreatorSchema,
}

export * from './constants'

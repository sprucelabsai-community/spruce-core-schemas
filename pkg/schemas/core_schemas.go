package schemas

import SpruceSchema "github.com/sprucelabsai-community/spruce-schema/v32/pkg/fields"

// Skill creator
type SkillCreator struct {
	SkillId string `json:"skillId,omitempty"`
	PersonId string `json:"personId,omitempty"`
}

// Skill: An ability Sprucebot has learned.
type Skill struct {
	Id string `json:"id" validate:"required"`
	ApiKey string `json:"apiKey" validate:"required"`
	Name string `json:"name" validate:"required"`
	Description string `json:"description,omitempty"`
	Slug string `json:"slug" validate:"required"`
	// Does this skill show up in the marketplace and can other devs use it as a dependency?
	IsPublished bool `json:"isPublished,omitempty"`
	// Does this skill require needing to be installed anywhere.
	CanBeInstalled bool `json:"canBeInstalled,omitempty"`
	// The people or skills who created and own this skill.
	Creators *[]SkillCreator `json:"creators" validate:"required,min=1"`
	DateCreated SpruceSchema.DateTimeFieldValue `json:"dateCreated" validate:"required"`
	DateDeleted SpruceSchema.DateTimeFieldValue `json:"dateDeleted,omitempty"`
}

type SendMessage struct {
	// An arbitrary id that can be used to track this message when being sent and not yet assigned an Id.
	TrackingId string `json:"trackingId,omitempty"`
	// If this message is a reply to another message, this is the id of that original message.
	InReplyToMessageId string `json:"inReplyToMessageId,omitempty"`
	DateSent float64 `json:"dateSent,omitempty"`
	Target *MessageTarget `json:"target" validate:"required"`
	Errors []string `json:"errors,omitempty"`
	Classification string `json:"classification" validate:"required"`
	Status string `json:"status,omitempty"`
	Subject string `json:"subject,omitempty"`
	Body string `json:"body" validate:"required"`
	Context map[string]interface{} `json:"context,omitempty"`
	TopicId string `json:"topicId,omitempty"`
	Links *[]Link `json:"links,omitempty" validate:"min=0"`
	Choices *[]Choice `json:"choices,omitempty"`
}

// Role: Every role in Spruce inherits from 5 bases. Anon, Logged in (person not associated with any org), Org Owner, Group Manager, Manager, Teammate, and Guest.
type Role struct {
	Id string `json:"id" validate:"required"`
	Name string `json:"name" validate:"required"`
	// A best practices starting point for a role based on the generalized roles at a company.
	Base string `json:"base,omitempty"`
	Description string `json:"description,omitempty"`
	DateCreated float64 `json:"dateCreated" validate:"required"`
	DateDeleted float64 `json:"dateDeleted,omitempty"`
	OrganizationId string `json:"organizationId,omitempty"`
	// Should I let people that are not part of this organization this role?
	IsPublic bool `json:"isPublic,omitempty"`
}

// Person <-> organization relationship
type PersonOrganization struct {
	Id string `json:"id" validate:"required"`
	OrganizationId string `json:"organizationId" validate:"required"`
	PersonId string `json:"personId" validate:"required"`
	DateCreated SpruceSchema.DateTimeFieldValue `json:"dateCreated" validate:"required"`
	DateDeleted SpruceSchema.DateTimeFieldValue `json:"dateDeleted,omitempty"`
}

// Person <-> location relationship
type PersonLocation struct {
	Id string `json:"id" validate:"required"`
	LocationId string `json:"locationId" validate:"required"`
	PersonId string `json:"personId" validate:"required"`
	DateCreated SpruceSchema.DateTimeFieldValue `json:"dateCreated" validate:"required"`
	DateDeleted SpruceSchema.DateTimeFieldValue `json:"dateDeleted,omitempty"`
}

// Person: A human being.
type Person struct {
	Id string `json:"id" validate:"required"`
	FirstName string `json:"firstName,omitempty"`
	LastName string `json:"lastName,omitempty"`
	// The name you can use when talking to this person.
	CasualName string `json:"casualName" validate:"required"`
	Timezone string `json:"timezone,omitempty"`
	// A number that can be texted
	Phone string `json:"phone,omitempty"`
	// An optional username if the person does not want to login using their phone
	Username string `json:"username,omitempty"`
	// An optional email if the person does not want to login using their phone
	Email string `json:"email,omitempty"`
	Avatar SpruceSchema.ImageFieldValue `json:"avatar,omitempty"`
	DateCreated SpruceSchema.DateTimeFieldValue `json:"dateCreated" validate:"required"`
	DateUpdated SpruceSchema.DateTimeFieldValue `json:"dateUpdated,omitempty"`
	DateScrambled SpruceSchema.DateTimeFieldValue `json:"dateScrambled,omitempty"`
}

// Organization: A company or team. Comprises of many people and locations.
type Organization struct {
	Id string `json:"id" validate:"required"`
	Name string `json:"name" validate:"required"`
	Address SpruceSchema.AddressFieldValue `json:"address,omitempty"`
	Slug string `json:"slug" validate:"required"`
	// Is this organization viewable by guests?
	IsPublic bool `json:"isPublic,omitempty"`
	DateCreated SpruceSchema.DateTimeFieldValue `json:"dateCreated" validate:"required"`
	DateDeleted SpruceSchema.DateTimeFieldValue `json:"dateDeleted,omitempty"`
}

type MessageSource struct {
	LocationId string `json:"locationId,omitempty"`
	PersonId string `json:"personId,omitempty"`
	OrganizationId string `json:"organizationId,omitempty"`
	SkillId string `json:"skillId,omitempty"`
	RoleId string `json:"roleId,omitempty"`
	IsCore bool `json:"isCore,omitempty"`
}

type MessageTarget struct {
	LocationId string `json:"locationId,omitempty"`
	PersonId string `json:"personId,omitempty"`
	OrganizationId string `json:"organizationId,omitempty"`
	SkillId string `json:"skillId,omitempty"`
	RoleId string `json:"roleId,omitempty"`
	Phone string `json:"phone,omitempty"`
	Email string `json:"email,omitempty"`
}

// Location: A physical location where people meet. An organization has at least one of them.
type Location struct {
	Id string `json:"id" validate:"required"`
	Name string `json:"name" validate:"required"`
	// You can use other symbols, like # or dashes. #123 or 32-US-5
	Num string `json:"num,omitempty"`
	Slug string `json:"slug" validate:"required"`
	// Is this location viewable by guests?
	IsPublic bool `json:"isPublic,omitempty"`
	Phone string `json:"phone,omitempty"`
	Timezone string `json:"timezone,omitempty"`
	Address SpruceSchema.AddressFieldValue `json:"address,omitempty"`
	// Is this a virtual location?
	IsVirtual bool `json:"isVirtual,omitempty"`
	DateCreated SpruceSchema.DateTimeFieldValue `json:"dateCreated" validate:"required"`
	DateDeleted SpruceSchema.DateTimeFieldValue `json:"dateDeleted,omitempty"`
	DateUpdated SpruceSchema.DateTimeFieldValue `json:"dateUpdated,omitempty"`
	OrganizationId string `json:"organizationId" validate:"required"`
}

type Feed struct {
	Items *[]FeedItem `json:"items" validate:"required,min=0"`
}

// Link
type Link struct {
	Label string `json:"label" validate:"required"`
	Uri string `json:"uri" validate:"required"`
}

// A discrete communication between two humans or a human and a machine.
type Message struct {
	Id string `json:"id" validate:"required"`
	// An arbitrary id that can be used to track this message when being sent and not yet assigned an Id.
	TrackingId string `json:"trackingId,omitempty"`
	// If this message is a reply to another message, this is the id of that original message.
	InReplyToMessageId string `json:"inReplyToMessageId,omitempty"`
	DateCreated float64 `json:"dateCreated" validate:"required"`
	DateSent float64 `json:"dateSent,omitempty"`
	Target *MessageTarget `json:"target" validate:"required"`
	Source *MessageSource `json:"source" validate:"required"`
	Errors []string `json:"errors,omitempty"`
	Classification string `json:"classification" validate:"required"`
	Status string `json:"status,omitempty"`
	Subject string `json:"subject,omitempty"`
	Body string `json:"body" validate:"required"`
	Context map[string]interface{} `json:"context,omitempty"`
	TopicId string `json:"topicId,omitempty"`
	Links *[]Link `json:"links,omitempty" validate:"min=0"`
	Choices *[]Choice `json:"choices,omitempty"`
}

type FeedItemTarget struct {
	PersonId string `json:"personId,omitempty"`
	CasualName string `json:"casualName" validate:"required"`
	Avatar SpruceSchema.ImageFieldValue `json:"avatar,omitempty"`
	SkillId string `json:"skillId,omitempty"`
	IsMe bool `json:"isMe" validate:"required"`
	IsSprucebot bool `json:"isSprucebot" validate:"required"`
}

type Choice struct {
	Value interface{} `json:"value" validate:"required"`
	Label string `json:"label" validate:"required"`
}

type FeedItem struct {
	Id string `json:"id" validate:"required"`
	Message string `json:"message" validate:"required"`
	DateCreated SpruceSchema.DateTimeFieldValue `json:"dateCreated" validate:"required"`
	Note string `json:"note,omitempty"`
	Source *FeedItemTarget `json:"source" validate:"required"`
	Target *FeedItemTarget `json:"target" validate:"required"`
	Choices *[]Choice `json:"choices,omitempty"`
	Links *[]Link `json:"links,omitempty" validate:"min=0"`
	Context map[string]interface{} `json:"context,omitempty"`
}

type AgentSource struct {
	PersonId string `json:"personId,omitempty"`
	SkillId string `json:"skillId,omitempty"`
}

// Agent
type Agent struct {
	Id string `json:"id" validate:"required"`
	Name string `json:"name" validate:"required"`
	SystemPrompt string `json:"systemPrompt" validate:"required"`
	Source *AgentSource `json:"source,omitempty"`
}



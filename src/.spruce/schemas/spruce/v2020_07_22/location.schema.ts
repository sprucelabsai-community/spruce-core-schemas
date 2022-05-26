import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../core.schemas.types'



const locationSchema: SpruceSchemas.Spruce.v2020_07_22.LocationSchema  = {
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
	                options: {choices: [{"label":"(GMT -12) Eniwetok, Kwajalein","value":"-720"},{"label":"(GMT -11) Midway Island, Samoa","value":"-660"},{"label":"(GMT -10) Hawaii","value":"-600"},{"label":"(GMT -9:30) Taiohae","value":"-570"},{"label":"(GMT -9) Alaska","value":"-540"},{"label":"(GMT -8) Pacific Time (US & Canada)","value":"-480"},{"label":"(GMT -7) Mountain Time (US & Canada)","value":"-420"},{"label":"(GMT -6) Central Time (US & Canada), Mexico City","value":"-360"},{"label":"(GMT -5) Eastern Time (US & Canada), Bogota, Lima","value":"-300"},{"label":"(GMT -4:30) Caracas","value":"-270"},{"label":"(GMT -4) Atlantic Time (Canada), Caracas, La Paz","value":"-240"},{"label":"(GMT -3:30) Newfoundland","value":"-210"},{"label":"(GMT -3) Brazil, Buenos Aires, Georgetown","value":"-180"},{"label":"(GMT -2) Mid-Atlantic","value":"-120"},{"label":"(GMT -1) Azores, Cape Verde Islands","value":"-60"},{"label":"(GMT) Western Europe Time, London, Lisbon, Casablanca","value":"0"},{"label":"(GMT +1) Brussels, Copenhagen, Madrid, Paris","value":"60"},{"label":"(GMT +2) Kaliningrad, South Africa","value":"120"},{"label":"(GMT +3) Baghdad, Riyadh, Moscow, St. Petersburg","value":"180"},{"label":"(GMT +3:30) Tehran","value":"210"},{"label":"(GMT +4) Abu Dhabi, Muscat, Baku, Tbilisi","value":"240"},{"label":"(GMT +4:30) Kabul","value":"270"},{"label":"(GMT +5) Ekaterinburg, Islamabad, Karachi, Tashkent","value":"300"},{"label":"(GMT +5:30) Bombay, Calcutta, Madras, New Delhi","value":"330"},{"label":"(GMT +5:45) Kathmandu, Pokhara","value":"345"},{"label":"(GMT +6) Almaty, Dhaka, Colombo","value":"360"},{"label":"(GMT +6:30) Yangon, Mandalay","value":"390"},{"label":"(GMT +7) Bangkok, Hanoi, Jakarta","value":"420"},{"label":"(GMT +8) Beijing, Perth, Singapore, Hong Kong","value":"480"},{"label":"(GMT +8:45) Eucla","value":"525"},{"label":"(GMT +9) Tokyo, Seoul, Osaka, Sapporo, Yakutsk","value":"540"},{"label":"(GMT +9:30) Adelaide, Darwin","value":"570"},{"label":"(GMT +10) Eastern Australia, Guam, Vladivostok","value":"600"},{"label":"(GMT +10:30) Lord Howe Island","value":"630"},{"label":"(GMT +11) Magadan, Solomon Islands, New Caledonia","value":"660"},{"label":"(GMT +11:30) Norfolk Island","value":"690"},{"label":"(GMT +12) Auckland, Wellington, Fiji, Kamchatka","value":"720"},{"label":"(GMT +12:45) Chatham Islands","value":"765"},{"label":"(GMT +13) Apia, Nukualofa","value":"780"},{"label":"(GMT +14) Line Islands, Tokelau","value":"840"}],}
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

SchemaRegistry.getInstance().trackSchema(locationSchema)

export default locationSchema

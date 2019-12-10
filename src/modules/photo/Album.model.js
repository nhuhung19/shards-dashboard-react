import * as joi from '@hapi/joi' // thư viện ngoài có tác dụng  giúp kiểm tra dữ liệu validate
// document https://hapi.dev/family/joi/?v=16.1.8

const SCHEMA = joi.object({
	id: joi.number().optional().prefs({convert: true}),
	title: joi.string().max(20).required(),
	userId: joi.number().required(),
})


/**
 * A domain model that represents a album.
 */ 
export default class Album {

	/**
	 * Chuyen tu data object (ko co method) sang Album instance (co method)
	 */
	static from(source) {
		let { value, errors } = SCHEMA.validate(source)
		if (errors) {
			return {
				value: null,
				errors,
			}
		}
		let album = new Album()
		album.id = value.id
		album.title = value.title
		album.userId = value.userId
		return {
			value: album,
			errors: null,
		}
	}

	constructor() {
		this.id = undefined
		this.title = undefined
		this.userId = undefined
	}
}
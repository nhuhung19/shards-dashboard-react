
import * as joi from '@hapi/joi'

const SCHEMA = joi.object({
	name: joi.string().max(20).required(),
	username: joi.string().required(),
	email: joi.string().required(),
	city: joi.string().required(),
	suite: joi.string().required(),
	street: joi.string().required(),
	phone: joi.number().required(),
	zipcode: joi.number().required(),
	company: joi.string().required(),
	website: joi.string().required(),
	catchPhrase: joi.string().required(),
	bs: joi.string().required(),
	lat: joi.number().required(),
	lng: joi.number().required(),
})

export default class User {
	static from(source){
		let {value , errors} = SCHEMA.validate(source)
		if(errors)
		{
			return {
			value: null,
			errors,
			}
		}
		let user = new User()
			user.name = value.name
			user.username = value.username
			user.email = value.email
			user.city = value.city
			user.suite = value.suite
			user.street = value.street
			user.phone = value.phone
			user.zipcode = value.zipcode
			user.company = value.company
			user.website = value.website
			user.catchPhrase = value.catchPhrase
			user.lat = value.lat
			user.lng = value.lng
		return{
			value: user,
			errors: null
		}
	}

	constructor(){
		this.name = undefined
		this.username = undefined
		this.email = undefined
		this.city = undefined
		this.suite = undefined
		this.street = undefined
		this.phone = undefined
		this.zipcode = undefined
		this.company = undefined
		this.website = undefined
		this.catchPhrase = undefined
		this.bs = undefined
		this.lat = undefined
		this.lng = undefined
		this.id = undefined
	}
}
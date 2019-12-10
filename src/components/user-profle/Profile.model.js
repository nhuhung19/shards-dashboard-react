
/**
 * A domain model that represents a user profile.
 */

export default class Profile {

	/**
	 * Chuyen tu data object (ko co method) sang Profile instance (co method)
	 */
	//source : {firstName, lastName, address, province, city, ward}
	static from(source) {
		let profile = new Profile()
		profile.firstName = source.firstName
		profile.lastName = source.lastName
		profile.address = source.address
		profile.province = source.province
		profile.city = source.city
		profile.ward = source.ward
		return profile
	}

	constructor() {
		this.id = undefined
		this.firstName = undefined
		this.lastName = undefined
		this.address = undefined
		this.province = undefined
		this.city = undefined
		this.ward = undefined
	}

	validate() {
		let errors = {
			...this._checkName('firstName'),
			...this._checkName('lastName'),
			...this._checkAddress(),
			...this._checkProvince()
		}
		return errors
	}


	_checkName(prop) {
		let name = this[prop]
		let errors = {}
		if (!name) {
			errors[prop] = 'This field is required'
		}
		else if (name.length < 3) {
			errors[prop] = 'Name must have more than 3 characters'
		}
		return errors
	}

	_checkProvince(){
		let errors = {}
		if(!this.province){
			errors.province = 'This field is required'
		}
		return errors
	}

	_checkAddress() {
		let errors = {}
		if (!this.address) {
			errors.address = 'This field is required'
		}
		else if (!/^\d+\s\w+/.test(this.address)){
			
			errors.address = 'This field must start with a number and a space'
		}
		return errors
	}
}
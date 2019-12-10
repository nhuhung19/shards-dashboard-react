import Profile from './Profile.model'

// Khi cần quản lý 1 đối tượng cần sử dụng các hàm CRUD
// CRUD - Create Read Update Delete
export default class ProfileStore {

	constructor() {
		this._profiles = undefined
	}

	async create(data) { 
		let profile = this._validate(data) // kiểm tra dữ liệu
		profile.id = Date.now() // Date.now(): lấy số giây hiện tại
		await this._assertFetch() // load danh sách profile
		this._profiles.push(profile)
		await this._save()
		return profile
	}

	async getList() {
		await this._assertFetch()
		return this._profiles
	}

	async getById(id) {
		await this._assertFetch()
		return this._profiles.find(p => p.id === id)
	}

	/**
	 * Replaces the whole model
	 */
	async update(data) {
		let found = this.getById(data.id)
		if (!found) {
			throw new Error(`Not found profile with id ${data.id}`)
		}
		let updatedProfile = this._validate(data)
		/*
		profile.firstName = source.firstName
		profile.lastName = source.lastName
		profile.address = source.address
		profile.province = source.province
		profile.city = source.city
		profile.ward = source.ward
		 */
		Object.assign(found, updatedProfile) // lấy tất cả property của updatedProfile truyền vào found
		
		await this._save()
	}


	async delete(id) {
		await this._assertFetch()
		let foundIdx = this._profiles.findIndex(p => p.id === id)
		this._profiles.splice(foundIdx, 1)
		await this._save()
	}

	_save() {
		return new Promise((resolve, reject) => {
			setTimeout(() =>{
				let strProfiles = JSON.stringify(this._profiles) // chuyển array thành string
				localStorage.setItem('LS_PROFILES', strProfiles) // lưu vào Application -> localstorage
				resolve()
			} ,1000)
		})
	}

	_fetch() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				let strProfiles = localStorage.getItem('LS_PROFILES') //localStorage: (có sẵn): biến của window lấy từ application
				let rebuiltArr = JSON.parse(strProfiles) // chuyền string do JSON.stringify() sinh ra trở thành array
				if (rebuiltArr) {
					this._profiles = rebuiltArr
				}
				else {
					this._profiles = []
				}
				resolve()
			}, 1000)
		})
	}

	async _assertFetch() {
		if (!this._profiles) {
			await this._fetch()
		}
	}

	_validate(data) {
		// data k co method nen phai chuyen qua class Profile
		let profile = Profile.from(data) // Mapping form model => domain model
		let errors = profile.validate() // kiem tra cac prop co hop le khong
		let hasError = Object.keys(errors).length > 0 
		if (hasError) {
			throw errors
		}
		return profile
	}
}
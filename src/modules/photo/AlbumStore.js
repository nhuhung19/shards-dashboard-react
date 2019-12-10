import * as axios from 'axios'

import Album from './Album.model'

// Khi cần quản lý 1 đối tượng cần sử dụng các hàm CRUD
// CRUD - Create Read Update Delete
export default class AlbumStore {

	// constructor() {
		// this._albums = undefined
	// }

	async create(data) { 
		let album = this._validate(data) // kiểm tra dữ liệu
		// album.id = Date.now() // Back-end cap ID, khong phai font-end
		const response = await axios.post('https://jsonplaceholder.typicode.com/albums', album)
		// this._albums.push(album)
		return response.data
	}

	async getList() {
		const response = await axios.get('https://jsonplaceholder.typicode.com/albums') // lay du lieu tren album
		return response.data // array
	}

	async getById(id) {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`)
		return response.data
	}

	/**
	 * Replaces the whole model
	 */
	async update(data) {
		let album = this._validate(data)
		const response = await axios.put(
			`https://jsonplaceholder.typicode.com/albums/${album.id}`,
			album,
		)
		return response.data
	}


	async delete(id) {
		return await axios.delete(`https://jsonplaceholder.typicode.com/albums/${id}`)
	}

	_validate(data) {
		let { value: album, errors } = Album.from(data)
		if (errors) {
			throw errors
		}
		return album
	}
}
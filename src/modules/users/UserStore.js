import * as axios from 'axios'
import React from 'react'
import User from './User.model'


export default class UserStore extends React.Component{

	async creat(data){
		let user = this._validate(data)
		await axios.post('https://jsonplaceholder.typicode.com/users', user)
		return user
	}

	async getList(){
		const response = await axios.get('https://jsonplaceholder.typicode.com/users')
		return response.data
	}

	async getById(id){
		const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
		return response.data
	}

	async Update(data){
		let user = this._validate(data)
		await axios.put(
			`https://jsonplaceholder.typicode.com/users/${user.id}`,
			user,
		)
		return user
	}

	async delete(id) {
		return await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
	}

	_validate(data){
		let {value: user, errors} = User.from(data)
		if(errors){
			throw errors
		}
		return user
	}
}
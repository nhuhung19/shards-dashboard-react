import * as axios from 'axios'
import React from 'react'

import Post from './Post.model'

export default class PostStore extends React.Component{
	

	async creat(data){
		let post = this._validate(data)
		await axios.post('https://jsonplaceholder.typicode.com/posts', post)
		return post
	}

	async getList(){
		const respones = await axios.get('https://jsonplaceholder.typicode.com/posts')
		return respones.data
	}

	async getById(id) {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
		return response.data
	}

	_validate(data){
		let { value: post, errors } = Post.from(data)
		if(errors){
			throw errors
		}
		return post
	}
}
import React from 'react'

import * as joi from '@hapi/joi'

const SCHEMA = joi.object({
	title: joi.string().max(20).required(),
	userId: joi.number().required(),
	body: joi.string().max(30).required(),
})
export default class Post extends React.Component{
	static from(source) {
		let {value , errors} = SCHEMA.validate(source)
		if(errors){
			return {
				value: null,
				errors,
			}
		}
		let post = new Post()
		post.userId = value.userId
		post.title = value.title
		post.body = value.body
		return {
			value: post,
			errors: null,
		}

	}
	constructor(){
		super()
		this.id = undefined
		this.userId = undefined
		this.title = undefined
		this.body = undefined
	}
}
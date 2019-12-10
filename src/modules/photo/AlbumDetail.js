import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

import AlbumStore from './AlbumStore'

class AlbumDetailOrigin extends React.Component {

	state = {  // Class property
		data: {},
		errors: {},
		// isBusy: false,
	}

	constructor(){
		super()
		this._albumStore = new AlbumStore()
	}
	get hasId() {
		return (this.props.id != null) //prop.id là id đc gọi trong AlbumDetaiPage
	}

	componentDidMount() {
		if (!this.hasId) {
			return
		}
		this._fetchData()	
	}

	componentDidUpdate(prevProps) {
		if (prevProps.id !== this.props.id) {
			this.setState({
				data: {},
				errors: {},
			})
			this._fetchData()
		}
	}

	render() {
		const {
			data: { title = '', userId = ''}
		} = this.state

		return(
			<Form onSubmit={this._onFormSubmit.bind(this)} method="post">
				<input value={this.props.id || ''} type="hidden" />
				<Form.Group as={Col} controlId="formGridText">
					<Form.Label>Title</Form.Label>
					<Form.Control 
						value={title}
						onChange={this._onInputChange}
						name='title' size="sm" type="text"
					/>
				</Form.Group>

				<Form.Group as={Col} controlId="formGridText">
					<Form.Label>User ID</Form.Label>
					<Form.Control 
						value={userId}
						onChange={this._onInputChange}
						name='userId' size="sm" type="text"  
						/>
				</Form.Group>
				
				<Button size="sm" variant="primary" type="submit">
					{ this.hasId ? 'Update' : 'Create'}
				</Button>
			</Form>
		)
	}

	_fetchData() {
		let id = this.props.id
		this._albumStore.getById(id)
			.then(serverData => {
				if (!serverData) {
					serverData = {}
				}

				serverData.id = id
				const newState = {
					...this.state,
					data: serverData,
					// data,
				}
				this.setState(newState)
			})
			.catch((err) => {
				console.error(err)
			})
			// console.log('My ID:', this.props.id)
	}

	// Class property
	_onInputChange = (evt) => {
		// const name = evt.currentTarget.name
		const { name, value } = evt.currentTarget // Destructuring object

		// DON'T
		// state[name] = value
		// this.setState(state)

		// cập nhật dữ liệu đã thay đổi
		const newState = {
			...this.state,
			data: {
				...this.state.data,
				[name]: value, // Computed prop
			}
		}

		// React yeu cau tao object moi khi setState
		this.setState(newState)
	}

	/*
	 * Class methods
	 */
	// Chi duoc goi khi button type="submit" bi click
	async _onFormSubmit(evt) {
		evt.preventDefault()
		// const { data } = this.state
		const data = this.state.data 
		let newState

		try {
			if (this.hasId) {
				await this._albumStore.update(data)
			}
			else {
				const newData = await this._albumStore.create(data) // chuyen data tu state vao 
				this.props.history.push(`/albums/${1}`) // Should: newData.id
			}
			newState = {
				...this.state,
				// data: ...
				errors: {},
			}
		}
		catch (errors) {
			newState = {
				...this.state, 
				// errors: errors,
				errors, // Shorthand object property // hien thi lỗi error
			}
		}
		this.setState(newState) 
	}

	_getInputBorder = (name) => {
		return this._isInputError(name)
			? 'border-danger'
			: this._isInputDirty(name)
				? 'border-success'
				: ''
	}

	_isInputError(name) {
		return this.state.errors[name] != null
	}

	_isInputDirty(name) {
		return (name in this.state.data)
	}

}

AlbumDetailOrigin.propTypes = {
	id: PropTypes
		.oneOfType([
			PropTypes.string,
			PropTypes.number,
		])
}


export const AlbumDetail = withRouter(AlbumDetailOrigin)
import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

import ProfileStore from './ProfileStore'


const Provinces = ['Hà Nội', 'Đà Nẵng', 'Tp.HCM']

export default class ProfileDetail extends React.Component{

	state = {  // Class property
		data: {},
		errors: {},
	}

	constructor() {
		super()
		this._profileStore = new ProfileStore()
	}

	/**
	 * React life-cycle method
	 */
	componentDidMount() {
		this._profileStore.getById(0)
			.then(data => {
				if (!data) {
					data = {}
				}
				const newState = {
					...this.state,
					// data: data,
					data,
				}
				this.setState(newState)
			})
			.catch((err) => {
				console.error(err)
			})
	}

	render() {
		let {
			data: { id = '', firstName = '', lastName = '', address = '', province = ''},
			errors: { firstName: firstNameErr, lastName: lastNameErr, address: addressErr, province: provinceErr},
		} = this.state 

		return(
			<Card className="account-form shadow mb-5 bg-white" >
				<Card.Header className="account-form__header bg-white font-weight-bolder text-muted" bg="white">Profile Details</Card.Header>
				<Card.Body>
				<Form onSubmit={this.onFormSubmit.bind(this)} method="post">
					<input value={id} name="id" type="hidden" />
					<Form.Row>
						<Form.Group as={Col} controlId="formGridFirstName">
							<Form.Label >First Name</Form.Label>
							<Form.Control
								value={firstName} onChange={this.onInputChange} name="firstName"
								className={`border ${this.getInputBorder('firstName')}`}
								size="sm" type="text" />
							{
								this.isInputError('firstName')
									? <p className="text-danger form-message">{firstNameErr}</p>
									: null
							}
						</Form.Group>

						<Form.Group as={Col} controlId="formGridLastName">
							<Form.Label>Last Name</Form.Label>
							<Form.Control
								value={lastName} onChange={this.onInputChange}
								className={`border ${this.getInputBorder('lastName')}`} 
								name="lastName" size="sm" type="text" 
							/>
							{
								this.isInputError('lastName')
									? <p className="text-danger form-message">{lastNameErr}</p>
									: null
							}
						</Form.Group>
					</Form.Row>


					<Form.Group controlId="formGridAddress1">
						<Form.Label>Address</Form.Label>
						<Form.Control
							value={address} onChange={this.onInputChange}
							className={`border ${this.getInputBorder('address')}`}
							size="sm" type="text" name="address"
						/>
							{
								this.isInputError('address')
									? <p className="text-danger form-message">{addressErr}</p>
									: null
							}
					</Form.Group>

					<Form.Row>
						<Form.Group as={Col} controlId="formGridProvince">
							<Form.Label>Province</Form.Label>
							<Form.Control 
								value={province} onChange={this.onInputChange}
								className={`border ${this.getInputBorder('province')}`} 
								name="province" size="sm" as="select">
									<option value="">Choose</option>
									{Provinces.map((prov, i) => (
										<option value={prov} key={i}>{prov}</option>))}
							</Form.Control>
							{
								this.isInputError('province')
									? <p className="text-danger form-message">{provinceErr}</p>
									: null
							}
						</Form.Group>

						<Form.Group as={Col} controlId="formGridCity">
							<Form.Label>City</Form.Label>
							<Form.Control size="sm" placeholder="City" />
						</Form.Group>


						<Form.Group as={Col} controlId="formGridWard">
							<Form.Label>Ward</Form.Label>
							<Form.Control size="sm" placeholder="Ward" />
						</Form.Group>
					</Form.Row>

					<Form.Group controlId="exampleForm.ControlTextarea1">
						<Form.Label>Example textarea</Form.Label>
						<Form.Control size="sm" as="textarea" rows="5" />
					</Form.Group>	

					<Button size="sm" variant="primary" type="submit">
						Update Profile
					</Button>
					</Form>
				</Card.Body>
			</Card>	
		)
	}

	// Class property
	onInputChange = (evt) => {
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
	async onFormSubmit(evt) {
		evt.preventDefault()
		// const { data } = this.state
		const data = this.state.data 
		let newState

		try {
			await this._profileStore.create(data) // chuyen data tu state vao 
			// let profile = Profile.from(data) // Mapping form model => domain model
			// let errors = profile.validate()
			// profile.save()
			newState = {
				...this.state,
				data: {},
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

	getInputBorder = (name) => {
		return this.isInputError(name)
			? 'border-danger'
			: this.isInputDirty(name)
				? 'border-success'
				: ''
	}

	isInputError(name) {
		return this.state.errors[name] != null
	}

	isInputDirty(name) {
		return (name in this.state.data)
	}
}
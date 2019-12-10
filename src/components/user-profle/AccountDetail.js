import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'


export default function AccountDetail() {
	const [state, setState] = useState({  // Destructuring array
		data: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			province: '',
		},
		error: {},
	})

	// lấy dữ liệu thay đổi
	// Chi duoc goi khi input bi thay doi value
	function onInputChange(evt) {
		// const name = evt.currentTarget.name
		const { name, value } = evt.currentTarget // Destructuring object

		// DON'T
		// state[name] = value

		// cập nhật dữ liệu đã thay đổi
		const newState = {
			...state,
			data: {
				...state.data,
				[name]: value, // Computed prop
			}
		}
		setState(newState)
	}

	// Chi duoc goi khi button type="submit" bi click
	function onFormSubmit(evt) {
		evt.preventDefault()
		const { data: formData, error: formError } = state
		// for in: chỉ quan tâm đến property k chú ý đến value
		for (let name in formData) {
			// coi như chưa có lỗi (gắn giá trị null cho mỗi phần tử name trong error)
			formError[name] = null


			// Falsey value: '', 0, null, undefined, NaN, false
			// if (formData[prop] == false) {
			if (!formData[name]) {
				formError[name] = 'This field is required'
			}
		}
		const newState = {
			...state,
			error: {
				...formError,
			},
		}
		setState(newState)
	}

	function isInputError(name) {
		return state.error[name] != null
	}

	return(
		<Card className="account-form shadow mb-5 bg-white" >
			<Card.Header className="account-form__header bg-white font-weight-bolder text-muted" bg="white">Account Details</Card.Header>
			<Card.Body>
			<Form onSubmit={onFormSubmit} method="post">
					
				<Form.Group as={Col} controlId="formGridEmail">
					<Form.Label>Email</Form.Label>
					<Form.Control 
						value={state.data.email} onChange={onInputChange} 
						className={`border ${isInputError('email') ? 'border-danger' : 'border-success'} `} 
						name='email' size="sm" type="email"
						
					/>
					{
						isInputError('email')
							? <p className="text-danger form-message">{state.error.email}</p>
							: null
					}
				</Form.Group>

				<Form.Group as={Col} controlId="formGridPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control 
						value={state.data.password} onChange={onInputChange}
						className={`border ${isInputError('email') ? 'border-danger' : 'border-success'} `} 
						name='password' size="sm" type="password"  
						/>
					{
						isInputError('password')
							? <p className="text-danger form-message">{state.error.password}</p>
							: null
					}
				</Form.Group>
				
				<Button size="sm" variant="primary" type="submit">
					Update Account
				</Button>
				</Form>
			</Card.Body>
		</Card>	
	)
}
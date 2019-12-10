import React from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default class PostDetail extends React.Component{

	get hasId() {
		return (this.props.id != null)
	}

	componentDidMount() {
		console.log('My ID:', this.props.id)
	}
	render(){
		return(
			<Form  method="post">
				<input value={this.props.id} type="hidden" />
				<Form.Group as={Col} controlId="formGridText">
					<Form.Label>Title</Form.Label>
					<Form.Control 
						name='title' size="sm" type="text"
					/>
				</Form.Group>

				<Form.Group as={Col} controlId="formGridText">
					<Form.Label>User</Form.Label>
					<Form.Control 
						name='user' size="sm" type="text"  
						/>
				</Form.Group>

				<Form.Group as={Col} controlId="formGridText">
					<Form.Label>Body</Form.Label>
					<Form.Control 
						name='body' size="sm" type="text"  
						/>
				</Form.Group>
				
				<Button size="sm" variant="primary" type="submit">
					{ this.hasId ? 'Update' : 'Create'}
				</Button>
			</Form>
		)
	}
}
PostDetail.propTypes = {
	id: PropTypes
		.oneOfType([
			PropTypes.string,
			PropTypes.number,
		])
}
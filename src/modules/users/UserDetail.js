import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default class UserDetail extends React.Component{

	get hasId() {
		return (this.props.id != null) //
	}

	componentDidMount() {
		console.log('My Id:', this.props.id)
	}

	render(){
		return(
		<Card className="account-form shadow mb-5 bg-white" >
			<Card.Body>
			<Form >
				 <input name="id" type="hidden" /> {/*dùng để update dữ liệu */}
				<Form.Row>
					<Form.Group as={Col}>
						<Form.Label >Name</Form.Label>
						<Form.Control size="sm" type="text" />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridLastName">
						<Form.Label>User Name</Form.Label>
						<Form.Control size="sm" type="text" />
					</Form.Group>
				</Form.Row>

				<Form.Group controlId="formGridAddress1">
					<Form.Label>Email</Form.Label>
					<Form.Control size="sm" type="email" />
				</Form.Group>

				<Form.Row>
					<Form.Group as={Col} controlId="formGridCity">
						<Form.Label>City</Form.Label>
						<Form.Control size="sm" type="text" />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridProvince">
						<Form.Label>Street</Form.Label>
						<Form.Control name="province" size="sm" type="text">
						</Form.Control>
					</Form.Group>

					<Form.Group as={Col} controlId="formGridCity">
						<Form.Label>Suite</Form.Label>
						<Form.Control size="sm" type="text" />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridCity">
						<Form.Label>Zipcode</Form.Label>
						<Form.Control size="sm" type="number" />
					</Form.Group>
				</Form.Row>
				<Form.Row>

					<Form.Group as={Col} controlId="formGridWard">
						<Form.Label>Lat</Form.Label>
						<Form.Control size="sm" type="number" />
					</Form.Group>

					<Form.Group as={Col} controlId="formGridWard">
						<Form.Label>Lng</Form.Label>
						<Form.Control size="sm" type="number" />
					</Form.Group>
				</Form.Row>

				<Form.Group controlId="exampleForm.ControlTextarea1">
					<Form.Label>Phone</Form.Label>
					<Form.Control size="sm" type="number" />
				</Form.Group>	

				<Form.Group controlId="exampleForm.ControlTextarea1">
					<Form.Label>Website</Form.Label>
					<Form.Control size="sm" type="text" />
				</Form.Group>
 
				<Form.Row>
					<Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
						<Form.Label>Company</Form.Label>
						<Form.Control size="sm" type="text" />
					</Form.Group>	

					<Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
						<Form.Label>CatchPhrase</Form.Label>
						<Form.Control size="sm" type="text" />
					</Form.Group>

					<Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
						<Form.Label>BS</Form.Label>
						<Form.Control size="sm" type="text" />
					</Form.Group>
				</Form.Row>

				<Button size="sm" variant="primary" type="submit">
				
					{ this.hasId ? 'Update' : 'Create'}
				</Button>
			</Form>
		</Card.Body>
	</Card>
		)
	}
}
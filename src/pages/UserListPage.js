import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import UserList from '../modules/users/UserList'

export default class UserListPage extends React.Component {
	render(){
		return(
			<Card>
				<Button as={Link} to="/users/new" variant="success">Create</Button>  
				<UserList />
			</Card>
		)
	}
}
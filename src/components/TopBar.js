import img from '../images/personal.jpg'

import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'


export default function TopBar(){
	return(
		<Dropdown >
			<Dropdown.Toggle id="dropdown-basic">
			<img src={img} alt="img" /> <span> </span>
			Sierra Brooks
			</Dropdown.Toggle>
			<Dropdown.Menu>
				<Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
				<Dropdown.Item href="#/action-2">Edit Profile</Dropdown.Item>
				<Dropdown.Item href="#/action-3">Filies</Dropdown.Item>
				<Dropdown.Item href="#/action-4">Transactions</Dropdown.Item>
				<Dropdown.Divider />
				<Dropdown.Item href="#/action-5">Logout</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	)
}
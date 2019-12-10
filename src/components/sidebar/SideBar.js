import './sidebar.css'
import React from 'react'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPen} from '@fortawesome/free-solid-svg-icons'
import {faTh} from '@fortawesome/free-solid-svg-icons'
import {faAddressCard} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons'
import {faFileMedical} from '@fortawesome/free-solid-svg-icons'
import {faThLarge} from '@fortawesome/free-solid-svg-icons'

export default function SideBar(){
	return(
		<Navbar className="flex-column" expand="lg">
							<div className="NavbarBrand" >
								<Navbar.Brand href="#home">Shards DashBoard</Navbar.Brand>
							</div>
							<Navbar.Toggle aria-controls="basic-navbar-nav" />
							<Navbar.Collapse id="basic-navbar-nav">
								<Nav className="mr-auto flex-column">
									<Nav.Link className="nav-menu-item" as={Link} to="/tables">
										<FontAwesomeIcon size="xs" icon={faPen} /> Blog Dashboard
									</Nav.Link>
									<Nav.Link className="nav-menu-item" href="#link">
										<FontAwesomeIcon size="xs" icon={faAddressCard} /> Blog Posts
									</Nav.Link>
									<Nav.Link className="nav-menu-item" href="#link">
										<FontAwesomeIcon size="xs" icon={faFileMedical} /> Add New Post
									</Nav.Link>
									<Nav.Link className="nav-menu-item" href="#link">
										<FontAwesomeIcon size="xs" icon={faThLarge} /> Forms Component
									</Nav.Link>
									<Nav.Link className="nav-menu-item" as={Link} to="/tables">
										<FontAwesomeIcon size="xs" icon={faTh} /> Tables
									</Nav.Link>
									<Nav.Link className="nav-menu-item" as={Link} to="/user">
										<FontAwesomeIcon size="xs" icon={faUser} /> User Profile
									</Nav.Link>
									<Nav.Link className="nav-menu-item" as={Link} to="/errors">
										<FontAwesomeIcon size="xs" icon={faExclamationCircle} /> Error
									</Nav.Link>
									<Nav.Link className="nav-menu-item" as={Link} to="/albums">
										<FontAwesomeIcon size="xs" icon={faExclamationCircle} /> Albums
									</Nav.Link>
									<Nav.Link className="nav-menu-item" as={Link} to="/posts">
										<FontAwesomeIcon size="xs" icon={faThLarge} /> Posts
									</Nav.Link>
									<Nav.Link className="nav-menu-item" as={Link} to="/users">
										<FontAwesomeIcon size="xs" icon={faAddressCard} /> Users
									</Nav.Link>
								</Nav>
							</Navbar.Collapse>
						</Navbar>
	)
}
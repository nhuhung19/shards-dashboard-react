import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import { AlbumList } from '../modules/photo'


export default class AlbumPage extends React.Component {
	render(){
		// Card
		return(
			<>
			<Card>
			<Button as={Link} to="/albums/new" variant="success">Tao moi</Button>
			<AlbumList />
			</Card>
			</>
		)
	}
}
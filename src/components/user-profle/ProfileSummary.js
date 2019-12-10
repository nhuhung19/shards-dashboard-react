import img from '../../images/personal.jpg'

import React from 'react'
import Card from 'react-bootstrap/Card'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Button from 'react-bootstrap/Button'

export default function ProfileSummary(){
	return(
		<Card className="profile text-center shadow py-3 mb-5 bg-white" bg="white">
			<Card.Header className="bg-white p-4">
				<img className="profile__img" src={img} alt="User avatar" />
				<Card.Title as="h3" className="text-muted" >Sierra Brooks</Card.Title>
				<Card.Text className="font-weight-bolder text-muted">Project Manager</Card.Text>
				<Button size="sm" className="profile__header__btn" variant="outline-primary">Follow</Button>
			</Card.Header>
			<Card.Body className="text-justify p-4">
				<div className="d-flex">
					<Card.Title as="h6" className="flex-fill text-left text-muted">Workload</Card.Title>
					<div className="flex-fill profile__header__text">74%</div>
				</div>
				<ProgressBar className="progressbar" now={74} />
			</Card.Body>
			<Card.Footer className="profile__footer">
				<Card.Title as="h6" className="text-muted" >Description</Card.Title>
				<Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?</Card.Text>
			</Card.Footer>
		</Card>
	)
}
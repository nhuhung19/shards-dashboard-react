import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'


export default function ErrorsPage(){
	return(
		<Container className="text-center p-0">
			<h1 className="text-muted">500</h1>
			<h2 className="text-muted">Something went wrong!</h2>
			<p>There was a problem on our end. Please try again later.</p>
			<Button size="sm" variant="primary" type="submit">Go back</Button>
		</Container>
	)
}
import './userpage.css'


import React from 'react'
// import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ProfileSummary from '../../components/user-profle/ProfileSummary'
import AccountDetail from '../../components/user-profle/AccountDetail'
import ProfileDetail from '../../components/user-profle/ProfileDetail'


export default function UserPage(){
	return(
		<>
		<div className="main__header">
			<h6>BLOG POST</h6>
			<h4>Add New Post</h4>
		</div>
		{/* <Container className="main"> */}
			<Row>
				<Col xs={4}>
					<ProfileSummary />
				</Col>
				<Col xs={8}>
					<AccountDetail />
					<ProfileDetail />
				</Col>
			</Row>
	    {/* </Container> */}
	  </>
	)
}
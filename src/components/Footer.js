import React from 'react'
import Col from 'react-bootstrap/Col';

export default function Footer(){
	return(
		<>
		<Col xs={6} className="d-flex justify-content-center">
			<ul className="footer__ul d-sm-inline-flex "  >
				<li><a href="#Link">Home</a></li>
				<li><a href="#Link">Services</a></li>
				<li><a href="#Link">About</a></li>
				<li><a href="#Link">Products</a></li>
				<li><a href="#Link">Blog</a></li>
			</ul>
		</Col>
		<Col xs={6}>
			<div className="d-flex justify-content-center">Copyright © 2018 DesignRevision</div>
		</Col>
		</>
	)
}
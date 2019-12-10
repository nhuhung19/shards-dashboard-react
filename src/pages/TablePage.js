import React from 'react'
import Card from 'react-bootstrap/Card'

export default function TablePage(){
	return(
		<>
		<div className="main__header">
			<h6>BLOG POST</h6>
			<h4>Add New Post</h4>
		</div>
		<Card className="rounded-lg shadow mb-3">
			<Card.Header className="border-bottom-0">Active Users</Card.Header>
			<Card.Body className="p-0">
				<table className="table">
				<thead>
					<tr>
					<th scope="col">#</th>
					<th scope="col">First Name</th>
					<th scope="col">Last Name</th>
					<th scope="col">Country</th>
					<th scope="col">City</th>
					<th scope="col">Phone</th>
					</tr>
				</thead>
				<tbody>
					<tr>
					<th scope="row">1</th>
					<td>Ali</td>
					<td>Kerry</td>
					<td>Russian Federation</td>
					<td>Gdańsk</td>
					<td>107-0339</td>
					</tr>
					<tr>
					<th scope="row">2</th>
					<td>Clark</td>
					<td>Angela</td>
					<td>Estonia</td>
					<td>Borghetto di Vara</td>
					<td>1-660-850-1647</td>
					</tr>
					<tr>
					<th scope="row">3</th>
					<td>Jerry</td>
					<td>Nathan</td>
					<td>Cyprus</td>
					<td>Braunau am Inn</td>
					<td>214-4225</td>
					</tr>
					<tr>
					<th scope="row">4</th>
					<td>Colt</td>
					<td>Angela</td>
					<td>Liberia</td>
					<td>Bad Hersfeld</td>
					<td>1-848-473-7416</td>
					</tr>
				</tbody>
				</table>
			</Card.Body>
		</Card>
		<Card className="rounded-lg shadow mb-3" bg="dark" text="white">
			<Card.Header className="border-bottom-0">Active Users</Card.Header>
			<Card.Body className="p-0">
				<table className="table table-dark">
				<thead>
					<tr>
					<th scope="col">#</th>
					<th scope="col">First Name</th>
					<th scope="col">Last Name</th>
					<th scope="col">Country</th>
					<th scope="col">City</th>
					<th scope="col">Phone</th>
					</tr>
				</thead>
				<tbody>
					<tr>
					<th scope="row">1</th>
					<td>Ali</td>
					<td>Kerry</td>
					<td>Russian Federation</td>
					<td>Gdańsk</td>
					<td>107-0339</td>
					</tr>
					<tr>
					<th scope="row">2</th>
					<td>Clark</td>
					<td>Angela</td>
					<td>Estonia</td>
					<td>Borghetto di Vara</td>
					<td>1-660-850-1647</td>
					</tr>
					<tr>
					<th scope="row">3</th>
					<td>Jerry</td>
					<td>Nathan</td>
					<td>Cyprus</td>
					<td>Braunau am Inn</td>
					<td>214-4225</td>
					</tr>
					<tr>
					<th scope="row">4</th>
					<td>Colt</td>
					<td>Angela</td>
					<td>Liberia</td>
					<td>Bad Hersfeld</td>
					<td>1-848-473-7416</td>
					</tr>
				</tbody>
				</table>
			</Card.Body>
		</Card>
		</>
	)
}
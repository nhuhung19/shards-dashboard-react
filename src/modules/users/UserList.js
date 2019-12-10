import React from 'react'
import { Link } from 'react-router-dom'
import { fasSpinner} from '@fortawesome/free-solid-svg-icons'
import UserStore from './UserStore'

export default class UserList extends React.Component {
	constructor (){
		super()
		this.state = {
		users: []
		}
		this._userStore = new UserStore()
	}

	componentDidMount(){
		this._userStore.getList()
		.then(data => {
			const newState = {
				...this.state,
				users: data.sort((a, b) => a.name.localeCompare(b.name)),
			}
			this.setState(newState)
		})
		.catch((err) => {
			console.error(err)
		})
}
	render(){
		const {users} = this.state
		return(
			<table className="table">
				<thead>
					<tr>
					<th scope="col">#</th>
					<th scope="col">Name</th>
					<th scope="col">User Name</th>
					<th scope="col">Email</th>
					<th scope="col">Street</th>
					<th scope="col">Suite</th>
					<th scope="col">City</th>
					<th scope="col">Zipcode</th>
					<th scope="col">Lat</th>
					<th scope="col">Lng</th>
					<th scope="col">Phone</th>
					<th scope="col">Website</th>
					<th scope="col">Company</th>
					<th scope="col">catchPhrase</th>
					<th scope="col">bs</th>
					</tr>
				</thead>
				<tbody>
					{
						users.length === 0
						? <tr><th scope="row">Loading...</th> <fasSpinner /></tr>	
						: users.map((el , i) =>
						<tr key={el.id}>
							<th scope="row">{i+1}</th>
							<Link to={`/users/${el.id}`}><td>{el.name}</td></Link>
							<td>{el.username}</td>
							<td>{el.email}</td>
							<td>{el.address.street}</td>
							<td>{el.address.suite}</td>
							<td>{el.address.city}</td>
							<td>{el.address.zipcode}</td>
							<td>{el.address.geo.lat}</td>
							<td>{el.address.geo.lng}</td>
							<td>{el.phone}</td>
							<td>{el.website}</td>
							<td>{el.company.name}</td>
							<td>{el.company.catchPhrase}</td>
							<td>{el.company.bs}</td>
						</tr>)
					}
				</tbody>
				</table>
		)
	}
}
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

import AlbumStore from './AlbumStore'


export class AlbumList extends React.Component {

	constructor() {
		super()
		this.state = {
			albums: [],
		}
		this._albumStore = new AlbumStore()
	}
	
	/**
	 * React life-cycle method
	 */
	componentDidMount() {
		this._albumStore.getList()
			.then(data => {
				const newState = {
					...this.state,
					albums: data.sort((a, b) => a.title.localeCompare(b.title)),
				}
				this.setState(newState)
			})
			.catch((err) => {
				console.error(err)
			})
	}

	render (){
		const { albums } = this.state
		return (
			<table className="table">
				<thead>
					<tr>
					<th scope="col">#</th>
					<th scope="col">Title</th>
					<th scope="col">User ID</th>
					<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody>
					{albums.length === 0
						? <tr><th colSpan="4"><FontAwesomeIcon icon={faSpinner} /> Loading.....</th></tr>
						:
						albums.map((al, i) =>
							<tr key={al.id}>
								<th scope="row">{i+1}</th>
								<td>
									<Link to={`/albums/${al.id}`}>{al.title}</Link>
								</td>
								<td>{al.userId}</td>
								<td>[Delete]</td>
							</tr>
					)}
				</tbody>
				</table>
		)
	}
}
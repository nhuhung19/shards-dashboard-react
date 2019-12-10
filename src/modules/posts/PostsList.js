import React from 'react'
import { Link } from 'react-router-dom'
import { fasSpinner} from '@fortawesome/free-solid-svg-icons'
import PostStore from './PostStore'

export default class PostList extends React.Component{
	constructor() {
		super()
		this.state = {
			posts: [],
		}
		this._postStore = new PostStore()
	}

	componentDidMount(){
		this._postStore.getList()
		.then(data => {
			const newState = {
				...this.state,
				posts: data.sort((a, b) => a.title.localeCompare(b.title)),
			}
			this.setState(newState)
			})
		.catch((err) => {
			console.error(err)
		})
	}

	render(){
		const { posts } = this.state
		return(
			<table className="table">
				<thead>
					<tr>
					<th scope="col">#</th>
					<th scope="col">Title</th>
					<th scope="col">User</th>
					<th scope="col">Body</th>
					<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody>
					{posts.length === 0
					? <tr><th colSpan="4">Loading.....</th> <fasSpinner /></tr>
					: 
					posts.map((el, i) => 
						<tr key={el.id} >
						<th scope="row">{i+1}</th>
						<td>
							<Link to={`/posts/${el.id}`}>{el.title}</Link>
						</td>
						<td>{el.userId}</td>
						<td>{el.body}</td>
						<td>[Delete]</td>
						</tr>
					)
					}
					
				</tbody>
				</table>
		)
	}
}
import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

import PostList from '../modules/posts/PostsList'

export default class PostsPage extends React.Component{
	render(){
		return(
			<Card>
				<Button as={Link} to="/posts/new" variant="success">Creat</Button>
				<PostList />
			</Card>
		)
	}
}
import React from 'react'
import Card from 'react-bootstrap/Card'
import PostDetail from '../modules/posts/PostDetail'

export default class PostDetailPage extends React.Component{
	render(){
		return(
			<Card>
				<PostDetail />
			</Card>
		)
	}
}
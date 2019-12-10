import React from 'react'
import UserDetail from '../modules/users/UserDetail'


export default class UserDetailPage extends React.Component{
	render(){
		return(
			<UserDetail id={this.props.match.params.userId} />
		)
	}
}
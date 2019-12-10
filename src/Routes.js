import React from 'react'

import { Switch, Route } from "react-router-dom";


import TablePage from './pages/TablePage'
import UserPage from './pages/userpage/UserPage';
import ErrorsPage from './pages/ErrorsPage'
import AlbumListPage from './pages/AlbumListPage'
import AlbumDetailPage from './pages/AlbumDetailPage'
import PostPage from './pages/PostsPage'
import PostDetailPage from './pages/PostDetailPage'
import UserListPage from './pages/UserListPage'
import UserDetailPage from './pages/UserDetailPage'
export default function Routes(){
	return(
		<Switch>
			<Route path="/tables">
				<TablePage />
			</Route>
			<Route path="/user">
				<UserPage />
			</Route>
			<Route path="/errors">
				<ErrorsPage />
			</Route>
			<Route path="/albums/new" component={AlbumDetailPage} />
			<Route path="/albums/:albumId" component={AlbumDetailPage} />
			<Route path="/albums">
				<AlbumListPage />
			</Route>
			<Route path="/posts/new" component={PostDetailPage} />
			<Route path="/posts/:postId" component={PostDetailPage} />
			<Route path="/posts">
				<PostPage />
			</Route>
			<Route path="/users/new" component={UserDetailPage} />
			<Route path="/users/:userId" component={UserDetailPage} />
			<Route path="/users">
				<UserListPage />
			</Route>
		</Switch>
	)
}
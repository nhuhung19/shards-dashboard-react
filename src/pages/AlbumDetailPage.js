import React from 'react'

import { AlbumDetail } from '../modules/photo'


export default class AlbumDetailPage extends React.Component{
	render() {
		return(
			// react-router cung cap nhung props sau: match, path, location
			<AlbumDetail id={this.props.match.params.albumId} /> //abumId la al.id dc goi ở AlbumList
		)
	}
}
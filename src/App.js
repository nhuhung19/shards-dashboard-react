import './App.css'
import './components/header/btndropdown.css'

import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
// import Header from './components/header/Header'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import UserPage from './pages/userpage/UserPage'
import SideBar from './components/sidebar/SideBar'
import TopBar from './components/TopBar'
import Footer from './components/Footer'

import Routes from './Routes'
function App() {
	
	return(
		<Router>
			<Container fluid>
				<Row>
					<Col xs={2} className="shadow-sm p-3 bg-white rounded">
						<SideBar />
					</Col>
					<Col xs={10}>
						<Row className="justify-content-end shadow-sm p-3 bg-white rounded">
							<Col xs={2}>
								<TopBar />
							</Col>
						</Row>
						<Row as="main" className="flex-column p-4">
							<Routes />

						</Row>
						<Row className="justify-content-end p-3 bg-white border-top ">
							<Footer />
						</Row>
					</Col>
				</Row>

			</Container>
			</Router>
	)
}

export default App;

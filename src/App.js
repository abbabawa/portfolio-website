import { Container, Row, Col } from 'react-bootstrap';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './components/SideBar';
import { Route, Switch } from 'react-router';

import { FaHome } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';

function App() {

	let menuItems = [
		{
			id: 1,
			title: 'Home',
			icon: <FaHome />,
			url: '/home'
		},
		{
			id: 2,
			title: 'About',
			icon: <FcAbout />,
			url: '/home'
		},
		{
			id: 3,
			title: 'Portfolio',
			icon: 'Home',
			url: '/home'
		},
		{
			id: 4,
			title: 'Projects',
			icon: 'Home',
			url: '/home'
		}
	]
  return (
    <Container fluid className="mx-0 px-0">
		<Navigation menuItems={menuItems} />
		<Row>
			<Col xs="1" className="border text-center d-none">
				<SideBar menuItems={menuItems} />
			</Col>
			<Col className="border">
				<Switch>
					<Route path="">
						
					</Route>
				</Switch>
			</Col>
		</Row>
    </Container>
  );
}

export default App;

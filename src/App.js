import { Container, Row, Col } from 'react-bootstrap';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import SideBar from './components/SideBar';
import { Route, Switch } from 'react-router';

import { FaHome } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';
import Home from './pages/Home';
import EducationAndExperience from './pages/EducationAndExperience';
import ContactMe from './pages/ContactMe';

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
    <Container fluid className="">
		<Navigation menuItems={menuItems} />
		<Row className="">
			<Col xs="1" className="d-none d-md-block ps-0 pe-4">
				<SideBar menuItems={menuItems} />
			</Col>
			<Col className="">
				<Switch>
					<Route path="/home">
						<Home />
					</Route>
					<Route path="/education">
						<EducationAndExperience />
					</Route>
					<Route path="/contact">
						<ContactMe />
					</Route>
				</Switch>
			</Col>
		</Row>
    </Container>
  );
}

export default App;

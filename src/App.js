import { Container, Row, Col } from 'react-bootstrap';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './components/SideBar';
import { Route, Switch } from 'react-router';

function App() {

	let menuItems = [
		{
			id: 1,
			title: 'Home',
			icon: 'Home'
		},
		{
			id: 2,
			title: 'About',
			icon: 'Home'
		},
		{
			id: 3,
			title: 'Portfolio',
			icon: 'Home'
		},
		{
			id: 4,
			title: 'Projects',
			icon: 'Home'
		}
	]
  return (
    <Container fluid className="mx-0 px-0">
		<Navigation menuItems={menuItems} />
		<Row>
			<Col xs="1" className="border text-center d-none">
				<SideBar menuItems={menuItems} />
			</Col>
			
		</Row>
    </Container>
  );
}

export default App;

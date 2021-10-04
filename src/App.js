import { Container, Row, Col } from 'react-bootstrap';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import SideBar from './components/SideBar';
import { Route, Switch } from 'react-router';

import { FaHome, FaUserGraduate } from 'react-icons/fa';
import Home from './pages/Home';
import EducationAndExperience from './pages/EducationAndExperience';
import ContactMe from './pages/ContactMe';
import WorkHistory from './pages/WorkHistory';
import Project from './pages/Project';
import { FolderFill, TelephoneFill } from 'react-bootstrap-icons';

// import ap2 from './images/aplori.png'
// import ap3 from './images/aplori2.png'
// import ap4 from './images/aplori3.png'

// import danny1 from './images/dannyvet.png'
// import danny2 from './images/dannyvet2.png'
// import danny3 from './images/dannyvet3.png'
// import danny4 from './images/dannyvet4.png'
// import danny5 from './images/dannyvet5.png'

// import pms from './images/pms.png'
// import pms2 from './images/pms2.png'
// import pms3 from './images/pms3.png'
// import pms4 from './images/pms4.png'

let data = [
    {
		id: 1,
        name: "APLORI Web App",
        client: "A.P. LEVENTIS Ornithological Research Institute",
        url: "aplori.org",
        period: "May 2019 - August 2019",
        screenshots: [
			// {
            //     img: ap2
            // },
			// {
            //     img: ap3
            // },
			// {
            //     img: ap4
            // }
        ]
    },
    {
		id: 2,
        name: "Sales Management System",
        client: "Danny Agricultural And Veterinary Services Ltd.",
        url: "aplori.org",
        period: "November 2019 - Present",
		screenshots: [
			// {
            //     img: danny1
            // },
			// {
            //     img: danny2
            // },
			// {
            //     img: danny3
            // },
			// {
            //     img: danny4
            // },
			// {
            //     img: danny5
            // }
        ]
    },
    {
		id: 3,
        name: "Poultry Management System",
        client: "MerchPOS",
        url: "aplori.org",
        period: "February 2021 - Present",
		screenshots: [
			// {
            //     img: pms
            // },
			// {
            //     img: pms2
            // },
			// {
            //     img: pms3
            // },
			// {
            //     img: pms4
            // }
        ]
    }
]

const getProject = (id)=>{
	let res
	res = data.find(item=>{return item.id === id})
	return res
	
}

function App() {

	let menuItems = [
		{
			id: 1,
			title: 'Home',
			icon: <FaHome className="fs-4 mb-3" />,
			url: '/'
		},
		{
			id: 2,
			title: 'Education',
			icon: <FaUserGraduate className="fs-4 mb-3" />,
			url: '/education'
		},
		{
			id: 3,
			title: 'Portfolio',
			icon: <FolderFill className="fs-4 mb-3" />,
			url: '/work'
		},
		{
			id: 4,
			title: 'Contact',
			icon: <TelephoneFill className="fs-4 mb-3" />,
			url: '/contact'
		}
	]
  return (
    <Container fluid className=" p-0">
		<Navigation menuItems={menuItems} />
		<Row className="">
			<Col xs="1" className="d-none d-md-block ps-0 pe-4">
				<SideBar menuItems={menuItems} />
			</Col>
			<Col className="">
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/education">
						<EducationAndExperience />
					</Route>
					<Route path="/contact">
						<ContactMe />
					</Route>
					<Route path="/work">
						<WorkHistory data={data} />
					</Route>
					<Route path="/project/:id">
						<Project getProject={getProject} />
					</Route>
				</Switch>
			</Col>
		</Row>
    </Container>
  );
}

export default App;

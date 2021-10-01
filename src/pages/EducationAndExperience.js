import { Col, Row } from "react-bootstrap"
import { FaUniversity } from "react-icons/fa"
import {MdComputer} from 'react-icons/md'
import {GiGraduateCap} from 'react-icons/gi'
import MyCard from "../components/MyCard"

let data = [
    {
        icon: <MdComputer className="fs-3 text-danger" />,
        title: <h5 className="my-2">Computer Science</h5>,
        subtitle: "University of Jos, 2012-2017",
        text: "Attended University of Jos and Bagged a bachelor's degree"
    },
    {
        icon: <FaUniversity className="fs-3 text-danger" />,
        title: <h5 className="my-2">Computer Science</h5>,
        subtitle: "University of Jos, 2012-2017",
        text: "Attended University of Jos and Bagged a bachelor's degree"
    },
    {
        icon: <GiGraduateCap className="fs-3 text-danger" />,
        title: <h5 className="my-2">Computer Science</h5>,
        subtitle: "University of Jos, 2012-2017",
        text: "Attended University of Jos and Bagged a bachelor's degree"
    },
    {
        icon: <MdComputer className="fs-3 text-danger" />,
        title: <h5 className="my-2">Computer Science</h5>,
        subtitle: "University of Jos, 2012-2017",
        text: "Attended University of Jos and Bagged a bachelor's degree"
    },
    {
        icon: <FaUniversity className="fs-3 text-danger" />,
        title: <h5 className="my-2">Computer Science</h5>,
        subtitle: "University of Jos, 2012-2017",
        text: "Attended University of Jos and Bagged a bachelor's degree"
    },
    {
        icon: <GiGraduateCap className="fs-3 text-danger" />,
        title: <h5 className="my-2">Computer Science</h5>,
        subtitle: "University of Jos, 2012-2017",
        text: "Attended University of Jos and Bagged a bachelor's degree"
    }
]

const EducationAndExperience = ()=>{
    let components = []
    data.forEach(res=>{
        let hold = (<div className="col-md-4 mt-3">
                        <MyCard title={res.title} icon={res.icon} text={res.text} subtitle={res.subtitle} />
                    </div>)
        components.push(hold)
    })
    return (
        <Row className="mt-5 pt-2">
            <Col md="9" className="p-2 offset-md-1 p-5 homeBox" >
                <h3>Education & Experience</h3>
                <div className="col-12">
                    <button className="btn btn-sm btn-danger me-3">Education</button>
                    <button className="btn btn-sm btn-danger">Experience</button>
                </div>
                <Row>
                    {components}
                    {/* <div className="col-md-4 mt-3">
                        <MyCard />
                    </div>
                    <div className="col-md-4 mt-3">
                        <MyCard />
                    </div>
                    <div className="col-md-4 mt-3">
                        <MyCard />
                    </div>
                    <div className="col-md-4 mt-3">
                        <MyCard />
                    </div> */}
                </Row>
            </Col>
        </Row>
    )
}

export default EducationAndExperience
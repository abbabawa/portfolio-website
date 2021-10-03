import { Col, Row } from "react-bootstrap"
import { FaUniversity } from "react-icons/fa"
import {MdComputer} from 'react-icons/md'
import {GiGraduateCap} from 'react-icons/gi'
import MyCard from "../components/MyCard"
import PageTemplate from "../components/PageTemplate"

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

let buttons = ["Education", "Experience"]

const EducationAndExperience = ()=>{
    return (
        <PageTemplate data={data} buttons={buttons} />
        
    )
}

export default EducationAndExperience
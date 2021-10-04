import { FaUniversity } from "react-icons/fa"
import {MdComputer} from 'react-icons/md'
import {GiGraduateCap} from 'react-icons/gi'
import PageTemplate from "../components/PageTemplate"
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

let buttons = ["Education", "Experience"]

const EducationAndExperience = ()=>{
    let components = []
    data.forEach(res=>{
        let hold = (<div className="col-md-4 mt-3">
                        <MyCard title={res.title} icon={res.icon} text={res.text} subtitle={res.subtitle} />
                    </div>)
        components.push(hold)
    })
    return (
        <PageTemplate components={components} buttons={buttons} pageTitle="Education & Experience" />
        
    )
}

export default EducationAndExperience
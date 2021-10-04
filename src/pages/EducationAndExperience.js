import { FaUniversity } from "react-icons/fa"
import {MdComputer} from 'react-icons/md'
import {GiGraduateCap} from 'react-icons/gi'
import PageTemplate from "../components/PageTemplate"
import MyCard from "../components/MyCard"

let data = [
    {
        icon: <MdComputer className="fs-3 text-danger" />,
        title: <h5 className="my-2">Instructor</h5>,
        subtitle: "5AM Technologies, 2019-2021",
        text: "Worked as a web design and development Instructor"
    },
    {
        icon: <MdComputer className="fs-3 text-danger" />,
        title: <h5 className="my-2">Youth Service</h5>,
        subtitle: "NYSC, 2019-2021",
        text: "Mandatory one year of national service with the National Youth Service corps (NYSC)"
    },
    {
        icon: <MdComputer className="fs-3 text-danger" />,
        title: <h5 className="my-2">Computer Science</h5>,
        subtitle: "University of Jos, 2012-2017",
        text: "Attended University of Jos and Bagged a bachelor's degree (BSc.)"
    },
    {
        icon: <GiGraduateCap className="fs-3 text-danger" />,
        title: <h5 className="my-2">Industrial Training (IT).</h5>,
        subtitle: "Harrisoft Technologies, 2015-2016",
        text: "Student Industrial Work Experience Scheme"
    },
    {
        icon: <FaUniversity className="fs-3 text-danger" />,
        title: <h5 className="my-2">Secondary School</h5>,
        subtitle: "Air Force Military School Jos, 2012-2017",
        text: "Senior Secondary School Certificate"
    },
    // {
    //     icon: <GiGraduateCap className="fs-3 text-danger" />,
    //     title: <h5 className="my-2">Computer Science</h5>,
    //     subtitle: "University of Jos, 2012-2017",
    //     text: "Attended University of Jos and Bagged a bachelor's degree"
    // },
    // {
    //     icon: <MdComputer className="fs-3 text-danger" />,
    //     title: <h5 className="my-2">Computer Science</h5>,
    //     subtitle: "University of Jos, 2012-2017",
    //     text: "Attended University of Jos and Bagged a bachelor's degree"
    // },
    // {
    //     icon: <FaUniversity className="fs-3 text-danger" />,
    //     title: <h5 className="my-2">Computer Science</h5>,
    //     subtitle: "University of Jos, 2012-2017",
    //     text: "Attended University of Jos and Bagged a bachelor's degree"
    // },
    // {
    //     icon: <GiGraduateCap className="fs-3 text-danger" />,
    //     title: <h5 className="my-2">Computer Science</h5>,
    //     subtitle: "University of Jos, 2012-2017",
    //     text: "Attended University of Jos and Bagged a bachelor's degree"
    // }
]

//let buttons = ["Education", "Experience"]
let buttons = []
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
import { Col, Row } from "react-bootstrap"
import { FaUniversity } from "react-icons/fa"
import {MdComputer} from 'react-icons/md'
import {GiGraduateCap} from 'react-icons/gi'
import MyCard from "../components/MyCard"

const PageTemplate = (props) =>{
    let components = []
    let buttons = []
    props.data.forEach(res=>{
        let hold = (<div className="col-md-4 mt-3">
                        <MyCard title={res.title} icon={res.icon} text={res.text} subtitle={res.subtitle} />
                    </div>)
        components.push(hold)
    })

    props.buttons.forEach(res=>{
        buttons.push(<button className="btn btn-sm btn-danger me-3">{res}</button>)
    })
    return (
        <Row className="mt-5 pt-2">
            <Col md="9" className="p-2 offset-md-1 p-5 homeBox" >
                <h3>Education & Experience</h3>
                <div className="col-12">
                    {buttons}
                </div>
                <Row>
                    {components}
                </Row>
            </Col>
        </Row>
    )
}

export default PageTemplate
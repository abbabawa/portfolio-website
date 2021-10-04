import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import PageTemplate from "../components/PageTemplate"


const WorkHistory = (props)=>{
    let buttons = []
    let components = []
    props.data.forEach(res=>{
        let hold = (<div className="col-md-6 mt-3">
                        <Card className="shadow">
                            <Card.Header>{res.name}</Card.Header>
                            <Card.Body>
                                {/* <Card.Title>{res.client}</Card.Title> */}
                                <Card.Text>
                                    <span className="fw-bold">Client:</span> {res.client}<br />
                                    <span className="fw-bold">Period: </span> {res.period}
                                </Card.Text>
                                <Link to={"/project/"+res.id}>
                                    <button  className="btn btn-danger">View Project</button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </div>)
        components.push(hold)
    })
    return (
        <PageTemplate buttons={buttons} components={components} pageTitle="My Portfolio" /> 
    )
}

export default WorkHistory
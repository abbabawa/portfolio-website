import { Col, Row } from "react-bootstrap"

const PageTemplate = (props) =>{
    let buttons = []
    

    props.buttons.forEach(res=>{
        buttons.push(<button className="btn btn-sm btn-danger me-3">{res}</button>)
    })
    return (
        <Row className="mt-5 pt-2">
            <Col md="9" className="p-2 offset-md-1 p-5 homeBox" >
                <h3>{props.pageTitle}</h3>
                <div className="col-12">
                    {buttons}
                </div>
                <Row>
                    {props.components}
                </Row>
            </Col>
        </Row>
    )
}

export default PageTemplate
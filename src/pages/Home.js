import { Card, Col, Image, Row } from "react-bootstrap"
import profilePic from '../images/profile.jpg'

const Home = ()=>{
    return (
        <Row className="mt-5 pt-5">
            <Col md="5" className="p-2 offset-md-2 p-5 homeBox" >
                <div className="">
                        <h6>WELCOME TO ABBA BAWA'S PORTFOLIO</h6>
                        <h2>DESIGN MAKES ANYTHING <br />WHEN YOU CALL MYSELF</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br /> sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                        <button class="btn btn-danger">Download CV</button>
                 </div>   
            </Col>
            <Col className="pt-4 d-flex">
                <Image src={profilePic} className="img  rounded-circle mx-auto me-md-auto ms-md-0" id="profilePic" />
            </Col>
        </Row>
    )
}

export default Home
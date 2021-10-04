import { Col, Image, Row } from "react-bootstrap"
import profilePic from '../images/profile.jpg'

const Home = ()=>{
    return (
        <Row className="mt-5 pt-5">
            <Col md="5" className="p-2 offset-md-2 p-5 homeBox" >
                <div className="">
                        <h6>WELCOME TO ABBA BAWA'S PORTFOLIO</h6>
                        <h2>EDUCATION, CONTACT AND <br />PORTFOLIO</h2>
                        <p>Hi, Thanks for visiting my portfolio website. On this site you will find details about my
                            educational background, qualifications, work experience and portfolio.
                        </p>
                        {/* <button class="btn btn-danger">Download CV</button> */}
                 </div>   
            </Col>
            <Col className="pt-4 d-flex">
                <Image src={profilePic} className="img  rounded-circle mx-auto me-md-auto ms-md-0" id="profilePic" />
            </Col>
        </Row>
    )
}

export default Home
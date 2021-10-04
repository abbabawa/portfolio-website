import { Col, Image, Row } from "react-bootstrap"
import { TelephoneFill } from "react-bootstrap-icons"
import { FaFacebookF, FaLinkedinIn, FaRegCalendar, FaTwitter, FaUserAlt, FaUserGraduate } from "react-icons/fa"
import { MdLocationOn, MdMail } from "react-icons/md"
import { Link } from "react-router-dom"
import profilePic from '../images/profile_pic.jpg'

const ContactMe = ()=>{
    return (
        <Row className="mt-5 pt-2">
            <Col md="4" className="p-2 offset-md-1 p-5 homeBox border-danger " >
                <Image src={profilePic} className="img" id="contact-image" />
            </Col>
            <Col md="6" className="mt-5">
                <h4>I'm Abba Bawa</h4>
                <p className="fw-bold">For over 6 years I have been successfully providing tech services to businesses</p>
                <p>
                    I am a fullstack web developer. I have designed and developed web applications for several clients,
                    <br />I am proficient in both frontend (html, css, javascript and reactjs) and backend (php, nodejs) technologies.
                </p>
                <div className="d-md-flex flex-wrap justify-content-between">
                    <div className="col-md-6 mb-2" md="6">
                        <FaUserAlt className="me-2 text-danger" />
                        Name: Abba Bawa
                    </div>
                    <div className="col-md-6 mb-2" md="6">
                        <FaRegCalendar className="me-2 text-danger" />
                        Date of birth: 24th September 1992
                    </div>
                    <div className="col-md-6 mb-2" md="6">
                        <MdLocationOn className="me-2 text-danger" />
                        Address: No 47 Gyang Botsha Street, <span className="d-block ps-4" > Gada Biu Jos. Plateau State.</span>
                    </div>
                    <div className="col-md-6 mb-2" md="6">
                        <FaUserGraduate className="me-2 text-danger" />
                        Degree: BSc. Computer Science
                    </div>
                    <div className="col-md-6 mb-2" md="6">
                        <MdMail className="me-2 text-danger" />
                        Email: abbabawa6@gmail.com
                    </div>
                    <div className="col-md-6 mb-2" md="6">
                        <TelephoneFill className="me-2 text-danger" />
                        Phone: +234 8133217929
                    </div>
                </div>
                <div className="col-4 bg-danger border border-danger mt-3"></div>
                <div className="d-flex mt-4">
                    <span className="me-3 bg-white p-2">
                        <Link to="https://web.facebook.com/abba.bawa/"><FaFacebookF /></Link>
                    </span>
                    <span className="me-3 bg-white p-2">
                        <Link to="https://www.linkedin.com/in/abba-bawa-68265a16a/"><FaLinkedinIn /></Link>
                    </span>
                    <span className="me-3 bg-white p-2">
                        <Link to=""><FaTwitter /></Link>
                    </span>
                </div>
                <div className="mt-4">
                    <button className="btn btn-danger">
                        Download CV
                    </button>
                </div>
            </Col>
        </Row>
    )
}

export default ContactMe
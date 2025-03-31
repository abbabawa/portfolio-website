"use client";
import { Col, Image, Row } from "react-bootstrap";
import {
  FaAddressBook,
  FaFacebookF,
  FaLinkedinIn,
  FaRegCalendar,
  FaTwitter,
  FaUserAlt,
  FaUserGraduate,
} from "react-icons/fa";
import { MdLocationOn, MdMail } from "react-icons/md";
import profilePic from "../../images/profile_pic.jpg";
import Link from "next/link";

const ContactMe = () => {
  return (
    <Row className="mt-5 pt-2">
      <Col md="4" className="p-2 offset-md-1 p-5 homeBox border-danger ">
        <Image
          src={profilePic.src}
          className="img"
          id="contact-image"
          alt="Profile Picture"
        />
      </Col>
      <Col className="mt-5">
        <h4>I&apos;m Abba Bawa</h4>
        <p className="fw-bold">
          For over 8 years, I have been providing tech services to businesses.
        </p>
        <p>
          I am a full-stack developer specializing in web, mobile, and desktop
          applications. I work with the MERN stack and have experience with
          frontend technologies like HTML, CSS, JavaScript, and React, as well
          as backend technologies like Node.js and PHP. I also work with
          databases such as MySQL and MongoDB and have knowledge of cloud
          platforms like Google Cloud and AWS.
        </p>
        <div className="d-md-flex flex-wrap justify-content-between">
          <div className="col-md-6 mb-2">
            <FaUserAlt className="me-2 text-danger" />
            Name: Abba Bawa
          </div>
          <div className="col-md-6 mb-2">
            <FaRegCalendar className="me-2 text-danger" />
            Date of birth: 24th September 1992
          </div>
          <div className="col-md-6 mb-2">
            <MdLocationOn className="me-2 text-danger" />
            Address: No 47 Gyang Botsha Street,{" "}
            <span className="d-block ps-4"> Gada Biu Jos. Plateau State.</span>
          </div>
          <div className="col-md-6 mb-2">
            <FaUserGraduate className="me-2 text-danger" />
            Degree: BSc. Computer Science
          </div>
          <div className="col-md-6 mb-2">
            <MdMail className="me-2 text-danger" />
            Email: abbabawa6@gmail.com
          </div>
          <div className="col-md-6 mb-2">
            <FaAddressBook className="me-2 text-danger" />
            Phone: +234 8133217929
          </div>
        </div>
        <div className="col-4 bg-danger border border-danger mt-3"></div>
        <div className="d-flex mt-4">
          <span className="me-3 bg-white p-2">
            <Link
              href={{ pathname: "https://web.facebook.com/abba.bawa/" }}
              target="_blank"
              className="text-dark"
            >
              <FaFacebookF />
            </Link>
          </span>
          <span className="me-3 bg-white p-2">
            <Link
              href={{
                pathname: "https://www.linkedin.com/in/abba-bawa-68265a16a/",
              }}
              target="_blank"
              className="text-dark"
            >
              <FaLinkedinIn />
            </Link>
          </span>
          <span className="me-3 bg-white p-2">
            <Link
              href="https://x.com/Abba87006550"
              target="_blank"
              className="text-dark"
            >
              <FaTwitter />
            </Link>
          </span>
        </div>
        <div className="mt-4">
          <Link
            href={{
              pathname: "/abba-bawa-resume.pdf",
            }}
            target="_blank"
            download="abba-bawa-resume.pdf"
          >
            <button className="btn btn-danger">Download CV</button>
          </Link>
        </div>
      </Col>
    </Row>
  );
};

export default ContactMe;
